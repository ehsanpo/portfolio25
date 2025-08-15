import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

// Fields that should NOT be translated
const SKIP_TRANSLATION_FIELDS = [
  "logo",
  "background_image",
  "image",
  "images",
  "category",
  "categories",
  "tag",
  "tags",
  "type",
  "permalink",
  "id",
  "date",
  "status",
  "author",
  "case_link_url",
  "github_url",
  "demo_url",
  "url",
  "slug",
  "featured_image",
  "thumbnail",
  "gallery",
  "tech_stack",
  "technologies",
  "tools",
  "platform",
  "framework",
  "language",
  "duration",
  "year",
  "client_logo",
  "agency_logo",
];

async function translateWithAI(text, targetLocale, contentType) {
  const mockTranslations = {
    sv: {
      "We run 040": "Vi driver 040",
      "040.fm": "040.fm",
      Freelance: "Frilans",
    },
  };

  const translation = mockTranslations[targetLocale]?.[text];
  if (translation) {
    return translation;
  }

  if (text && text.trim()) {
    return `${text} (${targetLocale.toUpperCase()})`;
  }

  return text;
}

// Test with one file
const testFile =
  "/Users/ehsan.pourhadi/dev/portfolio25/src/content/portfolio/040-fm/040-fm.md";
const content = await fs.readFile(testFile, "utf-8");
const parsed = matter(content);

console.log("Original frontmatter:");
console.log(JSON.stringify(parsed.data, null, 2));

// Translate frontmatter
const translatedData = {};
for (const [key, value] of Object.entries(parsed.data)) {
  if (SKIP_TRANSLATION_FIELDS.includes(key)) {
    console.log(`Skipping: ${key} = ${value}`);
    translatedData[key] = value;
  } else if (typeof value === "string" && value.trim()) {
    const translated = await translateWithAI(value, "sv", "frontmatter");
    console.log(`Translating: ${key} = "${value}" → "${translated}"`);
    translatedData[key] = translated;
  } else {
    translatedData[key] = value;
  }
}

console.log("\nTranslated frontmatter:");
console.log(JSON.stringify(translatedData, null, 2));
