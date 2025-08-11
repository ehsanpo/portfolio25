import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { AudioProvider } from './components/ui/GlobalAudioPlayer';
import { Layout } from './components/Layout';
import { Overview } from './components/design-system/Overview';
import { ColorPalette } from './components/design-system/ColorPalette';
import { TypographyShowcase } from './components/design-system/TypographyShowcase';
import { ComponentsLayout } from './components/design-system/components/ComponentsLayout';
import { SpacingShowcase } from './components/design-system/SpacingShowcase';
import { AnimationShowcase } from './components/design-system/AnimationShowcase';
import { BrandValues } from './components/design-system/BrandValues';
import { UIPatterns } from './components/design-system/UIPatterns';
import { DesignTokens } from './components/design-system/DesignTokens';
import { ToneOfVoice } from './components/design-system/ToneOfVoice';
import { Motion } from './components/design-system/Motion';
import { Illustration } from './components/design-system/Illustration';
import { Photography } from './components/design-system/Photography';
import { Iconography } from './components/design-system/Iconography';
import { Logo } from './components/design-system/Logo';
import { DataVisualization } from './components/design-system/DataVisualization';
import { Accessibility } from './components/design-system/Accessibility';
import { Sounds } from './components/design-system/Sounds';
import { DesignGuidelines } from './components/design-system/DesignGuidelines';
import { Responsiveness } from './components/design-system/Responsiveness';
import { AudioPlayerDemo } from './components/design-system/AudioPlayerDemo';
import { SectionDividers } from './components/design-system/SectionDividers';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Handle component subsections
    if (section.startsWith('components-')) {
      const subSection = section.replace('components-', '');
      setActiveComponentSection(subSection);
      setActiveSection('components');
    }
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'brand-values':
        return <BrandValues />;
      case 'logo':
        return <Logo />;
      case 'colors':
        return <ColorPalette />;
      case 'typography':
        return <TypographyShowcase />;
      case 'iconography':
        return <Iconography />;
      case 'illustration':
        return <Illustration />;
      case 'photography':
        return <Photography />;
      case 'components':
        return <ComponentsLayout activeSubSection={activeComponentSection} onSubSectionChange={setActiveComponentSection} />;
      case 'ui-patterns':
        return <UIPatterns />;
      case 'design-tokens':
        return <DesignTokens />;
      case 'spacing':
        return <SpacingShowcase />;
      case 'motion':
        return <Motion />;
      case 'animations':
        return <AnimationShowcase />;
      case 'tone-of-voice':
        return <ToneOfVoice />;
      case 'data-visualization':
        return <DataVisualization />;
      case 'accessibility':
        return <Accessibility />;
      case 'sounds':
        return <Sounds />;
      case 'design-guidelines':
        return <DesignGuidelines />;
      case 'responsiveness':
        return <Responsiveness />;
      case 'audio-player-demo':
        return <AudioPlayerDemo />;
      case 'section-dividers':
        return <SectionDividers />;
      default:
        return <Overview />;
    }
  };

  return (
    <AudioProvider>
      <Layout 
        activeSection={activeSection} 
        activeComponentSection={activeComponentSection}
        onSectionChange={handleSectionChange}
      >
        {renderSection()}
      </Layout>
    </AudioProvider>
  );
}

export default App;