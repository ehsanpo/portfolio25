import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export interface ContactBlockProps {
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  ctaLabel?: string;
  onContactClick?: () => void;
}

export function ContactBlock({
  title = "Get In Touch",
  description = "Let's work together on your next project",
  email,
  phone,
  location,
  socialLinks,
  ctaLabel = "Contact Me",
  onContactClick,
}: Readonly<ContactBlockProps>) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-basement mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground mb-12">{description}</p>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {email && (
              <Card variant="glass" className="p-6 text-center">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">{email}</p>
              </Card>
            )}
            {phone && (
              <Card variant="glass" className="p-6 text-center">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">{phone}</p>
              </Card>
            )}
            {location && (
              <Card variant="glass" className="p-6 text-center">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">{location}</p>
              </Card>
            )}
          </div>

          {socialLinks && (
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.github && (
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
              )}
              {socialLinks.twitter && (
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
              )}
              {socialLinks.instagram && (
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
              )}
            </div>
          )}

          <Button variant="gradient" size="lg" onClick={onContactClick}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
