// Block Components - Data-agnostic presentational components
// Following UI → Component → Blocks → Page hierarchy

export { HeroBlock } from "./HeroBlock";
export { ProjectGridBlock } from "./ProjectGridBlock";
export { BlogGridBlock } from "./BlogGridBlock";
export { ContactBlock } from "./ContactBlock";
export { ProseBlock } from "./ProseBlock";

// Re-export types for easier imports
export type { HeroBlockProps } from "./HeroBlock";
export type { ProjectGridBlockProps, Project } from "./ProjectGridBlock";
export type { BlogGridBlockProps, BlogPost } from "./BlogGridBlock";
export type { ContactBlockProps } from "./ContactBlock";
export type { ProseBlockProps } from "./ProseBlock";
