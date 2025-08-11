import portfolioData from "../data/portfolio.json";
import {
  getPortfolioContent,
  getBlogContent,
  getFeaturedContent,
  getRecentContent,
  getContentBySlug,
  type ContentItem,
} from "./contentLoader";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  status?: "completed" | "in-progress" | "concept";
  demoUrl?: string;
  githubUrl?: string;
  featuredImage?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishDate: string;
  readTime: string;
  category?: string;
  featuredImage?: string;
  slug: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

// Convert ContentItem to Project format
function contentToProject(content: ContentItem): Project {
  return {
    id: content.slug,
    title: content.meta.title,
    description: content.meta.description || content.meta.excerpt || "",
    technologies: content.meta.tags || [],
    category: content.meta.category,
    status: "completed",
    featuredImage: content.meta.image,
    demoUrl: content.meta.demoUrl,
    githubUrl: content.meta.githubUrl,
  };
}

// Convert ContentItem to BlogPost format
function contentToBlogPost(content: ContentItem): BlogPost {
  return {
    id: content.slug,
    title: content.meta.title,
    excerpt: content.meta.excerpt || content.meta.description || "",
    author: {
      name: portfolioData.site.author,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    publishDate: content.meta.publishDate || new Date().toISOString(),
    readTime: content.meta.readTime || "5 min",
    category: content.meta.category,
    featuredImage: content.meta.image,
    slug: content.slug,
  };
}

// Sample data for demonstration
const sampleProjects: Project[] = [
  {
    id: "design-system",
    title: "Design System Portfolio",
    description:
      "A comprehensive design system built with React, TypeScript, and Tailwind CSS featuring 50+ components, glassmorphism effects, and dark/light themes.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    category: "Design System",
    status: "completed",
    demoUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/username/design-system",
    featuredImage:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description:
      "A modern portfolio website showcasing projects, skills, and experience with interactive animations and responsive design.",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    category: "Web Development",
    status: "completed",
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    featuredImage:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
  },
  {
    id: "component-library",
    title: "React Component Library",
    description:
      "A reusable component library with Storybook documentation, automated testing, and npm package distribution.",
    technologies: ["React", "Storybook", "Jest", "Rollup"],
    category: "Library",
    status: "in-progress",
    githubUrl: "https://github.com/username/components",
    featuredImage:
      "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
  },
];

const sampleBlogPosts: BlogPost[] = [
  {
    id: "building-design-systems",
    title: "Building Scalable Design Systems",
    excerpt:
      "Learn how to create design systems that scale with your team and product. This comprehensive guide covers tokens, components, and documentation strategies.",
    author: {
      name: portfolioData.site.author,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    publishDate: "2024-03-15T10:00:00Z",
    readTime: "8 min",
    category: "Design Systems",
    featuredImage:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    slug: "building-design-systems",
  },
  {
    id: "react-performance",
    title: "React Performance Optimization",
    excerpt:
      "Discover advanced techniques for optimizing React applications, including code splitting, memoization, and bundle analysis.",
    author: {
      name: portfolioData.site.author,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    publishDate: "2024-03-10T14:30:00Z",
    readTime: "12 min",
    category: "Development",
    featuredImage:
      "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
    slug: "react-performance",
  },
];

const sampleSkills: SkillItem[] = [
  {
    title: "Frontend Development",
    description:
      "Expert in React, TypeScript, and modern JavaScript frameworks",
  },
  {
    title: "Design Systems",
    description: "Building scalable component libraries and design tokens",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating user-centered interfaces with attention to accessibility",
  },
];

// Get all projects
export function getProjects(): Project[] {
  try {
    const portfolioContent = getPortfolioContent();
    return portfolioContent.map(contentToProject);
  } catch (error) {
    console.warn("Could not load portfolio content, using sample data:", error);
    return sampleProjects;
  }
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  try {
    const featuredContent = getFeaturedContent("portfolio");
    if (featuredContent.length > 0) {
      return featuredContent.map(contentToProject);
    }
    // Fallback to first 2 projects if no featured content
    const allProjects = getProjects();
    return allProjects.slice(0, 2);
  } catch (error) {
    console.warn("Could not load featured projects, using sample data:", error);
    return sampleProjects.slice(0, 2);
  }
}

// Get project by ID
export function getProjectById(id: string): Project | undefined {
  try {
    const content = getContentBySlug("portfolio", id);
    return content ? contentToProject(content) : undefined;
  } catch (error) {
    console.warn("Could not load project content, using sample data:", error);
    return sampleProjects.find((project) => project.id === id);
  }
}

// Get all blog posts
export function getBlogPosts(): BlogPost[] {
  try {
    const blogContent = getBlogContent();
    return blogContent.map(contentToBlogPost);
  } catch (error) {
    console.warn("Could not load blog content, using sample data:", error);
    return sampleBlogPosts;
  }
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  try {
    const content = getContentBySlug("blog", slug);
    return content ? contentToBlogPost(content) : undefined;
  } catch (error) {
    console.warn("Could not load blog post, using sample data:", error);
    return sampleBlogPosts.find((post) => post.slug === slug);
  }
}

// Get recent blog posts
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  try {
    const recentContent = getRecentContent("blog", limit);
    return recentContent.map(contentToBlogPost);
  } catch (error) {
    console.warn("Could not load recent blog posts, using sample data:", error);
    const sortedPosts = [...sampleBlogPosts].sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    return sortedPosts.slice(0, limit);
  }
}

// Get skills
export function getSkills(): SkillItem[] {
  return sampleSkills;
}

// Get site data
export function getSiteData() {
  return portfolioData.site;
}

// Get navigation items
export function getNavigationItems() {
  return portfolioData.navigation?.main || [];
}

// Get hero data
export function getHeroData() {
  return portfolioData.hero;
}

// Get contact data
export function getContactData() {
  return portfolioData.contact;
}
