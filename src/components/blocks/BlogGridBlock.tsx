import React from "react";
import { BlogCard } from "../ui/BlogCard";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    role?: string;
  };
  publishDate: string;
  readTime: string;
  category?: string;
  image?: string;
  href?: string;
  tags?: string[];
  views?: number;
  likes?: number;
  comments?: number;
  featured?: boolean;
}

export interface BlogGridBlockProps {
  title?: string;
  posts: BlogPost[];
  columns?: 1 | 2 | 3;
}

export function BlogGridBlock({
  title,
  posts,
  columns = 3,
}: Readonly<BlogGridBlockProps>) {
  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold font-basement text-center mb-12">
            {title}
          </h2>
        )}
        <div className={`grid gap-8 ${getGridClasses()}`}>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              publishDate={post.publishDate}
              readTime={post.readTime}
              category={post.category}
              featuredImage={post.image}
              slug={post.href}
              tags={post.tags}
              views={post.views}
              likes={post.likes}
              comments={post.comments}
              featured={post.featured}
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
