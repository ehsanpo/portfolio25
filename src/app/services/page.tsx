import { Metadata } from "next";
import portfolioData from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Services - Ehsan Pourhadi",
  description: "Professional software development services offered by Ehsan Pourhadi",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold gradient-text">Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional software development services to bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.services.map((service: { id: number; title: string; description: string; features?: string[] }) => (
              <div
                key={service.id}
                className="glass-card p-6 rounded-lg space-y-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                
                {service.features && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <li key={`${service.id}-feature-${featureIndex}`} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-semibold">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground">
              Let's discuss how I can help bring your ideas to life
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
