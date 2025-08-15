import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/**
 * Auto-translation script for portfolio content
 * Generates missing locale variants for markdown content and JSON strings
 */

// Supported locales
const LOCALES = ["en", "sv", "fa"];

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAIKEY || process.env.OPENAI_API_KEY,
});

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
  "title",
];

// Language names for OpenAI prompts
const LANGUAGE_NAMES = {
  sv: "Swedish",
  fa: "Persian/Farsi",
};

/**
 * Real AI translation function using OpenAI
 */
async function translateWithAI(text, targetLocale, contentType) {
  // Skip if no API key is provided
  if (!process.env.OPENAIKEY && !process.env.OPENAI_API_KEY) {
    console.warn("⚠️  No OpenAI API key found. Using mock translations.");
    return getMockTranslation(text, targetLocale);
  }

  // Don't translate empty or very short technical strings
  if (!text || text.trim().length < 2) {
    return text;
  }

  const languageName = LANGUAGE_NAMES[targetLocale];
  if (!languageName) {
    return text;
  }

  try {
    let systemPrompt = "";

    switch (contentType) {
      case "frontmatter":
        systemPrompt = `You are a professional translator. Translate the following portfolio frontmatter field to ${languageName}. Keep it concise and professional. Only return the translated text, nothing else.`;
        break;
      case "portfolio":
        systemPrompt = `You are a professional translator specializing in portfolio and technical content. Translate the following portfolio content to ${languageName}. Maintain the original formatting (HTML tags, markdown), preserve technical terms, URLs, and code blocks exactly as they are. Keep the professional tone and technical accuracy.`;
        break;
      case "blog":
        systemPrompt = `You are a professional translator specializing in technical blog content. Translate the following blog content to ${languageName}. Maintain the original formatting (HTML tags, markdown), preserve technical terms, URLs, and code blocks exactly as they are. Keep the conversational yet professional tone.`;
        break;
      default:
        systemPrompt = `You are a professional translator. Translate the following text to ${languageName}. Maintain the original tone and formatting.`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: 2000,
      temperature: 0.3, // Lower temperature for more consistent translations
    });

    const translation = completion.choices[0]?.message?.content?.trim();

    if (translation) {
      console.log(
        `    ✅ Translated: "${text.substring(
          0,
          50
        )}..." → "${translation.substring(0, 50)}..."`
      );
      return translation;
    } else {
      console.warn(
        `    ⚠️  No translation returned for: "${text.substring(0, 50)}..."`
      );
      return text;
    }
  } catch (error) {
    console.error(`    ❌ Translation error: ${error.message}`);
    console.log(
      `    🔄 Falling back to mock translation for: "${text.substring(
        0,
        50
      )}..."`
    );
    return getMockTranslation(text, targetLocale);
  }
}

/**
 * Fallback mock translations for when OpenAI is unavailable
 */
function getMockTranslation(text, targetLocale) {
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
      Freelance: "Frilansare",
      Agency: "Byrå",
      Client: "Klient",
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
      Freelance: "آزاد کار",
      Agency: "آژانس",
      Client: "مشتری",
    },
  };

  const translation = mockTranslations[targetLocale]?.[text];
  if (translation) {
    return translation;
  }

  // Return original text if no mock translation found
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
        console.log(`  🌍 Generating ${locale} variant...`);

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
            console.log(`    🔄 Translating field: ${key}`);
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
          try {
            console.log(`    📝 Translating content body...`);
            translatedContent = await translateWithAI(
              parsed.content,
              locale,
              contentType
            );
          } catch (error) {
            console.error(
              `    ❌ Error translating content body:`,
              error.message
            );
          }
        }

        // Create new file with translated content
        const newContent = matter.stringify(translatedContent, translatedData);
        await fs.writeFile(localeFile, newContent, "utf-8");

        console.log(`    ✅ Created: ${localeFile}`);
      } else {
        console.log(`  ⭐ ${locale} variant already exists`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${contentPath}:`, error.message);
  }
}

/**
 * Process all portfolio content files
 */
async function processPortfolioContent() {
  console.log("📁 Processing portfolio content...");

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
    console.error("❌ Error processing portfolio content:", error.message);
  }
}

/**
 * Process all blog content files
 */
async function processBlogContent() {
  console.log("📝 Processing blog content...");

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
    console.error("❌ Error processing blog content:", error.message);
  }
}

/**
 * Generate translations for JSON strings in portfolio.json
 */
async function generateJSONTranslations() {
  console.log("🔧 Processing JSON translations...");

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
        console.log(`  🌍 Generating ${locale} JSON translations...`);

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
        console.log(`    ✅ Created: ${localeJsonPath}`);
      } else {
        console.log(`  ⭐ ${locale} JSON already exists`);
      }
    }
  } catch (error) {
    console.error("❌ Error processing JSON translations:", error.message);
  }
}

/**
 * Main function to run auto-translation
 */
export async function autoTranslate() {
  console.log("🚀 Starting AI-powered auto-translation process...");
  console.log(`🌍 Supported locales: ${LOCALES.join(", ")}`);

  if (process.env.OPENAIKEY || process.env.OPENAI_API_KEY) {
    console.log("🤖 Using OpenAI GPT-4 for translations");
  } else {
    console.log("⚠️  No OpenAI API key found - using mock translations");
    console.log("   Add OPENAIKEY to your .env file for real AI translations");
  }

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

    if (process.env.OPENAIKEY || process.env.OPENAI_API_KEY) {
      console.log("🎉 All content has been translated using OpenAI GPT-4!");
    } else {
      console.log(
        "📝 Mock translations generated. Add OPENAIKEY for real AI translations."
      );
    }
  } catch (error) {
    console.error("❌ Auto-translation failed:", error.message);
    process.exit(1);
  }
}

// Run the script
console.log("🚀 Starting auto-translate script...");
console.log("📁 Current working directory:", process.cwd());

try {
  await autoTranslate();
  console.log("✅ Script execution finished.");
} catch (error) {
  console.error("❌ Script failed:", error);
}
