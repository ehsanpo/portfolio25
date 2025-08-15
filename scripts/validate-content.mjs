#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🔍 Validating content structure...');

let errors = [];
let warnings = [];

// Content directories to validate
const contentDirs = [
  'src/content/portfolio',
  'src/content/blog'
];

// Required frontmatter fields
const requiredFields = {
  portfolio: ['title', 'description', 'client', 'year', 'tags', 'status'],
  blog: ['title', 'description', 'date', 'tags', 'status']
};

// Validate frontmatter fields
function validateFrontmatter(filePath, frontmatter, type) {
  const required = requiredFields[type] || [];
  const missing = required.filter(field => !frontmatter[field]);
  
  if (missing.length > 0) {
    errors.push(`${filePath}: Missing required fields: ${missing.join(', ')}`);
  }

  // Check for valid status
  if (frontmatter.status && !['published', 'draft', 'archived'].includes(frontmatter.status)) {
    warnings.push(`${filePath}: Invalid status '${frontmatter.status}', should be: published, draft, or archived`);
  }

  // Check for valid year format
  if (type === 'portfolio' && frontmatter.year) {
    const year = parseInt(frontmatter.year);
    if (isNaN(year) || year < 2000 || year > new Date().getFullYear()) {
      warnings.push(`${filePath}: Invalid year '${frontmatter.year}'`);
    }
  }

  // Check for valid date format (blog posts)
  if (type === 'blog' && frontmatter.date) {
    const date = new Date(frontmatter.date);
    if (isNaN(date.getTime())) {
      errors.push(`${filePath}: Invalid date format '${frontmatter.date}'`);
    }
  }

  // Check tags are arrays
  if (frontmatter.tags && !Array.isArray(frontmatter.tags)) {
    errors.push(`${filePath}: Tags should be an array`);
  }
}

// Validate markdown files
function validateMarkdownFiles() {
  contentDirs.forEach(dirPath => {
    const fullDirPath = path.join(rootDir, dirPath);
    
    if (!fs.existsSync(fullDirPath)) {
      warnings.push(`Content directory does not exist: ${dirPath}`);
      return;
    }

    const type = dirPath.includes('portfolio') ? 'portfolio' : 'blog';
    const folders = fs.readdirSync(fullDirPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    folders.forEach(folder => {
      const folderPath = path.join(fullDirPath, folder);
      
      // Check for main markdown file
      const mainFile = `${folder}.md`;
      const mainFilePath = path.join(folderPath, mainFile);
      
      if (!fs.existsSync(mainFilePath)) {
        errors.push(`Missing main markdown file: ${path.join(dirPath, folder, mainFile)}`);
        return;
      }

      // Validate main file frontmatter
      try {
        const content = fs.readFileSync(mainFilePath, 'utf8');
        const { data: frontmatter } = matter(content);
        validateFrontmatter(path.join(dirPath, folder, mainFile), frontmatter, type);
      } catch (error) {
        errors.push(`Error parsing ${path.join(dirPath, folder, mainFile)}: ${error.message}`);
      }

      // Check for translation files
      const locales = ['sv', 'fa'];
      locales.forEach(locale => {
        const translationFile = `${folder}.${locale}.md`;
        const translationPath = path.join(folderPath, translationFile);
        
        if (fs.existsSync(translationPath)) {
          try {
            const content = fs.readFileSync(translationPath, 'utf8');
            const { data: frontmatter } = matter(content);
            validateFrontmatter(path.join(dirPath, folder, translationFile), frontmatter, type);
          } catch (error) {
            errors.push(`Error parsing ${path.join(dirPath, folder, translationFile)}: ${error.message}`);
          }
        }
      });
    });
  });
}

// Validate data files
function validateDataFiles() {
  const dataFiles = ['src/data/portfolio.json', 'src/data/resume.json'];
  
  dataFiles.forEach(filePath => {
    const fullPath = path.join(rootDir, filePath);
    
    if (!fs.existsSync(fullPath)) {
      errors.push(`Missing data file: ${filePath}`);
      return;
    }

    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      JSON.parse(content);
    } catch (error) {
      errors.push(`Invalid JSON in ${filePath}: ${error.message}`);
    }
  });
}

// Check for duplicate slugs
function checkDuplicateSlugs() {
  const slugs = new Set();
  const duplicates = [];

  contentDirs.forEach(dirPath => {
    const fullDirPath = path.join(rootDir, dirPath);
    
    if (!fs.existsSync(fullDirPath)) return;

    const folders = fs.readdirSync(fullDirPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    folders.forEach(folder => {
      if (slugs.has(folder)) {
        duplicates.push(folder);
      } else {
        slugs.add(folder);
      }
    });
  });

  if (duplicates.length > 0) {
    errors.push(`Duplicate slugs found: ${duplicates.join(', ')}`);
  }
}

// Run all validations
validateMarkdownFiles();
validateDataFiles();
checkDuplicateSlugs();

// Report results
console.log(`\n📊 Validation Results:`);
console.log(`   ✅ Content directories checked: ${contentDirs.length}`);

if (warnings.length > 0) {
  console.log(`\n⚠️  Warnings (${warnings.length}):`);
  warnings.forEach(warning => console.log(`   ${warning}`));
}

if (errors.length > 0) {
  console.log(`\n❌ Errors (${errors.length}):`);
  errors.forEach(error => console.log(`   ${error}`));
  console.log('\n💡 Please fix the errors above before deploying.');
  process.exit(1);
} else {
  console.log('\n✅ Content validation passed!');
  if (warnings.length > 0) {
    console.log('📝 Consider addressing the warnings above.');
  }
}
