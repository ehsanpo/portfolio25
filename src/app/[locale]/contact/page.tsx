import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss how I can help
            bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Email:</span>
                  <a
                    href="mailto:contact@ehsanpourhadi.com"
                    className="text-primary hover:underline ml-2"
                  >
                    contact@ehsanpourhadi.com
                  </a>
                </div>
                <div>
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">Available globally (Remote)</span>
                </div>
                <div>
                  <span className="font-medium">Response Time:</span>
                  <span className="ml-2">Within 24 hours</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="flex flex-wrap gap-3">
                <span className="text-primary cursor-pointer hover:underline">
                  LinkedIn
                </span>
                <span className="text-primary cursor-pointer hover:underline">
                  GitHub
                </span>
                <span className="text-primary cursor-pointer hover:underline">
                  Dribbble
                </span>
                <span className="text-primary cursor-pointer hover:underline">
                  Twitter
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Project Availability
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Available for new projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Currently accepting freelance projects and collaboration
                  opportunities
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
