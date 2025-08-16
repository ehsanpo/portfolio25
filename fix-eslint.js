#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Common unused imports to remove
const commonUnusedImports = [
  "Calendar",
  "CardContent",
  "CardDescription",
  "Shield",
  "Zap",
  "MessageCircle",
  "Button",
  "Badge",
  "Input",
  "dynamic",
  "useEffect",
  "useState",
];

// File-specific fixes
const fileFixes = {
  "src/components/design-system/DataVisualization.tsx": {
    removeImports: ["Zap"],
  },
  "src/components/design-system/DesignTokens.tsx": {
    removeImports: ["typography"],
  },
  "src/components/design-system/Iconography.tsx": {
    removeImports: ["Minus", "Calendar", "Map", "Folder", "Print"],
  },
  "src/components/design-system/Overview.tsx": {
    removeImports: ["CardContent"],
  },
  "src/components/design-system/Responsiveness.tsx": {
    removeImports: ["Button"],
  },
  "src/components/design-system/SectionDividers.tsx": {
    removeImports: ["Waves"],
  },
  "src/components/design-system/ToneOfVoice.tsx": {
    removeImports: ["MessageCircle"],
  },
  "src/components/design-system/UIPatterns.tsx": {
    removeImports: ["Badge", "Input"],
  },
};

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Get file-specific fixes
  const fixes =
    fileFixes[filePath.replace("/Users/ehsan.pourhadi/dev/portfolio25/", "")];

  if (fixes && fixes.removeImports) {
    fixes.removeImports.forEach((importName) => {
      // Remove from import lists
      const importRegex = new RegExp(`\\s*,?\\s*${importName}\\s*,?`, "g");
      const newContent = content.replace(importRegex, (match) => {
        // If it's between commas, replace with single comma
        if (match.includes(",")) {
          return ", ";
        }
        return "";
      });

      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Removed ${importName} from ${filePath}`);
      }
    });
  }

  // Clean up empty import lines and fix formatting
  content = content.replace(/import\s*{\s*,\s*}/g, "");
  content = content.replace(/import\s*{\s*}\s*from[^;]+;/g, "");
  content = content.replace(/,\s*,/g, ",");
  content = content.replace(/{\s*,/g, "{");
  content = content.replace(/,\s*}/g, "}");

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Fix all files
Object.keys(fileFixes).forEach((relativePath) => {
  const fullPath = path.join(
    "/Users/ehsan.pourhadi/dev/portfolio25",
    relativePath
  );
  fixFile(fullPath);
});

console.log("ESLint fixes completed");
