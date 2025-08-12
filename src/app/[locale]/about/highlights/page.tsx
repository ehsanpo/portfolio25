import React from "react";
import { Card } from "@/components/ui/Card";

export default function AboutHighlightsPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Highlights</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Key roles and contributions timeline
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">My Work Story</h2>
          <p className="text-muted-foreground">
            Timeline and project highlights will go here...
          </p>
        </Card>
      </div>
    </div>
  );
}
