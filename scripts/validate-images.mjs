#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🖼️  Validating image references...');

let errors = [];
let warnings = [];
let stats = {
  totalImages: 0,
  missingImages: 0,
  optimizedImages: 0
};

// Image extensions to check
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

// Check if file is an image
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

// Validate images in content directories
function validateContentImages() {
  const contentDirs = ['src/content/portfolio', 'src/content/blog'];
  
  contentDirs.forEach(dirPath => {
    const fullDirPath = path.join(rootDir, dirPath);
    
    if (!fs.existsSync(fullDirPath)) {
      warnings.push(`Content directory does not exist: ${dirPath}`);
      return;
    }

    const folders = fs.readdirSync(fullDirPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    folders.forEach(folder => {
      const folderPath = path.join(fullDirPath, folder);
      
      // Check markdown files for image references
      const markdownFiles = fs.readdirSync(folderPath)
        .filter(file => file.endsWith('.md'));

      markdownFiles.forEach(markdownFile => {
        const markdownPath = path.join(folderPath, markdownFile);
        
        try {
          const content = fs.readFileSync(markdownPath, 'utf8');
          const { data: frontmatter, content: markdownContent } = matter(content);
          
          // Check frontmatter image fields
          const imageFields = ['background_image', 'logo', 'images'];
          imageFields.forEach(field => {
            if (frontmatter[field]) {
              if (Array.isArray(frontmatter[field])) {
                frontmatter[field].forEach(imagePath => {
                  validateImageReference(imagePath, folderPath, `${dirPath}/${folder}/${markdownFile}`);
                });
              } else {
                validateImageReference(frontmatter[field], folderPath, `${dirPath}/${folder}/${markdownFile}`);
              }
            }
          });

          // Check markdown content for image references
          const imageRegex = /!\[.*?\]\(([^)]+)\)/g;
          let match;
          while ((match = imageRegex.exec(markdownContent)) !== null) {
            const imagePath = match[1];
            if (!imagePath.startsWith('http')) { // Skip external URLs
              validateImageReference(imagePath, folderPath, `${dirPath}/${folder}/${markdownFile}`);
            }
          }
          
        } catch (error) {
          errors.push(`Error reading ${dirPath}/${folder}/${markdownFile}: ${error.message}`);
        }
      });

      // Check for orphaned images in content folders
      const imageFiles = fs.readdirSync(folderPath)
        .filter(file => isImageFile(file));

      if (imageFiles.length > 0) {
        stats.totalImages += imageFiles.length;
        
        // Check if these images are referenced
        imageFiles.forEach(imageFile => {
          const isReferenced = checkIfImageIsReferenced(imageFile, folderPath);
          
          if (!isReferenced) {
            warnings.push(`Orphaned image (not referenced): ${dirPath}/${folder}/${imageFile}`);
          }
        });
      }
    });
  });
}

// Validate a specific image reference
function validateImageReference(imagePath, contextPath, sourceFile) {
  stats.totalImages++;
  
  // Handle relative paths
  let fullImagePath;
  if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
    fullImagePath = path.resolve(contextPath, imagePath);
  } else if (imagePath.startsWith('/')) {
    fullImagePath = path.join(rootDir, 'public', imagePath);
  } else {
    fullImagePath = path.join(contextPath, imagePath);
  }

  // Check if image exists
  if (!fs.existsSync(fullImagePath)) {
    errors.push(`Missing image: ${imagePath} (referenced in ${sourceFile})`);
    stats.missingImages++;
  } else {
    // Check if optimized version exists
    const optimizedPath = getOptimizedImagePath(imagePath);
    if (optimizedPath && fs.existsSync(optimizedPath)) {
      stats.optimizedImages++;
    }
  }
}

// Check if an image file is referenced in any markdown files
function checkIfImageIsReferenced(imageFile, folderPath) {
  const markdownFiles = fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.md'));

  return markdownFiles.some(markdownFile => {
    const markdownPath = path.join(folderPath, markdownFile);
    const content = fs.readFileSync(markdownPath, 'utf8');
    
    // Check if image is referenced in content or frontmatter
    return content.includes(imageFile);
  });
}

// Get optimized image path
function getOptimizedImagePath(imagePath) {
  // Check if there's an optimized version in public/optimized
  const basename = path.basename(imagePath, path.extname(imagePath));
  const optimizedDir = path.join(rootDir, 'public/optimized');
  
  if (!fs.existsSync(optimizedDir)) return null;
  
  // Look for optimized versions
  const possiblePaths = [
    path.join(optimizedDir, 'portfolio', basename, 'thumbnail.webp'),
    path.join(optimizedDir, 'blog', basename, 'thumbnail.webp'),
    path.join(optimizedDir, basename + '.webp')
  ];
  
  return possiblePaths.find(p => fs.existsSync(p));
}

// Validate public images
function validatePublicImages() {
  const publicImageDirs = [
    'public/images',
    'public/icons',
    'public/optimized'
  ];

  publicImageDirs.forEach(dirPath => {
    const fullDirPath = path.join(rootDir, dirPath);
    
    if (fs.existsSync(fullDirPath)) {
      const files = getAllImageFiles(fullDirPath);
      stats.totalImages += files.length;
      
      // Check for very large images that should be optimized
      files.forEach(filePath => {
        const stats = fs.statSync(filePath);
        const sizeInMB = stats.size / (1024 * 1024);
        
        if (sizeInMB > 2) { // Images larger than 2MB
          warnings.push(`Large image file (${sizeInMB.toFixed(1)}MB): ${path.relative(rootDir, filePath)}`);
        }
      });
    }
  });
}

// Get all image files in a directory recursively
function getAllImageFiles(dir) {
  let files = [];
  
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files = files.concat(getAllImageFiles(fullPath));
    } else if (isImageFile(item.name)) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Check for common image optimization issues
function checkImageOptimization() {
  const optimizedDir = path.join(rootDir, 'public/optimized');
  const manifestPath = path.join(optimizedDir, 'manifest.json');
  
  if (!fs.existsSync(manifestPath)) {
    warnings.push('Image optimization manifest not found. Run "npm run build:images"');
    return;
  }

  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    if (manifest.portfolio) {
      const portfolioItems = Object.keys(manifest.portfolio).length;
      console.log(`   📁 Optimized portfolio images: ${portfolioItems} items`);
    }
    
    if (manifest.blog) {
      const blogItems = Object.keys(manifest.blog).length;
      console.log(`   📁 Optimized blog images: ${blogItems} items`);
    }
    
  } catch (error) {
    errors.push(`Error reading image manifest: ${error.message}`);
  }
}

// Run all validations
validateContentImages();
validatePublicImages();
checkImageOptimization();

// Report results
console.log(`\n📊 Image Validation Results:`);
console.log(`   🖼️  Total images found: ${stats.totalImages}`);
console.log(`   ✅ Optimized images: ${stats.optimizedImages}`);

if (stats.missingImages > 0) {
  console.log(`   ❌ Missing images: ${stats.missingImages}`);
}

if (warnings.length > 0) {
  console.log(`\n⚠️  Warnings (${warnings.length}):`);
  warnings.forEach(warning => console.log(`   ${warning}`));
}

if (errors.length > 0) {
  console.log(`\n❌ Errors (${errors.length}):`);
  errors.forEach(error => console.log(`   ${error}`));
  console.log('\n💡 Please fix missing image references or run "npm run build:images"');
  process.exit(1);
} else {
  console.log('\n✅ Image validation passed!');
  if (warnings.length > 0) {
    console.log('📝 Consider optimizing the images mentioned in warnings.');
  }
}
