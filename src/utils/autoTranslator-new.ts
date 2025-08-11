import { Locale } from "../hooks/useI18n";

export type TranslationProvider = "openai" | "google" | "mock";

export interface TranslationRequest {
  text: string;
  fromLocale: Locale;
  toLocale: Locale;
  context?: string;
}

export interface TranslationResult {
  translatedText: string;
  confidence: number;
  provider: TranslationProvider;
}

class AutoTranslator {
  private apiKey?: string;
  private provider: TranslationProvider = "mock";

  constructor(provider: TranslationProvider = "mock", apiKey?: string) {
    this.provider = provider;
    this.apiKey = apiKey;
  }

  async translate(request: TranslationRequest): Promise<TranslationResult> {
    const { text, fromLocale, toLocale } = request;

    // Skip translation if same locale
    if (fromLocale === toLocale) {
      return {
        translatedText: text,
        confidence: 1.0,
        provider: this.provider,
      };
    }

    switch (this.provider) {
      case "openai":
        return this.translateWithOpenAI(request);
      case "google":
        return this.translateWithGoogle(request);
      case "mock":
      default:
        return this.translateWithMock(request);
    }
  }

  private async translateWithOpenAI(
    request: TranslationRequest
  ): Promise<TranslationResult> {
    if (!this.apiKey) {
      throw new Error("OpenAI API key is required");
    }

    const { text, fromLocale, toLocale, context } = request;
    const languageNames = {
      en: "English",
      sv: "Swedish",
      fa: "Persian/Farsi",
    };

    const contextPart = context ? `Context: ${context}` : "";
    const prompt = `Translate the following ${languageNames[fromLocale]} text to ${languageNames[toLocale]}. ${contextPart}\n\nText: ${text}\n\nTranslation:`;

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a professional translator. Provide only the translation without any explanations or additional text.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],
            max_tokens: 1000,
            temperature: 0.3,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        translatedText: data.choices[0].message.content.trim(),
        confidence: 0.9,
        provider: "openai",
      };
    } catch (error) {
      console.error("OpenAI translation error:", error);
      // Fallback to mock translation
      return this.translateWithMock(request);
    }
  }

  private async translateWithGoogle(
    request: TranslationRequest
  ): Promise<TranslationResult> {
    if (!this.apiKey) {
      throw new Error("Google Translate API key is required");
    }

    const { text, fromLocale, toLocale } = request;

    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: text,
            source: fromLocale,
            target: toLocale,
            format: "text",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Google Translate API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        translatedText: data.data.translations[0].translatedText,
        confidence: 0.85,
        provider: "google",
      };
    } catch (error) {
      console.error("Google Translate error:", error);
      // Fallback to mock translation
      return this.translateWithMock(request);
    }
  }

  private async translateWithMock(
    request: TranslationRequest
  ): Promise<TranslationResult> {
    const { text, toLocale } = request;

    // Mock translations for common UI strings
    const mockTranslations: Record<string, Record<Locale, string>> = {
      Home: {
        en: "Home",
        sv: "Hem",
        fa: "خانه",
      },
      Portfolio: {
        en: "Portfolio",
        sv: "Portfölj",
        fa: "نمونه کارها",
      },
      Blog: {
        en: "Blog",
        sv: "Blogg",
        fa: "وبلاگ",
      },
      About: {
        en: "About",
        sv: "Om",
        fa: "درباره",
      },
      Contact: {
        en: "Contact",
        sv: "Kontakt",
        fa: "تماس",
      },
      "Design System Portfolio": {
        en: "Design System Portfolio",
        sv: "Design System Portfölj",
        fa: "پورتفولیو سیستم طراحی",
      },
    };

    // Check for exact match first
    const exactMatch = mockTranslations[text];
    if (exactMatch?.[toLocale]) {
      return {
        translatedText: exactMatch[toLocale],
        confidence: 0.95,
        provider: "mock",
      };
    }

    // Simple mock translation for demonstration
    let translatedText = text;
    if (toLocale === "sv") {
      translatedText = `[SV] ${text}`;
    } else if (toLocale === "fa") {
      translatedText = `[فا] ${text}`;
    }

    return {
      translatedText,
      confidence: 0.7,
      provider: "mock",
    };
  }

  async batchTranslate(
    requests: TranslationRequest[]
  ): Promise<TranslationResult[]> {
    const results = await Promise.all(
      requests.map((request) => this.translate(request))
    );
    return results;
  }

  setProvider(provider: TranslationProvider, apiKey?: string) {
    this.provider = provider;
    if (apiKey) {
      this.apiKey = apiKey;
    }
  }
}

// Export singleton instance
export const autoTranslator = new AutoTranslator();

// Utility function to translate content objects
export async function translateContent<T extends Record<string, any>>(
  content: T,
  fromLocale: Locale,
  toLocale: Locale,
  fieldsToTranslate: (keyof T)[] = []
): Promise<T> {
  const translatedContent = { ...content };

  for (const field of fieldsToTranslate) {
    const originalValue = content[field];
    if (typeof originalValue === "string") {
      const result = await autoTranslator.translate({
        text: originalValue,
        fromLocale,
        toLocale,
        context: `Content field: ${String(field)}`,
      });
      translatedContent[field] = result.translatedText as T[keyof T];
    }
  }

  return translatedContent;
}

// Utility to set up translator with API keys
export function configureTranslator(
  provider: TranslationProvider,
  apiKey: string
) {
  autoTranslator.setProvider(provider, apiKey);
}
