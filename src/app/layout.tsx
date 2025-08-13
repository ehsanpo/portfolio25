import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AudioProvider } from "@/components/ui/GlobalAudioPlayer";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ehsan Pourhadi - Design System Portfolio",
  description: "Full-stack developer and design system architect",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
          </AudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
