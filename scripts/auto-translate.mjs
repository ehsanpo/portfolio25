import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

/**
 * Auto-translation script for portfolio content
 * Generates missing locale variants for markdown content and JSON str  try {
    const entries = await fs.readdir(portfolioDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = path.join(portfolioDir, entry.name);
        const files = await fs.readdir(subDir);

        for (const file of files) {
          if (file.endsWith('.md')) {
            const fullPath = path.join(subDir, file);
            await generateMissingLocales(fullPath, 'portfolio');
          }
        }
      }
    }
  } catch (error) {ed locales

  */

const LOCALES = ["en", "sv", "fa"];

// Fields that should NOT be translated (technical fields, URLs, file paths, etc.)
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
  "agency",
];

/**
 * Mock AI translation function
 * In production, this would call an actual AI service like OpenAI, Claude, etc.
 */
async function translateWithAI(text, targetLocale, contentType) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 10));

  // Mock translations for demonstration
  const mockTranslations = {
    sv: {
      "Welcome to my portfolio": "Välkommen till min portfölj",
      "About Me": "Om mig",
      Projects: "Projekt",
      Contact: "Kontakt",
      Skills: "Färdigheter",
      Experience: "Erfarenhet",
      Education: "Utbildning",
      Blog: "Blogg",
      Home: "Hem",
      Portfolio: "Portfölj",
      Resume: "CV",
      Download: "Ladda ner",
      "We run 040": "Vi driver 040",
      "Design and development": "Design och utveckling",
      "Web development": "Webbutveckling",
      "Mobile app": "Mobilapp",
      "E-commerce": "E-handel",
      "Brand identity": "Varumärkesidentitet",
    },
    fa: {
      "Welcome to my portfolio": "به نمونه کارهای من خوش آمدید",
      "About Me": "درباره من",
      Projects: "پروژه‌ها",
      Contact: "تماس",
      Skills: "مهارت‌ها",
      Experience: "تجربه",
      Education: "تحصیلات",
      Blog: "بلاگ",
      Home: "خانه",
      Portfolio: "نمونه کارها",
      Resume: "رزومه",
      Download: "دانلود",
      "We run 040": "ما ۰۴۰ را اداره می‌کنیم",
      "Design and development": "طراحی و توسعه",
      "Web development": "توسعه وب",
      "Mobile app": "اپلیکیشن موبایل",
      "E-commerce": "تجارت الکترونیک",
      "Brand identity": "هویت برند",
    },
  };

  // Return mock translation or indicate that AI translation is needed
  const translation = mockTranslations[targetLocale]?.[text];
  if (translation) {
    return translation;
  }

  // For longer texts, return a simplified mock translation without brackets
  if (text && text.trim()) {
    return `${text} (${targetLocale.toUpperCase()})`;
  }

  return text;
}

/**
 * Check if a content file has a variant in the target locale
 */
function hasLocaleVariant(contentPath, locale) {
  const dir = path.dirname(contentPath);
  const filename = path.basename(contentPath, ".md");
  const localeVariant = path.join(dir, `${filename}.${locale}.md`);
  return fs.existsSync(localeVariant);
}

/**
 * Generate missing locale variants for a content file
 */
