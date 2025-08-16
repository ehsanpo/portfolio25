"use client";

import { useEffect } from "react";
import { type ContentItem } from "@/utils/localizedContent";

interface DynamicSEOProps {
  readonly content: ContentItem;
  readonly type: "portfolio" | "blog";
}

export function DynamicSEO({ content, type }: DynamicSEOProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Update page title
    const title = `${content.meta.title} | Ehsan Pourhadi`;
    document.title = title;

    // Update meta description
    const description =
      content.meta.description ||
      content.meta.excerpt ||
      `${content.meta.title} - Portfolio case study by Ehsan Pourhadi`;
    updateMetaTag("description", description);

    // Update Open Graph tags
    updateMetaTag("og:title", content.meta.title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:type", "article", "property");
    updateMetaTag("og:url", window.location.href, "property");

    // Update Twitter Card tags
    updateMetaTag("twitter:title", content.meta.title);
    updateMetaTag("twitter:description", description);

    // Add structured data for the portfolio item
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: content.meta.title,
      description: description,
      author: {
        "@type": "Person",
        name: "Ehsan Pourhadi",
      },
      dateCreated: content.meta.date || content.meta.publishDate,
      keywords: content.meta.tags?.join(", "),
      category: content.meta.category,
      ...(content.meta.case_link_url && { url: content.meta.case_link_url }),
    });

    // Remove any existing structured data for portfolio items
    const existingScript = document.querySelector("script[data-portfolio-ld]");
    if (existingScript) {
      existingScript.remove();
    }

    script.setAttribute("data-portfolio-ld", "true");
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(
        "script[data-portfolio-ld]"
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [content, type]);

  return null;
}

function updateMetaTag(
  name: string,
  content: string,
  attribute: "name" | "property" = "name"
) {
  let meta = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.content = content;
}
