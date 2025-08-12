import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Code,
  Palette,
  Settings,
  Terminal,
  Zap,
  Download,
  ExternalLink,
  Star,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function ToolboxPage() {
  const { stacks, contact } = portfolioData;
  const toolCategories = [
    {
      id: "development",
      title: "Development Tools",
      icon: <Code className="w-6 h-6" />,
      description: "Essential tools for coding and development",
      tools: [
        {
          name: "VS Code",
          description: "Primary code editor with extensive customization",
          category: "Editor",
          rating: 5,
          free: true,
          website: "https://code.visualstudio.com",
        },
        {
          name: "Git",
          description: "Version control and collaboration",
          category: "Version Control",
          rating: 5,
          free: true,
          website: "https://git-scm.com",
        },
        {
          name: "Node.js",
          description: "JavaScript runtime for building applications",
          category: "Runtime",
          rating: 5,
          free: true,
          website: "https://nodejs.org",
        },
        {
          name: "Docker",
          description:
            "Containerization for consistent development environments",
          category: "DevOps",
          rating: 4,
          free: true,
          website: "https://docker.com",
        },
      ],
    },
    {
      id: "design",
      title: "Design & UI Tools",
      icon: <Palette className="w-6 h-6" />,
      description: "Tools for design, prototyping, and visual creation",
      tools: [
        {
          name: "Figma",
          description: "Collaborative design and prototyping platform",
          category: "Design",
          rating: 5,
          free: false,
          website: "https://figma.com",
        },
        {
          name: "Framer",
          description: "Interactive prototyping and animation",
          category: "Prototyping",
          rating: 4,
          free: false,
          website: "https://framer.com",
        },
        {
          name: "ColorZilla",
          description: "Color picker and palette generator",
          category: "Utility",
          rating: 4,
          free: true,
          website: "https://colorzilla.com",
        },
        {
          name: "Unsplash",
          description: "High-quality stock photography",
          category: "Images",
          rating: 5,
          free: true,
          website: "https://unsplash.com",
        },
      ],
    },
    {
      id: "productivity",
      title: "Productivity & Organization",
      icon: <Settings className="w-6 h-6" />,
      description: "Tools for project management and productivity",
      tools: [
        {
          name: "Notion",
          description: "All-in-one workspace for notes and project management",
          category: "Notes",
          rating: 5,
          free: false,
          website: "https://notion.so",
        },
        {
          name: "Linear",
          description: "Issue tracking and project management",
          category: "Project Management",
          rating: 5,
          free: false,
          website: "https://linear.app",
        },
        {
          name: "Raycast",
          description: "Productivity launcher and automation",
          category: "Launcher",
          rating: 5,
          free: false,
          website: "https://raycast.com",
        },
        {
          name: "1Password",
          description: "Secure password management",
          category: "Security",
          rating: 5,
          free: false,
          website: "https://1password.com",
        },
      ],
    },
    {
      id: "terminal",
      title: "Terminal & CLI Tools",
      icon: <Terminal className="w-6 h-6" />,
      description: "Command line tools and terminal enhancers",
      tools: [
        {
          name: "Oh My Zsh",
          description: "Enhanced Zsh configuration framework",
          category: "Shell",
          rating: 5,
          free: true,
          website: "https://ohmyz.sh",
        },
        {
          name: "iTerm2",
          description: "Advanced terminal emulator for macOS",
          category: "Terminal",
          rating: 5,
          free: true,
          website: "https://iterm2.com",
        },
        {
          name: "ripgrep",
          description: "Fast text search tool",
          category: "Search",
          rating: 4,
          free: true,
          website: "https://github.com/BurntSushi/ripgrep",
        },
        {
          name: "fzf",
          description: "Fuzzy finder for command line",
          category: "Search",
          rating: 4,
          free: true,
          website: "https://github.com/junegunn/fzf",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment & Hosting",
      icon: <Zap className="w-6 h-6" />,
      description: "Platforms for deploying and hosting projects",
      tools: [
        {
          name: "Vercel",
          description: "Frontend deployment platform with edge functions",
          category: "Hosting",
          rating: 5,
          free: false,
          website: "https://vercel.com",
        },
        {
          name: "Netlify",
          description: "JAMstack deployment with form handling",
          category: "Hosting",
          rating: 4,
          free: false,
          website: "https://netlify.com",
        },
        {
          name: "GitHub Actions",
          description: "CI/CD workflows and automation",
          category: "CI/CD",
          rating: 5,
          free: true,
          website: "https://github.com/features/actions",
        },
        {
          name: "Cloudflare",
          description: "CDN, DNS, and edge computing services",
          category: "CDN",
          rating: 4,
          free: false,
          website: "https://cloudflare.com",
        },
      ],
    },
    {
      id: "learning",
      title: "Learning & Documentation",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Resources for continuous learning and documentation",
      tools: [
        {
          name: "MDN Web Docs",
          description: "Comprehensive web development documentation",
          category: "Documentation",
          rating: 5,
          free: true,
          website: "https://developer.mozilla.org",
        },
        {
          name: "React Documentation",
          description: "Official React guides and API reference",
          category: "Documentation",
          rating: 5,
          free: true,
          website: "https://react.dev",
        },
        {
          name: "Frontend Masters",
          description: "Advanced frontend development courses",
          category: "Learning",
          rating: 5,
          free: false,
          website: "https://frontendmasters.com",
        },
        {
          name: "Storybook",
          description: "Component development and documentation",
          category: "Documentation",
          rating: 4,
          free: true,
          website: "https://storybook.js.org",
        },
      ],
    },
  ];

  const configurations = [
    {
      id: "vscode-settings",
      title: "VS Code Configuration",
      description: "My complete VS Code setup with extensions and settings",
      category: "Editor",
      downloadUrl: "#",
      features: [
        "Custom theme and color scheme",
        "Essential extensions list",
        "Keybindings and shortcuts",
        "Workspace settings",
        "Debugging configuration",
      ],
    },
    {
      id: "zsh-config",
      title: "Zsh & Terminal Setup",
      description: "Terminal configuration with Oh My Zsh and custom aliases",
      category: "Terminal",
      downloadUrl: "#",
      features: [
        "Oh My Zsh configuration",
        "Custom aliases and functions",
        "Git integration",
        "Theme customization",
        "Productivity shortcuts",
      ],
    },
    {
      id: "git-config",
      title: "Git Configuration",
      description: "Git aliases, hooks, and workflow automation",
      category: "Version Control",
      downloadUrl: "#",
      features: [
        "Useful Git aliases",
        "Pre-commit hooks",
        "Branch naming conventions",
        "Merge strategies",
        "Automated workflows",
      ],
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="gradient-text">Toolbox</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of tools, configurations, and resources that
            power my development workflow and boost productivity.
          </p>
        </div>

        {/* Tools Grid */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Essential Tools</h2>
            <p className="text-muted-foreground">
              The tools I rely on daily for development, design, and
              productivity
            </p>
          </div>

          {toolCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="text-primary-500">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool) => (
                  <Card
                    key={tool.name}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <CardTitle className="text-lg mb-1">
                            {tool.name}
                          </CardTitle>
                          <Badge
                            variant={tool.free ? "success" : "secondary"}
                            className="text-xs"
                          >
                            {tool.free ? "Free" : "Paid"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(tool.rating)}
                        </div>
                      </div>

                      <CardDescription className="text-sm mb-4 leading-relaxed">
                        {tool.description}
                      </CardDescription>

                      <div className="space-y-3">
                        <Badge variant="neutral" className="text-xs">
                          {tool.category}
                        </Badge>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group"
                          onClick={() => window.open(tool.website, "_blank")}
                        >
                          Visit Website
                          <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Configurations */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Development Configurations
            </h2>
            <p className="text-muted-foreground">
              Download my configuration files and setup guides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {configurations.map((config) => (
              <Card
                key={config.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-primary-500" />
                    <div>
                      <CardTitle className="text-lg">{config.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {config.category}
                      </Badge>
                    </div>
                  </div>

                  <CardDescription className="text-sm mb-4">
                    {config.description}
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {config.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group"
                    >
                      <Download className="mr-2 h-3 w-3" />
                      Download Config
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Usage Stats */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Tool Usage Stats</h2>
            <p className="text-muted-foreground">
              How I spend my development time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-2xl mb-2">85%</CardTitle>
                <CardDescription>VS Code</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Terminal className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-2xl mb-2">70%</CardTitle>
                <CardDescription>Terminal</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-2xl mb-2">60%</CardTitle>
                <CardDescription>Figma</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-2xl mb-2">90%</CardTitle>
                <CardDescription>Remote Work</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recommendations */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why These Tools?</h2>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Clock className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Every tool is chosen for its ability to streamline workflows
                    and reduce friction
                  </p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Battle-tested tools that deliver consistent, reliable
                    results
                  </p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Tools that enhance team collaboration and knowledge sharing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
