import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAIKEY || process.env.OPENAI_API_KEY,
});

async function testTranslation() {
  console.log("🧪 Testing OpenAI translation...");

  if (!process.env.OPENAIKEY && !process.env.OPENAI_API_KEY) {
    console.log("❌ No API key found");
    return;
  }

  console.log("✅ API key found, testing translation...");

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a professional translator. Translate the following text to Swedish. Only return the translated text.",
        },
        {
          role: "user",
          content: "We run 040",
        },
      ],
      max_tokens: 100,
      temperature: 0.3,
    });

    const translation = completion.choices[0]?.message?.content?.trim();
    console.log("🎉 Translation successful:");
    console.log(`"We run 040" → "${translation}"`);
  } catch (error) {
    console.error("❌ Translation failed:", error.message);
  }
}

await testTranslation();
