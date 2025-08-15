import { NextResponse } from "next/server";
import { getLocalizedContent, getAllLocalizedContent, type Locale } from "@/utils/localizedContent";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") as "portfolio" | "blog" | null;
  const slug = searchParams.get("slug");
  const locale = (searchParams.get("locale") || "en") as Locale;

  if (!type || !["portfolio", "blog"].includes(type)) {
    return NextResponse.json(
      { error: "Invalid content type. Must be 'portfolio' or 'blog'" },
      { status: 400 }
    );
  }

  try {
    // Single content item request
    if (slug) {
      const content = await getLocalizedContent(type, slug, locale);
      
      if (!content) {
        return NextResponse.json(
          { error: "Content not found" },
          { status: 404 }
        );
      }
      
      return NextResponse.json(content);
    }

    // All content items request
    const content = await getAllLocalizedContent(type, locale);
    return NextResponse.json(content);
  } catch (error) {
    console.error(`Error loading ${type} content:`, error);
    return NextResponse.json(
      { error: "Failed to load content" },
      { status: 500 }
    );
  }
}
