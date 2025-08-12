import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function AboutOverviewPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Overview</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            My journey, background, and philosophy
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6">
            Detailed overview content will go here...
          </p>
          <Badge>Self-taught Developer</Badge>
        </Card>
      </div>
    </div>
  );
}
