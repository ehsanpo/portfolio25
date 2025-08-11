import React, { useState } from 'react';
import { ButtonsShowcase } from './ButtonsShowcase';
import { CardsShowcase } from './CardsShowcase';
import { FormsShowcase } from './FormsShowcase';
import { MediaShowcase } from './MediaShowcase';
import { PortfolioShowcase } from './PortfolioShowcase';
import { SectionShowcase } from './SectionShowcase';
import { ProfessionalShowcase } from './ProfessionalShowcase';
import { BlogShowcase } from './BlogShowcase';
import { EffectsShowcase } from './EffectsShowcase';
import { cn } from '../../../utils/cn';
import { 
  MousePointer, 
  CreditCard, 
  FileText, 
  Image, 
  User,
  Layout as LayoutIcon,
  GraduationCap,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ComponentsLayoutProps {
  activeSubSection?: string;
  onSubSectionChange?: (section: string) => void;
}

const componentSections = [
  { id: 'buttons', name: 'Buttons', icon: MousePointer, description: 'Interactive buttons with variants' },
  { id: 'cards', name: 'Cards', icon: CreditCard, description: 'Flexible card components' },
  { id: 'forms', name: 'Forms', icon: FileText, description: 'Input fields and form elements' },
  { id: 'media', name: 'Media', icon: Image, description: 'Audio, video, and image components' },
  { id: 'effects', name: 'Effects & Layouts', icon: Sparkles, description: 'Visual effects, bento grids, loading states' },
  { id: 'portfolio', name: 'Portfolio', icon: User, description: 'Professional showcase components' },
  { id: 'sections', name: 'Sections & Charts', icon: LayoutIcon, description: 'Content sections and data visualization' },
  { id: 'professional', name: 'Professional Timeline', icon: GraduationCap, description: 'Education and work experience' },
  { id: 'blog', name: 'Blog Components', icon: FileText, description: 'Article layouts, author cards, pagination' },
];

export function ComponentsLayout({ 
  activeSubSection = 'buttons', 
  onSubSectionChange 
}: ComponentsLayoutProps) {
  const [localActiveSection, setLocalActiveSection] = useState(activeSubSection);

  const handleSectionChange = (section: string) => {
    setLocalActiveSection(section);
    onSubSectionChange?.(section);
  };

  const renderContent = () => {
    switch (localActiveSection) {
      case 'buttons':
        return <ButtonsShowcase />;
      case 'cards':
        return <CardsShowcase />;
      case 'forms':
        return <FormsShowcase />;
      case 'media':
        return <MediaShowcase />;
      case 'effects':
        return <EffectsShowcase />;
      case 'portfolio':
        return <PortfolioShowcase />;
      case 'sections':
        return <SectionShowcase />;
      case 'professional':
        return <ProfessionalShowcase />;
      case 'blog':
        return <BlogShowcase />;
      default:
        return <ButtonsShowcase />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Component Navigation */}
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Components</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          A comprehensive component library with glassmorphism effects, gradient variants, and smooth animations.
        </p>
        
        {/* Sub Navigation */}
        <div className="glass-card p-2 rounded-lg border border-border/50 mb-8">
          <nav className="flex flex-wrap gap-2">
            {componentSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium font-kabel rounded-lg transition-all duration-300 group relative overflow-hidden",
                    localActiveSection === section.id
                      ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30 shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {/* Glossy effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <Icon className="mr-3 h-4 w-4 relative z-10" />
                  <div className="relative z-10 text-left">
                    <div className="font-basement">{section.name}</div>
                    <div className="text-xs opacity-70">{section.description}</div>
                  </div>
                  
                  {localActiveSection === section.id && (
                    <ChevronRight className="ml-2 h-4 w-4 relative z-10" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Component Content */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
}