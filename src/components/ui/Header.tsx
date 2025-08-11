import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';
import { Badge } from './Badge';
import { 
  Menu, 
  X, 
  Zap, 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  Mail,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface HeaderProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  variant?: 'default' | 'glass' | 'gradient';
  sticky?: boolean;
  showBadge?: boolean;
  className?: string;
}

const navigationItems = [
  { id: 'home', name: 'Home', icon: Home, href: '#home' },
  { id: 'about', name: 'About', icon: User, href: '#about' },
  { id: 'portfolio', name: 'Portfolio', icon: Briefcase, href: '#portfolio' },
  { id: 'blog', name: 'Blog', icon: FileText, href: '#blog' },
  { id: 'contact', name: 'Contact', icon: Mail, href: '#contact' },
];

export function Header({
  activeSection = 'home',
  onSectionChange,
  variant = 'glass',
  sticky = true,
  showBadge = true,
  className,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    onSectionChange?.(sectionId);
    setIsMobileMenuOpen(false);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'glass-card border-b border-border/50';
      case 'gradient':
        return 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-b border-primary-500/20';
      case 'default':
        return 'bg-background border-b border-border';
      default:
        return 'glass-card border-b border-border/50';
    }
  };

  return (
    <header className={cn(
      'relative z-50 transition-all duration-300',
      sticky && 'sticky top-0',
      isScrolled && 'backdrop-blur-xl shadow-lg',
      getVariantClasses(),
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavigation('home')}>
              <div className="transition-transform group-hover:scale-110">
                <svg width="40" height="40" className="text-primary-500" viewBox="0 0 27.8 26.7" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
                    c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
                    c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
                    l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold font-basement gradient-text">Portfolio</div>
                <div className="text-xs font-kabel text-muted-foreground -mt-1">Design System</div>
              </div>
            </div>
            
            {showBadge && (
              <Badge variant="primary" className="hidden md:inline-flex">
                v2.0.0
              </Badge>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={cn(
                    'flex items-center px-4 py-2 rounded-lg text-sm font-medium font-kabel transition-all duration-300 group relative overflow-hidden',
                    isActive
                      ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {/* Glossy effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <Icon className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* CTA Button */}
            <Button variant="gradient" size="sm" className="hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Hire Me
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-card hover:bg-muted/50 transition-all duration-300 mobile-menu-container"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 mobile-menu-container',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={cn(
                    'w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium font-kabel transition-all duration-300 group relative overflow-hidden',
                    isActive
                      ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {/* Glossy effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <Icon className="w-4 h-4 mr-3 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border/50">
              <Button variant="gradient" className="w-full flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" />
      )}
    </header>
  );
}