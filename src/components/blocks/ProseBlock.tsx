import React from "react";

export interface ProseBlockProps {
  title?: string;
  content: string;
  className?: string;
}

export function ProseBlock({
  title,
  content,
  className = "",
}: Readonly<ProseBlockProps>) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {title && (
            <h2 className="text-3xl font-bold font-basement text-center mb-12">
              {title}
            </h2>
          )}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
}
