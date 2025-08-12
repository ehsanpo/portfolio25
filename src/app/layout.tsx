import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  return children;
}
