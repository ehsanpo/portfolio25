import { Metadata } from "next";
import { Overview } from "@/components/design-system/Overview";

export const metadata: Metadata = {
  title: "Design System Overview - Ehsan Pourhadi",
  description: "Overview of the design system and brand guidelines",
};

export default function OverviewPage() {
  return <Overview />;
}
