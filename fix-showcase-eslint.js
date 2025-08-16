#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Showcase component fixes
const showcaseComponentFixes = {
  "src/components/design-system/components/BlogShowcase.tsx": {
    removeImports: ["Star"],
  },
  "src/components/design-system/components/ButtonsShowcase.tsx": {
    removeImports: ["Pause"],
  },
  "src/components/design-system/components/CardsShowcase.tsx": {
    removeImports: ["Badge"],
  },
  "src/components/design-system/components/EffectsShowcase.tsx": {
    removeImports: [
      "BentoLayouts",
      "Sparkles",
      "Grid3X3",
      "Loader",
      "Palette",
      "ImageIcon",
      "Heart",
      "Zap",
      "Target",
      "Camera",
      "RotateCcw",
    ],
  },
  "src/components/design-system/components/FormsShowcase.tsx": {
    removeImports: ["Badge"],
  },
  "src/components/design-system/components/PortfolioShowcase.tsx": {
    removeImports: ["Building", "FileText", "Image", "Briefcase", "BookOpen"],
  },
  "src/components/design-system/components/ProfessionalShowcase.tsx": {
    removeImports: ["MapPin"],
  },
  "src/components/design-system/components/SectionShowcase.tsx": {
    removeImports: ["Badge"],
  },
};

function removeUnusedImport(content, importName) {
  // Remove from import statements with better regex patterns
  const patterns = [
    // Remove from middle of import list: ", ImportName,"
    new RegExp(`\\s*,\\s*${importName}\\s*,`, "g"),
    // Remove from start of import list: "ImportName, "
    new RegExp(`\\b${importName}\\s*,\\s*`, "g"),
    // Remove from end of import list: ", ImportName"
    new RegExp(`\\s*,\\s*${importName}\\b`, "g"),
    // Remove single import: "ImportName"
    new RegExp(`\\b${importName}\\b`, "g"),
  ];

  let newContent = content;
  let found = false;

  patterns.forEach((pattern) => {
    const matches = [...content.matchAll(pattern)];
    matches.forEach((match) => {
      const beforeMatch = content.substring(0, match.index);
      const lineStart = beforeMatch.lastIndexOf("\n");
      const line = content.substring(
        lineStart,
        match.index + match[0].length + 50
      );

      // Check if this is in an import statement
      if (line.includes("import") && line.includes("from")) {
        newContent = newContent.replace(pattern, (fullMatch) => {
          found = true;
          if (fullMatch.includes(",")) {
            return fullMatch.startsWith(",") ? "" : ", ";
          }
          return "";
        });
      }
    });
  });

  return { content: newContent, found };
}

function fixFile(filePath, fixes) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  if (fixes.removeImports) {
    fixes.removeImports.forEach((importName) => {
      const result = removeUnusedImport(content, importName);
      if (result.found) {
        content = result.content;
        modified = true;
        console.log(`Removed ${importName} from ${filePath}`);
      }
    });
  }

  // Clean up malformed imports
  content = content.replace(/import\s*{\s*,+\s*/g, "import { ");
  content = content.replace(/,\s*,+/g, ",");
  content = content.replace(/,\s*}\s*from/g, " } from");
  content = content.replace(/{\s*,+\s*}/g, "{}");
  content = content.replace(/import\s*{\s*}\s*from[^;]+;\n?/g, "");

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Fix showcase component files
Object.keys(showcaseComponentFixes).forEach((relativePath) => {
  const fullPath = path.join(
    "/Users/ehsan.pourhadi/dev/portfolio25",
    relativePath
  );
  fixFile(fullPath, showcaseComponentFixes[relativePath]);
});

console.log("Showcase component ESLint fixes completed");