async function generateMissingLocales(contentPath, contentType) {
  console.log(`Processing ${contentType}: ${contentPath}`);

  // Skip if not a markdown file
  if (!contentPath.endsWith(".md")) {
    return;
  }

  // Skip if already a locale variant (has .locale.md pattern)
  if (/\.(en|sv|fa)\.md$/.test(contentPath)) {
    return;
  }

  try {
    const content = await fs.readFile(contentPath, "utf-8");
    const parsed = matter(content);

    // Generate variants for missing locales
    for (const locale of LOCALES) {
      if (locale === "en") continue; // Skip English (assumed to be the default)

      if (!hasLocaleVariant(contentPath, locale)) {
        console.log(`  Generating ${locale} variant...`);

        const dir = path.dirname(contentPath);
        const filename = path.basename(contentPath, ".md");
        const localeFile = path.join(dir, `${filename}.${locale}.md`);

        // Translate frontmatter
        const translatedData = {};
        for (const [key, value] of Object.entries(parsed.data)) {
          // Skip fields that shouldn't be translated
          if (SKIP_TRANSLATION_FIELDS.includes(key)) {
            translatedData[key] = value;
          } else if (typeof value === "string" && value.trim()) {
            translatedData[key] = await translateWithAI(
              value,
              locale,
              "frontmatter"
            );
          } else {
            translatedData[key] = value; // Keep non-string values as-is
          }
        }

        // Translate content body
        let translatedContent = parsed.content;
        if (parsed.content && parsed.content.trim()) {
          translatedContent = await translateWithAI(
            parsed.content,
            locale,
            contentType
          );
        }

        // Create new file with translated content
        const newContent = matter.stringify(translatedContent, translatedData);
        await fs.writeFile(localeFile, newContent, "utf-8");

        console.log(`    Created: ${localeFile}`);
      } else {
        console.log(`  ${locale} variant already exists`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${contentPath}:`, error.message);
  }
}

/**
 * Process all portfolio content files
 */
async function processPortfolioContent() {
  console.log("Processing portfolio content...");

  const portfolioDir = path.join(process.cwd(), "src", "content", "portfolio");

  if (!fs.existsSync(portfolioDir)) {
    console.log("Portfolio content directory not found, skipping...");
    return;
  }

  try {
    const entries = await fs.readdir(portfolioDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = path.join(portfolioDir, entry.name);
        const files = await fs.readdir(subDir);

        for (const file of files) {
          if (file.endsWith(".md")) {
            const fullPath = path.join(subDir, file);
            await generateMissingLocales(fullPath, "portfolio");
          }
        }
      }
    }
  } catch (error) {
    console.error("Error processing portfolio content:", error.message);
  }
}

/**
 * Process all blog content files
 */
async function processBlogContent() {
  console.log("Processing blog content...");

  const blogDir = path.join(process.cwd(), "src", "content", "blog");

  if (!fs.existsSync(blogDir)) {
    console.log("Blog content directory not found, skipping...");
    return;
  }

  try {
    const files = await fs.readdir(blogDir, { recursive: true });

    for (const file of files) {
      if (file.endsWith(".md")) {
        const fullPath = path.join(blogDir, file);
        await generateMissingLocales(fullPath, "blog");
      }
    }
  } catch (error) {
    console.error("Error processing blog content:", error.message);
  }
}

/**
 * Generate translations for JSON strings in portfolio.json
 */
async function generateJSONTranslations() {
  console.log("Processing JSON translations...");

  const portfolioJsonPath = path.join(
    process.cwd(),
    "src",
    "data",
    "portfolio.json"
  );

  if (!fs.existsSync(portfolioJsonPath)) {
    console.log("portfolio.json not found, skipping JSON translations...");
    return;
  }

  try {
    const portfolioData = await fs.readJson(portfolioJsonPath);

    // Generate locale-specific JSON files
    for (const locale of LOCALES) {
      if (locale === "en") continue; // Skip English (assumed to be the default)

      const localeJsonPath = path.join(
        process.cwd(),
        "src",
        "data",
        `portfolio.${locale}.json`
      );

      if (!fs.existsSync(localeJsonPath)) {
        console.log(`  Generating ${locale} JSON translations...`);

        // Clone the original data
        const translatedData = JSON.parse(JSON.stringify(portfolioData));

        // Translate navigation items
        if (translatedData.navigation) {
          if (translatedData.navigation.main) {
            translatedData.navigation.main = await Promise.all(
              translatedData.navigation.main.map(async (item) => ({
                ...item,
                label: await translateWithAI(item.label, locale, "portfolio"),
                title: item.title
                  ? await translateWithAI(item.title, locale, "portfolio")
                  : item.title,
              }))
            );
          }

          if (translatedData.navigation.footer) {
            translatedData.navigation.footer = await Promise.all(
              translatedData.navigation.footer.map(async (item) => ({
                ...item,
                label: await translateWithAI(item.label, locale, "portfolio"),
                title: item.title
                  ? await translateWithAI(item.title, locale, "portfolio")
                  : item.title,
              }))
            );
          }
        }

        // Translate metadata
        if (translatedData.metadata) {
          for (const [key, value] of Object.entries(translatedData.metadata)) {
            if (typeof value === "string") {
              translatedData.metadata[key] = await translateWithAI(
                value,
                locale,
                "portfolio"
              );
            }
          }
        }

        // Save translated JSON
        await fs.writeJson(localeJsonPath, translatedData, { spaces: 2 });
        console.log(`    Created: ${localeJsonPath}`);
      } else {
        console.log(`  ${locale} JSON already exists`);
      }
    }
  } catch (error) {
    console.error("Error processing JSON translations:", error.message);
  }
}

/**
 * Main function to run auto-translation
 */
export async function autoTranslate() {
  console.log("🌍 Starting auto-translation process...");
  console.log(`Supported locales: ${LOCALES.join(", ")}`);
  console.log("");

  try {
    // Process different content types
    await processPortfolioContent();
    console.log("");

    await processBlogContent();
    console.log("");

    await generateJSONTranslations();
    console.log("");

    console.log("✅ Auto-translation process completed!");
    console.log("");
    console.log(
      "📝 Note: This script uses mock translations for demonstration."
    );
    console.log(
      "   In production, integrate with a real AI translation service."
    );
  } catch (error) {
    console.error("❌ Auto-translation failed:", error.message);
    process.exit(1);
  }
}

// Run the script
console.log("🚀 Starting auto-translate script...");
console.log("Current working directory:", process.cwd());

try {
  await autoTranslate();
  console.log("✅ Script execution finished.");
} catch (error) {
  console.error("❌ Script failed:", error);
}
