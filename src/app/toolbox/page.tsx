import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ArrowRight, Code, Palette, Zap, Globe } from "lucide-react";

export default function ToolboxPage() {
  const tools = [
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      category: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      description:
        "Typed superset of JavaScript for better developer experience",
      category: "Language",
      icon: Code,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Next.js",
      description: "React framework for production-grade applications",
      category: "Framework",
      icon: Globe,
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      category: "Styling",
      icon: Palette,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Storybook",
      description: "Tool for building UI components in isolation",
      category: "Documentation",
      icon: Code,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Figma",
      description: "Collaborative design tool for UI/UX design",
      category: "Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Vite",
      description: "Fast build tool and development server",
      category: "Build Tools",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "ESLint",
      description: "Linting tool for identifying and fixing code issues",
      category: "Quality",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Language",
    "Framework",
    "Styling",
    "Documentation",
    "Design",
    "Build Tools",
    "Quality",
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Toolbox</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools, technologies, and resources I use to build modern web
            applications and design systems.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="cursor-pointer hover:bg-primary-500 hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.name}
                className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {tool.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {tool.description}
                </p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto group-hover:text-primary-500 transition-colors"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Development Setup */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Development Setup
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Hardware</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• MacBook Pro 16" M2 Max</li>
                <li>• 32GB RAM, 1TB SSD</li>
                <li>• External 4K Monitor</li>
                <li>• Mechanical Keyboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Software</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• VS Code with extensions</li>
                <li>• iTerm2 with Oh My Zsh</li>
                <li>• Docker for containerization</li>
                <li>• Git for version control</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Configurations */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Configurations & Dotfiles
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Productivity configurations and dotfiles I use across projects.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-center">
              ESLint Config
            </Button>
            <Button variant="outline" className="justify-center">
              Prettier Setup
            </Button>
            <Button variant="outline" className="justify-center">
              VS Code Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
