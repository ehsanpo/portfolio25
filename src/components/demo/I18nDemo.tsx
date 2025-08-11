"use client";

import React from "react";
import { useI18n } from "../../hooks/useI18n";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function I18nDemo() {
  const { locale, locales, switchLocale, isRTL, t } = useI18n();

  const getDescription = () => {
    if (isRTL) {
      return "این سیستم طراحی با قابلیت پشتیبانی از چند زبان و ترجمه خودکار ساخته شده است.";
    } else if (locale === "sv") {
      return "Detta designsystem är byggt med stöd för flera språk och automatisk översättning.";
    } else {
      return "This design system is built with multi-language support and automatic translation.";
    }
  };

  const demoContent = {
    title: t("hero.title") || "Design System Portfolio",
    subtitle:
      t("hero.subtitle") || "A comprehensive, production-ready design system",
    cta: t("hero.cta") || "Explore Components",
    description: getDescription(),
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-basement gradient-text mb-4">
            {demoContent.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {demoContent.subtitle}
          </p>

          {/* Language Switcher */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">
              {t("locale.switch") || "Switch language"}:
            </span>
            <div className="flex gap-2">
              {locales.map((loc) => (
                <Button
                  key={loc}
                  variant={locale === loc ? "primary" : "outline"}
                  size="sm"
                  onClick={() => switchLocale(loc)}
                  className="font-medium"
                >
                  {loc.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          {/* Current Locale Info */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="primary">Current: {locale.toUpperCase()}</Badge>
            <Badge variant={isRTL ? "secondary" : "primary"}>
              Direction: {isRTL ? "RTL" : "LTR"}
            </Badge>
          </div>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              {t("nav.home") || "Home"}
            </h3>
            <p className="text-muted-foreground">{demoContent.description}</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              {t("nav.portfolio") || "Portfolio"}
            </h3>
            <p className="text-muted-foreground">
              {t("projects.title") || "Featured Projects"}
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              {t("nav.blog") || "Blog"}
            </h3>
            <p className="text-muted-foreground">
              {t("blog.title") || "Latest Articles"}
            </p>
          </Card>
        </div>

        {/* Navigation Demo */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Navigation Demo
          </h2>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {["home", "portfolio", "blog", "about", "contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="flex items-center gap-2"
              >
                {t(`nav.${item}`) ||
                  item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </nav>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="font-semibold">
            {demoContent.cta}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t("contact.subtitle") || "Ready to start your next project?"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default I18nDemo;
