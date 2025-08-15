#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🌍 Validating i18n coverage...');

const locales = ['en', 'sv', 'fa'];
const contentDirs = [
  'src/content/portfolio',
  'src/content/blog'
];

let errors = [];
let warnings = [];
let stats = {
  total: 0,
  translated: { sv: 0, fa: 0 },
  missing: { sv: [], fa: [] }
};

// Check translation coverage for content files
function checkContentTranslations() {
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
      stats.total++;

      // Check for translation files
      ['sv', 'fa'].forEach(locale => {
        const translationFile = `${folder}.${locale}.md`;
        const translationPath = path.join(folderPath, translationFile);
        
        if (fs.existsSync(translationPath)) {
          stats.translated[locale]++;
        } else {
          stats.missing[locale].push(`${dirPath}/${folder}/${translationFile}`);
        }
      });
    });
  });
}

// Check data file translations
function checkDataTranslations() {
  const dataDir = path.join(rootDir, 'src/data');
  const i18nDir = path.join(dataDir, 'i18n');
  
  if (!fs.existsSync(i18nDir)) {
    warnings.push('i18n data directory does not exist: src/data/i18n');
    return;
  }

  ['sv', 'fa'].forEach(locale => {
    const localeFile = path.join(i18nDir, `${locale}.json`);
    
    if (!fs.existsSync(localeFile)) {
      warnings.push(`Missing locale data file: src/data/i18n/${locale}.json`);
    } else {
      try {
        const content = fs.readFileSync(localeFile, 'utf8');
        JSON.parse(content);
      } catch (error) {
        errors.push(`Invalid JSON in src/data/i18n/${locale}.json: ${error.message}`);
      }
    }
  });
}

// Calculate translation coverage
function calculateCoverage() {
  const coverage = {
    sv: stats.total > 0 ? (stats.translated.sv / stats.total * 100).toFixed(1) : 0,
    fa: stats.total > 0 ? (stats.translated.fa / stats.total * 100).toFixed(1) : 0
  };
  
  return coverage;
}

// Check for translation quality issues
function checkTranslationQuality() {
  contentDirs.forEach(dirPath => {
    const fullDirPath = path.join(rootDir, dirPath);
    
    if (!fs.existsSync(fullDirPath)) return;

    const folders = fs.readdirSync(fullDirPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    folders.forEach(folder => {
      const folderPath = path.join(fullDirPath, folder);
      
      // Check if translation files are significantly shorter than original
      const originalFile = path.join(folderPath, `${folder}.md`);
      
      if (!fs.existsSync(originalFile)) return;
      
      const originalLength = fs.readFileSync(originalFile, 'utf8').length;
      
      ['sv', 'fa'].forEach(locale => {
        const translationFile = path.join(folderPath, `${folder}.${locale}.md`);
        
        if (fs.existsSync(translationFile)) {
          const translationLength = fs.readFileSync(translationFile, 'utf8').length;
          
          // If translation is less than 50% of original length, flag as potential issue
          if (translationLength < originalLength * 0.5) {
            warnings.push(`${dirPath}/${folder}/${folder}.${locale}.md appears to be significantly shorter than original`);
          }
        }
      });
    });
  });
}

// Run all validations
checkContentTranslations();
checkDataTranslations();
checkTranslationQuality();

const coverage = calculateCoverage();

// Report results
console.log(`\n📊 Translation Coverage Report:`);
console.log(`   📄 Total content items: ${stats.total}`);
console.log(`   🇸🇪 Swedish coverage: ${coverage.sv}% (${stats.translated.sv}/${stats.total})`);
console.log(`   🇮🇷 Persian coverage: ${coverage.fa}% (${stats.translated.fa}/${stats.total})`);

if (stats.missing.sv.length > 0) {
  console.log(`\n📝 Missing Swedish translations (${stats.missing.sv.length}):`);
  stats.missing.sv.slice(0, 5).forEach(file => console.log(`   ${file}`));
  if (stats.missing.sv.length > 5) {
    console.log(`   ... and ${stats.missing.sv.length - 5} more`);
  }
}

if (stats.missing.fa.length > 0) {
  console.log(`\n📝 Missing Persian translations (${stats.missing.fa.length}):`);
  stats.missing.fa.slice(0, 5).forEach(file => console.log(`   ${file}`));
  if (stats.missing.fa.length > 5) {
    console.log(`   ... and ${stats.missing.fa.length - 5} more`);
  }
}

if (warnings.length > 0) {
  console.log(`\n⚠️  Warnings (${warnings.length}):`);
  warnings.forEach(warning => console.log(`   ${warning}`));
}

if (errors.length > 0) {
  console.log(`\n❌ Errors (${errors.length}):`);
  errors.forEach(error => console.log(`   ${error}`));
  process.exit(1);
}

// Set minimum coverage thresholds
const minCoverage = 80; // 80% minimum coverage
if (parseFloat(coverage.sv) < minCoverage || parseFloat(coverage.fa) < minCoverage) {
  console.log(`\n⚠️  Translation coverage below ${minCoverage}% threshold`);
  console.log('💡 Run "npm run translate" to generate missing translations');
  
  // Don't fail the build for translation coverage in CI, just warn
  if (process.env.CI) {
    console.log('🔄 CI environment detected - continuing despite low coverage');
  }
} else {
  console.log('\n✅ i18n validation passed!');
}
