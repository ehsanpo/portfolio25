import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
  Coffee,
  ArrowRight,
} from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function ContactPage() {
  const { contact } = portfolioData;

  const contactMethods = [
    {
      id: "email",
      title: "Email",
      description: "Best for detailed project discussions",
      icon: <Mail className="w-6 h-6" />,
      value: contact.email,
      action: "Send Email",
      response: "Within 24 hours",
      primary: true,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Professional networking and connections",
      icon: <Linkedin className="w-6 h-6" />,
      value: contact.linkedin,
      action: "Connect",
      response: "Usually same day",
    },
    {
      id: "github",
      title: "GitHub",
      description: "Code collaboration and open source",
      icon: <Mail className="w-6 h-6" />,
      value: contact.socialLinks.github,
      action: "Follow",
      response: "Check out my work",
    },
    {
      id: "website",
      title: "Website",
      description: "Portfolio and project showcase",
      icon: <MessageSquare className="w-6 h-6" />,
      value: contact.website,
      action: "Visit",
      response: "Usually within hours",
    },
  ];

  const faqs = [
    {
      id: "response-time",
      question: "What's your typical response time?",
      answer:
        "I aim to respond to all inquiries within 24 hours on business days. For urgent matters, LinkedIn or Twitter DMs tend to get faster responses.",
    },
    {
      id: "freelance",
      question: "Do you take on freelance projects?",
      answer:
        "Yes! I'm always interested in discussing new projects, especially those involving React, design systems, or frontend architecture challenges.",
    },
    {
      id: "information",
      question: "What information should I include in my message?",
      answer:
        "Please include details about your project, timeline, budget range, and any specific requirements. The more context you provide, the better I can assess if we're a good fit.",
    },
    {
      id: "consulting",
      question: "Are you available for consulting calls?",
      answer:
        "Absolutely! I offer both free initial consultations and paid technical consulting sessions. We can discuss which option works best for your needs.",
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new projects, share knowledge, or
            simply connect with fellow developers and creators. Let's start a
            conversation!
          </p>
        </div>

        {/* Contact Form */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
            <p className="text-muted-foreground">
              Tell me about your project or just say hello
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      placeholder="Tell me about your project, ask a question, or just say hello..."
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="subscribe" className="mt-1" />
                      <label
                        htmlFor="subscribe"
                        className="text-sm text-muted-foreground"
                      >
                        I'd like to receive occasional updates about your work
                        and new blog posts
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Reach Me</h2>
            <p className="text-muted-foreground">
              Choose the platform that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <Card
                key={method.id}
                className={`group hover:shadow-lg transition-all duration-300 ${
                  method.primary ? "ring-2 ring-primary-500/20" : ""
                }`}
              >
                <CardContent className="p-6 text-center">
                  {method.primary && (
                    <Badge variant="gradient" className="mb-3">
                      Recommended
                    </Badge>
                  )}

                  <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>

                  <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">
                    {method.description}
                  </CardDescription>

                  <div className="space-y-3">
                    <p className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {method.value}
                    </p>

                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {method.response}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group"
                    >
                      {method.action}
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <CardTitle className="text-lg mb-2">
                        {faq.question}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {faq.answer}
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Availability */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Current Availability</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <Badge variant="success">Available</Badge>
                </div>

                <CardTitle className="text-2xl mb-4">
                  Open for New Projects
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  I'm currently accepting new freelance projects and consulting
                  opportunities. My next availability is in early 2024.
                </CardDescription>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Next Availability: January 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Remote Friendly
                    </div>
                  </div>

                  <Button size="lg" className="group">
                    Schedule a Call
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Personal Touch */}
        <section className="space-y-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Coffee className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-3">Coffee Chat?</CardTitle>
                    <CardDescription className="text-base">
                      If you're ever in {contact.location.split(", ")[0]} (or
                      I'm in your city), I'd love to meet up for coffee and talk
                      about development, design, or life in general. Some of my
                      best collaborations started with a simple conversation
                      over a good cup of tea.
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
