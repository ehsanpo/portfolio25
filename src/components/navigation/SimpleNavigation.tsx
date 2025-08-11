"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../utils/cn";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Wrench,
  Palette,
  Menu,
} from "lucide-react";

interface NavigationProps {
  variant?: "sidebar" | "horizontal" | "mobile";
}

const navigationItems = [
  { path: "/", title: "Home", icon: Home },
  { path: "/about", title: "About", icon: User },
  { path: "/portfolio", title: "Portfolio", icon: Briefcase },
  { path: "/design-system", title: "Design System", icon: Palette },
  { path: "/blog", title: "Blog", icon: BookOpen },
  { path: "/toolbox", title: "Toolbox", icon: Wrench },
];

export function SimpleNavigation({
  variant = "sidebar",
}: Readonly<NavigationProps>) {
  const pathname = usePathname();

  if (variant === "mobile") {
    return (
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Portfolio
        </Link>
        <Menu className="h-6 w-6" />
      </nav>
    );
  }

  if (variant === "sidebar") {
    return (
      <nav className="w-64 h-screen bg-card/50 backdrop-blur-sm border-r border-border p-4">
        <div className="mb-8">
          <Link href="/" className="font-bold text-xl gradient-text">
            Portfolio
          </Link>
        </div>

        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary-500/10 text-primary-500 border border-primary-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-6">
      {navigationItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "text-sm font-medium transition-colors",
              isActive
                ? "text-primary-500"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
