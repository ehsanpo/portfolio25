import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AudioProvider } from "@/components/ui/GlobalAudioPlayer";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ehsanpourhadi.com"
  ),
  title: {
    default: "Ehsan Pourhadi - Design System Portfolio",
    template: "%s | Ehsan Pourhadi",
  },
  description:
    "Full-stack developer and design system architect. Specialized in React, Next.js, TypeScript, and modern web technologies. View my portfolio and case studies.",
  keywords: [
    "Full-stack developer",
    "Design system architect",
    "React developer",
    "Next.js",
    "TypeScript",
    "Frontend developer",
    "UI/UX developer",
    "Portfolio",
    "Web development",
  ],
  authors: [{ name: "Ehsan Pourhadi" }],
  creator: "Ehsan Pourhadi",
  publisher: "Ehsan Pourhadi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ehsanpourhadi.com",
    siteName: "Ehsan Pourhadi Portfolio",
    title: "Ehsan Pourhadi - Design System Portfolio",
    description:
      "Full-stack developer and design system architect. Specialized in React, Next.js, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ehsan Pourhadi - Design System Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehsan Pourhadi - Design System Portfolio",
    description: "Full-stack developer and design system architect",
    images: ["/og-image.png"],
    creator: "@ehsanpourhadi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <AudioProvider>
            <div className="min-h-screen bg-background text-foreground">
              <div className="fixed inset-0 bg-gradient-to-br from-primary-500/10 via-background to-secondary-500/10 animate-gradient" />
              <div className="relative z-10 flex flex-col min-h-screen">
                <StructuredData type="website" />
                <StructuredData type="person" />
                <Header />
                <main className="flex-1 max-w-6xl mx-auto">{children}</main>
                <Footer />
              </div>
            </div>
          </AudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
