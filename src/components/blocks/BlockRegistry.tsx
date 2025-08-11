import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ProjectCard } from "../ui/ProjectCard";
import { BlogCard } from "../ui/BlogCard";
import {
  getFeaturedProjects,
  getRecentBlogPosts,
  getSkills,
  getHeroData,
  getContactData,
} from "../../utils/dataAccessors";

// Block Registry - Maps section.type to components
interface BlockProps {
  title?: string;
  content?: string;
  items?: any[];
  [key: string]: any;
}

// Hero block using existing components
export function HeroBlock({ title, content }: Readonly<BlockProps>) {
  const heroData = getHeroData();
  const displayTitle = title || heroData?.title || "Welcome";
  const displayContent =
    content || heroData?.subtitle || "Building amazing experiences";

  return (
    <div className="text-center py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold font-basement gradient-text mb-6">
          {displayTitle}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">{displayContent}</p>
        <div className="flex gap-4 justify-center">
          <Button variant="gradient" size="lg">
            {heroData?.cta?.primary?.label || "View My Work"}
          </Button>
          <Button variant="outline" size="lg">
            {heroData?.cta?.secondary?.label || "Get In Touch"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Project grid using existing ProjectCard
export function ProjectGridBlock({ title, items }: Readonly<BlockProps>) {
  const projects = items || getFeaturedProjects();

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold font-basement text-center mb-12">
        {title || "Featured Projects"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id || project.title}
            title={project.title}
            description={project.description}
            image={project.featuredImage}
            technologies={project.technologies || []}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

// Cards section using existing Card component
export function CardsBlock({ title, items }: Readonly<BlockProps>) {
  const skills = items || getSkills();

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold font-basement text-center mb-12">
        {title || "Skills"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((item) => (
          <Card key={item.id || item.title} variant="glass" hover>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Blog sections using BlogCard
export function SectionsBlock({ title, items }: Readonly<BlockProps>) {
  const articles = items || getRecentBlogPosts();

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold font-basement text-center mb-12">
        {title || "Latest Articles"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <BlogCard
            key={article.id || article.title}
            title={article.title}
            excerpt={article.excerpt}
            author={article.author || { name: "Author" }}
            publishDate={article.publishDate || new Date().toISOString()}
            readTime={article.readTime || "5 min"}
            featuredImage={article.featuredImage}
            slug={article.slug || "#"}
          />
        ))}
      </div>
    </div>
  );
}

// Contact CTA block
export function ContactCTABlock({ title, content }: Readonly<BlockProps>) {
  const contactData = getContactData();
  const displayTitle = title || "Let's Work Together";
  const displayContent = content || "Ready to start your next project?";

  return (
    <div className="text-center py-12">
      <Card variant="gradient" padding="lg" className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold font-basement mb-4">
          {displayTitle}
        </h2>
        <p className="text-lg mb-6">{displayContent}</p>
        <div className="flex gap-4 justify-center">
          <Button variant="glass" size="lg">
            Get In Touch
          </Button>
          {contactData?.email && (
            <Button variant="outline" size="lg">
              Email Me
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

// Custom section for flexible content
export function CustomBlock({
  title,
  content,
  children,
}: Readonly<BlockProps>) {
  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold font-basement text-center mb-12">
          {title}
        </h2>
      )}
      {content && (
        <div className="prose prose-lg max-w-4xl mx-auto mb-8">
          <p>{content}</p>
        </div>
      )}
      {children}
    </div>
  );
}

// Prose section for markdown content
export function ProseBlock({ title, content }: Readonly<BlockProps>) {
  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold font-basement text-center mb-12">
          {title}
        </h2>
      )}
      <div className="prose prose-lg max-w-4xl mx-auto">
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  );
}

// Block Registry - maps section.type to component
export const BLOCK_REGISTRY = {
  hero: HeroBlock,
  "project-grid": ProjectGridBlock,
  cards: CardsBlock,
  sections: SectionsBlock,
  "contact-cta": ContactCTABlock,
  custom: CustomBlock,
  prose: ProseBlock,
} as const;

export type BlockType = keyof typeof BLOCK_REGISTRY;

// Component to render a section based on type
interface SectionRendererProps {
  section: {
    type: BlockType;
    title?: string;
    content?: string;
    [key: string]: any;
  };
}

export function SectionRenderer({ section }: Readonly<SectionRendererProps>) {
  const BlockComponent = BLOCK_REGISTRY[section.type];

  if (!BlockComponent) {
    console.warn(`No block component found for type: ${section.type}`);
    return (
      <div className="py-12">
        <Card variant="default" className="text-center p-8">
          <p className="text-muted-foreground">
            Block type "{section.type}" not implemented
          </p>
        </Card>
      </div>
    );
  }

  return <BlockComponent {...section} />;
}
