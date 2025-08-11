import React, { useState } from 'react';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { 
  Palette, Type, Layers, Grid, Home, Menu, X, Heart, Layout as LayoutIcon,
  Coins, MessageCircle, Play, Image, Camera, Aperture, LogIn, BarChart3, Zap,
  Shield, Volume2, FileText, Smartphone
} from 'lucide-react';
import { 
  MousePointer, 
  CreditCard, 
  Image as ImageIcon, 
  User,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';
import { ThemeToggle } from './ui/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  activeComponentSection?: string;
  onSectionChange: (section: string) => void;
}

const componentSubSections = [
  { id: 'buttons', name: 'Buttons', icon: MousePointer },
  { id: 'cards', name: 'Cards', icon: CreditCard },
  { id: 'forms', name: 'Forms', icon: FileText },
  { id: 'media', name: 'Media', icon: ImageIcon },
  { id: 'effects', name: 'Effects & Layouts', icon: Sparkles },
  { id: 'portfolio', name: 'Portfolio', icon: User },
  { id: 'sections', name: 'Sections & Charts', icon: LayoutIcon },
  { id: 'professional', name: 'Professional Timeline', icon: GraduationCap },
  { id: 'blog', name: 'Blog Components', icon: FileText },
];
const navigation = [
  { id: 'overview', name: 'Overview', icon: Home },
  { id: 'brand-values', name: 'Brand Values', icon: Heart },
  { id: 'logo', name: 'Logo', icon: LogIn },
  { id: 'colors', name: 'Colors', icon: Palette },
  { id: 'typography', name: 'Typography', icon: Type },
  { id: 'iconography', name: 'Iconography', icon: Aperture },
  { id: 'illustration', name: 'Illustration', icon: Image },
  { id: 'photography', name: 'Photography', icon: Camera },
  { id: 'components', name: 'Components', icon: Layers },
  { id: 'ui-patterns', name: 'UI Patterns', icon: LayoutIcon },
  { id: 'design-tokens', name: 'Design Tokens', icon: Coins },
  { id: 'spacing', name: 'Spacing', icon: Grid },
  { id: 'motion', name: 'Motion', icon: Play },
  { id: 'animations', name: 'Animations', icon: Zap },
  { id: 'tone-of-voice', name: 'Tone of Voice', icon: MessageCircle },
  { id: 'data-visualization', name: 'Data Visualization', icon: BarChart3 },
  { id: 'accessibility', name: 'Accessibility', icon: Shield },
  { id: 'sounds', name: 'Sounds', icon: Volume2 },
  { id: 'design-guidelines', name: 'Design Guidelines', icon: FileText },
  { id: 'responsiveness', name: 'Responsiveness', icon: Smartphone },
  { id: 'section-dividers', name: 'Section Dividers', icon: Grid },
  { id: 'audio-player-demo', name: 'Audio Player Demo', icon: Play },
];

export function Layout({ children, activeSection, activeComponentSection, onSectionChange }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(activeSection === 'components');

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsSidebarOpen(false);
    
    // Auto-expand components dropdown if navigating to components
    if (section === 'components') {
      setIsComponentsOpen(true);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-500/10 via-background to-secondary-500/10 animate-gradient" />
      
      {/* Header Component */}
      <Header 
        activeSection={activeSection}
        onSectionChange={onSectionChange}
        variant="glass"
        sticky={true}
        showBadge={true}
      />

      <div className="flex relative">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 glass-card border-r border-border/50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="pt-6 pb-4">
            <nav className="px-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isComponents = item.id === 'components';
                const isActive = activeSection === item.id || (isComponents && activeSection.startsWith('components-'));
                if (isComponents) {
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => {
                          setIsComponentsOpen(!isComponentsOpen);
                          if (!isComponentsOpen) {
                            handleSectionChange(item.id);
                          }
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-sm font-medium font-kabel rounded-lg transition-all duration-300 group relative overflow-hidden",
                          isActive
                            ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30 shadow-lg"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {/* Glossy effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="flex items-center relative z-10">
                          <Icon className="mr-3 h-5 w-5" />
                          <span>{item.name}</span>
                        </div>
                        
                        {isComponentsOpen ? (
                          <ChevronDown className="h-4 w-4 relative z-10" />
                        ) : (
                          <ChevronRight className="h-4 w-4 relative z-10" />
                        )}
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isComponentsOpen && (
                        <div className="mt-2 ml-4 space-y-1 border-l border-border/30 pl-4">
                          {componentSubSections.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = activeSection === 'components' && activeComponentSection === subItem.id;
                            
                            return (
                              <button
                                key={subItem.id}
                                onClick={() => handleSectionChange(`components-${subItem.id}`)}
                                className={cn(
                                  "w-full flex items-center px-3 py-2 text-sm font-medium font-kabel rounded-lg transition-all duration-300 group relative overflow-hidden",
                                  isSubActive
                                    ? "bg-gradient-to-r from-secondary-500/20 to-accent-500/20 text-secondary-400 border border-secondary-500/30"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                )}
                              >
                                {/* Glossy effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <SubIcon className="mr-2 h-4 w-4 relative z-10" />
                                <span className="relative z-10 text-xs">{subItem.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
                    className={cn(
                      "w-full flex items-center px-4 py-3 text-sm font-medium font-kabel rounded-lg transition-all duration-300 group relative overflow-hidden",
                      isActive
                        ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30 shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {/* Glossy effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <Icon className="mr-3 h-5 w-5 relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-h-screen relative pb-16">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Footer Component */}
      <Footer 
        variant="glass"
        showSocial={true}
        showNavigation={true}
        showContact={true}
        showStats={true}
        onSectionChange={onSectionChange}
      />
    </div>
  );
}