import { MetadataRoute } from "next";
import { getAllLocalizedContent } from "@/utils/localizedContent";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ehsanpourhadi.com";

  // Get all portfolio content
  const portfolioItems = await getAllLocalizedContent("portfolio", "en");

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Portfolio pages
  const portfolioPages = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(
      item.meta.date || item.meta.publishDate || new Date()
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...portfolioPages];
}
