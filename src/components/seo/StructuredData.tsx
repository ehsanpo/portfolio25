import { type ContentMeta } from "@/utils/localizedContent";

interface StructuredDataProps {
  type: "website" | "portfolio" | "person";
  data?: ContentMeta;
}

export function StructuredData({ type, data }: Readonly<StructuredDataProps>) {
  const baseUrl = "https://ehsanpourhadi.com";

  const getStructuredData = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ehsan Pourhadi Portfolio",
          description:
            "Full-stack developer and design system architect portfolio",
          url: baseUrl,
          author: {
            "@type": "Person",
            name: "Ehsan Pourhadi",
            jobTitle: "Full-stack Developer",
            url: baseUrl,
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        };

      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ehsan Pourhadi",
          jobTitle: "Full-stack Developer & Design System Architect",
          description:
            "Experienced full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies",
          url: baseUrl,
          sameAs: [
            "https://github.com/ehsanpo",
            "https://linkedin.com/in/ehsanpo",
            "https://twitter.com/ehsanpourhadi",
          ],
          knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Design Systems",
            "Frontend Development",
            "Full-stack Development",
          ],
        };

      case "portfolio":
        if (!data) return null;

        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: data.title,
          description: data.description || data.excerpt,
          author: {
            "@type": "Person",
            name: "Ehsan Pourhadi",
          },
          dateCreated: data.date || data.publishDate,
          keywords: data.tags?.join(", "),
          category: data.category,
          ...(data.case_link_url && { url: data.case_link_url }),
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
