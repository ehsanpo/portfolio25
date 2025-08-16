#!/usr/bin/env node

import fs from "fs";
import path from "path";

// UI component fixes
const uiComponentFixes = {
  "src/components/ui/ArticleLayout.tsx": {
    removeImports: [
      "CardContent",
      "CardDescription",
      "ArrowLeft",
      "Coffee",
      "Headphones",
      "Type",
      "Zap",
    ],
  },
  "src/components/ui/AudioPlayer.tsx": {
    removeImports: ["CardContent", "CardDescription", "CardTitle"],
  },
  "src/components/ui/AuthorCard.tsx": {
    removeImports: ["User", "ExternalLink", "Users", "BookOpen"],
  },
  "src/components/ui/BlogCard.tsx": {
    removeImports: ["User", "ExternalLink"],
  },
  "src/components/ui/CaseStudyLayout.tsx": {
    removeImports: ["CardDescription", "Calendar"],
  },
  "src/components/ui/ClientLogosGrid.tsx": {
    removeImports: [
      "CardDescription",
      "Building",
      "Users",
      "Award",
      "TrendingUp",
      "Heart",
      "Eye",
      "Filter",
      "Zap",
    ],
  },
  "src/components/ui/DownloadCenter.tsx": {
    removeImports: [
      "Image",
      "ExternalLink",
      "User",
      "Archive",
      "CheckCircle",
      "Clock",
    ],
  },
  "src/components/ui/EducationTimeline.tsx": {
    removeImports: [
      "CardContent",
      "CardDescription",
      "CardTitle",
      "Award",
      "BookOpen",
      "Clock",
    ],
  },
  "src/components/ui/Footer.tsx": {
    removeImports: ["Home"],
  },
  "src/components/ui/GlobalAudioPlayer.tsx": {
    removeImports: ["dynamic", "Maximize2"],
  },
  "src/components/ui/ImageGallery.tsx": {
    removeImports: ["Grid3X3"],
  },
  "src/components/ui/ProcessFlow.tsx": {
    removeImports: [
      "CardContent",
      "Search",
      "Lightbulb",
      "Palette",
      "Code",
      "TestTube",
      "Rocket",
      "ArrowRight",
      "ArrowDown",
      "Target",
      "AlertCircle",
      "Zap",
    ],
  },
  "src/components/ui/ProjectCard.tsx": {
    removeImports: ["Play"],
  },
  "src/components/ui/ShareButtons.tsx": {
    removeImports: ["Badge", "Link", "MessageCircle", "Send"],
  },
  "src/components/ui/SkillCard.tsx": {
    removeImports: ["Star"],
  },
  "src/components/ui/StatsDashboard.tsx": {
    removeImports: ["Calendar", "BarChart3", "PieChart", "LineChart"],
  },
  "src/components/ui/TechStackVisualizer.tsx": {
    removeImports: ["useEffect", "Star", "Award", "Eye", "EyeOff", "Filter"],
  },
  "src/components/ui/WorkExperience.tsx": {
    removeImports: [
      "CardContent",
      "CardDescription",
      "CardTitle",
      "Building",
      "Clock",
      "TrendingUp",
    ],
  },
};

function removeUnusedImport(content, importName) {
  // Remove from import statements
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
  patterns.forEach((pattern) => {
    newContent = newContent.replace(pattern, (match, offset) => {
      // Check if this is actually in an import statement
      const beforeMatch = content.substring(0, offset);
      const importMatch = beforeMatch.match(/import\s*{[^}]*$/);
      if (importMatch) {
        if (match.includes(",")) {
          return ", ";
        }
        return "";
      }
      return match;
    });
  });

  return newContent;
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
      const newContent = removeUnusedImport(content, importName);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Removed ${importName} from ${filePath}`);
      }
    });
  }

  // Clean up malformed imports
  content = content.replace(/import\s*{\s*,/g, "import {");
  content = content.replace(/,\s*}\s*from/g, "} from");
  content = content.replace(/,\s*,/g, ",");
  content = content.replace(/{\s*}/g, "{}");

  // Remove empty import lines
  content = content.replace(/import\s*{\s*}\s*from[^;]+;\n?/g, "");

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Fix all UI component files
Object.keys(uiComponentFixes).forEach((relativePath) => {
  const fullPath = path.join(
    "/Users/ehsan.pourhadi/dev/portfolio25",
    relativePath
  );
  fixFile(fullPath, uiComponentFixes[relativePath]);
});

console.log("UI component ESLint fixes completed");
