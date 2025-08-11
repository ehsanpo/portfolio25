import React from "react";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import { SiteNavigation } from "./navigation/SiteNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex">
        <SiteNavigation variant="sidebar" />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 lg:p-8">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
