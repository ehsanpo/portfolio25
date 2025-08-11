import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { TestimonialCard } from '../../ui/TestimonialCard';
import { CertificationCard } from '../../ui/CertificationCard';
import { ShareButtons } from '../../ui/ShareButtons';
import { ProjectCard } from '../../ui/ProjectCard';
import { SkillCard } from '../../ui/SkillCard';
import { CaseStudyLayout } from '../../ui/CaseStudyLayout';
import { StatsDashboard } from '../../ui/StatsDashboard';
import { TechStackVisualizer } from '../../ui/TechStackVisualizer';
import { ProcessFlow } from '../../ui/ProcessFlow';
import { ClientLogosGrid } from '../../ui/ClientLogosGrid';
import { DownloadCenter } from '../../ui/DownloadCenter';
import { Award, Coffee, Code, Users } from 'lucide-react';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  TestTube, 
  Rocket,
  Building,
  FileText,
  Image,
  Briefcase,
  BookOpen
} from 'lucide-react';

export function PortfolioShowcase() {
  // Sample data for Tech Stack Visualizer
  const sampleSkills = [
    {
      id: 'react',
      name: 'React',
      category: 'frontend' as const,
      level: 95,
      experience: '4+ years',
      projects: 25,
      trending: true,
      connections: ['typescript', 'nextjs', 'tailwind'],
      description: 'Advanced React development with hooks, context, and performance optimization',
      color: '#61dafb'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend' as const,
      level: 90,
      experience: '3+ years',
      projects: 22,
      trending: true,
      connections: ['react', 'nodejs', 'nextjs'],
      description: 'Type-safe JavaScript development with advanced TypeScript features'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'backend' as const,
      level: 85,
      experience: '3+ years',
      projects: 18,
      connections: ['typescript', 'express', 'mongodb'],
      description: 'Server-side JavaScript with Express, APIs, and database integration'
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'design' as const,
      level: 80,
      experience: '2+ years',
      projects: 15,
      connections: ['design-systems', 'prototyping'],
      description: 'UI/UX design, prototyping, and design system creation'
    },
    {
      id: 'aws',
      name: 'AWS',
      category: 'devops' as const,
      level: 70,
      experience: '2+ years',
      projects: 12,
      connections: ['docker', 'terraform'],
      description: 'Cloud infrastructure, serverless functions, and deployment'
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'frontend' as const,
      level: 88,
      experience: '2+ years',
      projects: 16,
      trending: true,
      connections: ['react', 'typescript', 'vercel'],
      description: 'Full-stack React framework with SSR and static generation'
    }
  ];

  // Sample data for Process Flow
  const designProcess = [
    {
      id: 'research',
      title: 'Research',
      description: 'Understanding user needs and business requirements',
      icon: Search,
      duration: '1-2 weeks',
      deliverables: ['User interviews', 'Competitive analysis', 'Requirements document'],
      tools: ['Figma', 'Miro', 'Google Forms', 'Notion'],
      team: ['UX Researcher', 'Product Manager'],
      details: 'Deep dive into user behavior, market analysis, and stakeholder interviews to establish project foundation.',
      substeps: [
        { title: 'Stakeholder interviews', description: 'Understand business goals', completed: true },
        { title: 'User research', description: 'Conduct user interviews and surveys', completed: true },
        { title: 'Competitive analysis', description: 'Analyze market competitors', completed: true },
        { title: 'Requirements gathering', description: 'Document functional requirements', completed: true }
      ]
    },
    {
      id: 'ideation',
      title: 'Ideation',
      description: 'Brainstorming solutions and exploring concepts',
      icon: Lightbulb,
      duration: '1 week',
      deliverables: ['Concept sketches', 'User journey maps', 'Information architecture'],
      tools: ['Miro', 'Figma', 'Pen & Paper'],
      team: ['UX Designer', 'Product Manager', 'Developer'],
      details: 'Collaborative ideation sessions to generate and evaluate potential solutions.',
      substeps: [
        { title: 'Brainstorming sessions', description: 'Generate initial concepts', completed: true },
        { title: 'User journey mapping', description: 'Map user flows and touchpoints', completed: true },
        { title: 'Information architecture', description: 'Structure content and navigation', completed: false }
      ]
    },
    {
      id: 'design',
      title: 'Design',
      description: 'Creating wireframes, prototypes, and visual designs',
      icon: Palette,
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'High-fidelity mockups', 'Interactive prototypes'],
      tools: ['Figma', 'Adobe Creative Suite', 'Principle'],
      team: ['UI Designer', 'UX Designer'],
      details: 'Transform concepts into detailed designs with focus on usability and visual appeal.',
      substeps: [
        { title: 'Wireframing', description: 'Create low-fidelity layouts', completed: true },
        { title: 'Visual design', description: 'Apply branding and styling', completed: false },
        { title: 'Prototyping', description: 'Build interactive prototypes', completed: false }
      ]
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Building the solution with clean, maintainable code',
      icon: Code,
      duration: '4-6 weeks',
      deliverables: ['Frontend application', 'Backend APIs', 'Database schema'],
      tools: ['React', 'Node.js', 'PostgreSQL', 'Git'],
      team: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer'],
      details: 'Implement designs with focus on performance, accessibility, and scalability.',
      substeps: [
        { title: 'Setup & architecture', description: 'Project setup and architecture decisions', completed: false },
        { title: 'Frontend development', description: 'Build user interface components', completed: false },
        { title: 'Backend development', description: 'Create APIs and database', completed: false }
      ]
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'Quality assurance and user testing',
      icon: TestTube,
      duration: '1-2 weeks',
      deliverables: ['Test results', 'Bug reports', 'Performance metrics'],
      tools: ['Jest', 'Cypress', 'Lighthouse', 'BrowserStack'],
      team: ['QA Engineer', 'UX Designer'],
      details: 'Comprehensive testing including functionality, usability, and performance validation.',
      substeps: [
        { title: 'Unit testing', description: 'Test individual components', completed: false },
        { title: 'Integration testing', description: 'Test system interactions', completed: false },
        { title: 'User acceptance testing', description: 'Validate with real users', completed: false }
      ]
    },
    {
      id: 'launch',
      title: 'Launch',
      description: 'Deployment and post-launch monitoring',
      icon: Rocket,
      duration: '1 week',
      deliverables: ['Production deployment', 'Monitoring setup', 'Documentation'],
      tools: ['Vercel', 'AWS', 'Sentry', 'Google Analytics'],
      team: ['DevOps Engineer', 'Product Manager'],
      details: 'Deploy to production with monitoring, analytics, and support documentation.',
      substeps: [
        { title: 'Production deployment', description: 'Deploy to live environment', completed: false },
        { title: 'Monitoring setup', description: 'Configure error tracking and analytics', completed: false },
        { title: 'Documentation', description: 'Create user and technical documentation', completed: false }
      ]
    }
  ];

  // Sample data for Client Logos Grid
  const sampleClients = [
    {
      id: 'techcorp',
      name: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://techcorp.example.com',
      industry: 'Technology',
      projectType: 'Web Application',
      year: '2024',
      duration: '6 months',
      testimonial: 'Outstanding work on our platform redesign. The team delivered beyond expectations.',
      rating: 5,
      featured: true,
      status: 'completed' as const,
      projectValue: '$50k',
      teamSize: 4,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 'startup-inc',
      name: 'StartupInc',
      industry: 'Fintech',
      projectType: 'Mobile App',
      year: '2024',
      duration: '4 months',
      testimonial: 'Incredible mobile app that our users absolutely love.',
      rating: 5,
      featured: false,
      status: 'ongoing' as const,
      projectValue: '$35k',
      teamSize: 3,
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      id: 'design-studio',
      name: 'Creative Design Studio',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://creativestudio.example.com',
      industry: 'Design',
      projectType: 'Portfolio Website',
      year: '2023',
      duration: '3 months',
      testimonial: 'Beautiful portfolio that perfectly represents our brand.',
      rating: 4,
      featured: false,
      status: 'completed' as const,
      projectValue: '$25k',
      teamSize: 2,
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 'ecommerce-co',
      name: 'E-Commerce Co',
      industry: 'Retail',
      projectType: 'E-Commerce Platform',
      year: '2023',
      duration: '8 months',
      testimonial: 'Transformed our online presence and increased sales by 150%.',
      rating: 5,
      featured: true,
      status: 'completed' as const,
      projectValue: '$75k',
      teamSize: 6,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
    },
    {
      id: 'healthcare-sys',
      name: 'HealthCare Systems',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      industry: 'Healthcare',
      projectType: 'Patient Portal',
      year: '2023',
      duration: '5 months',
      rating: 4,
      featured: false,
      status: 'completed' as const,
      projectValue: '$40k',
      teamSize: 3,
      technologies: ['React', 'Express', 'PostgreSQL', 'HIPAA Compliance']
    },
    {
      id: 'edu-platform',
      name: 'EduPlatform',
      industry: 'Education',
      projectType: 'Learning Management System',
      year: '2022',
      duration: '7 months',
      testimonial: 'Excellent LMS that improved student engagement significantly.',
      rating: 5,
      featured: false,
      status: 'completed' as const,
      projectValue: '$60k',
      teamSize: 5,
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis']
    }
  ];

  // Sample data for Download Center
  const downloadItems = [
    {
      id: 'resume-2024',
      title: 'Professional Resume',
      description: 'Latest resume with current experience, skills, and achievements',
      type: 'resume' as const,
      format: 'PDF' as const,
      size: '2.1 MB',
      lastUpdated: 'Dec 2024',
      downloadUrl: '/downloads/resume-2024.pdf',
      previewUrl: '/preview/resume',
      featured: true,
      downloadCount: 156,
      version: '2024.1',
      tags: ['current', 'professional', 'detailed']
    },
    {
      id: 'portfolio-pdf',
      title: 'Portfolio Showcase',
      description: 'Complete portfolio with project highlights and case studies',
      type: 'portfolio' as const,
      format: 'PDF' as const,
      size: '8.5 MB',
      lastUpdated: 'Nov 2024',
      downloadUrl: '/downloads/portfolio-2024.pdf',
      previewUrl: '/preview/portfolio',
      featured: true,
      downloadCount: 89,
      tags: ['projects', 'case-studies', 'visual']
    },
    {
      id: 'design-system-guide',
      title: 'Design System Guide',
      description: 'Comprehensive guide to building and maintaining design systems',
      type: 'case-study' as const,
      format: 'PDF' as const,
      size: '12.3 MB',
      lastUpdated: 'Oct 2024',
      downloadUrl: '/downloads/design-system-guide.pdf',
      featured: false,
      downloadCount: 234,
      tags: ['design-systems', 'guide', 'methodology']
    },
    {
      id: 'react-components',
      title: 'React Component Library',
      description: 'Reusable React components with TypeScript and Tailwind CSS',
      type: 'code' as const,
      format: 'ZIP' as const,
      size: '5.7 MB',
      lastUpdated: 'Dec 2024',
      downloadUrl: '/downloads/react-components.zip',
      featured: false,
      downloadCount: 67,
      tags: ['react', 'typescript', 'components', 'tailwind']
    },
    {
      id: 'ui-kit',
      title: 'UI Design Kit',
      description: 'Complete UI kit with components, icons, and design tokens',
      type: 'design' as const,
      format: 'ZIP' as const,
      size: '15.2 MB',
      lastUpdated: 'Nov 2024',
      downloadUrl: '/downloads/ui-kit.zip',
      featured: true,
      downloadCount: 123,
      tags: ['figma', 'ui-kit', 'components', 'tokens']
    },
    {
      id: 'aws-cert',
      title: 'AWS Solutions Architect Certificate',
      description: 'Official AWS certification for cloud architecture expertise',
      type: 'certificate' as const,
      format: 'PDF' as const,
      size: '1.8 MB',
      lastUpdated: 'Jun 2023',
      downloadUrl: '/downloads/aws-certificate.pdf',
      featured: false,
      downloadCount: 45,
      tags: ['aws', 'certification', 'cloud', 'architecture']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Portfolio Components</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Specialized components designed for showcasing professional work, skills, and achievements.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Tech Stack Visualizer */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Tech Stack Visualizer</CardTitle>
          <CardDescription className="font-kabel">Interactive visualization of technical skills and proficiency levels</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Network View</h4>
                <TechStackVisualizer
                  skills={sampleSkills}
                  variant="network"
                  showConnections={true}
                  showFilters={true}
                  interactive={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Grid View</h4>
                <TechStackVisualizer
                  skills={sampleSkills}
                  variant="grid"
                  showConnections={false}
                  showFilters={false}
                  interactive={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Tree View</h4>
                <TechStackVisualizer
                  skills={sampleSkills}
                  variant="tree"
                  showConnections={false}
                  showFilters={false}
                  interactive={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Flow */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Process Flow</CardTitle>
          <CardDescription className="font-kabel">Visual representation of work methodology and project phases</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Horizontal Flow</h4>
                <ProcessFlow
                  title="Design & Development Process"
                  description="My systematic approach to delivering high-quality digital products"
                  steps={designProcess}
                  variant="horizontal"
                  showProgress={true}
                  interactive={true}
                  animated={true}
                  currentStep={2}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Vertical Timeline</h4>
                <ProcessFlow
                  title="Project Timeline"
                  steps={designProcess}
                  variant="vertical"
                  showProgress={true}
                  interactive={true}
                  animated={false}
                  currentStep={3}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Card Layout</h4>
                <ProcessFlow
                  title="Process Overview"
                  steps={designProcess}
                  variant="cards"
                  showProgress={false}
                  interactive={true}
                  animated={true}
                  currentStep={1}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Logos Grid */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Client Logos Grid</CardTitle>
          <CardDescription className="font-kabel text-white/80">Showcase of clients and projects with filtering and detailed views</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Logos Only View</h4>
                <ClientLogosGrid
                  clients={sampleClients}
                  variant="logos-only"
                  layout="grid"
                  showFilters={true}
                  showStats={true}
                  columns={4}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Card View</h4>
                <ClientLogosGrid
                  clients={sampleClients.slice(0, 3)}
                  variant="cards"
                  showFilters={false}
                  showStats={false}
                  columns={3}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Detailed View</h4>
                <ClientLogosGrid
                  clients={sampleClients.slice(0, 2)}
                  variant="detailed"
                  showFilters={false}
                  showStats={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Center */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Download Center</CardTitle>
          <CardDescription className="font-kabel">Professional documents and resources available for download</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Grid View</h4>
                <DownloadCenter
                  items={downloadItems}
                  title="Professional Resources"
                  description="Download my resume, portfolio, and other professional materials"
                  showStats={true}
                  showFilters={true}
                  showPreview={true}
                  variant="grid"
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Categories View</h4>
                <DownloadCenter
                  items={downloadItems}
                  showStats={false}
                  showFilters={false}
                  showPreview={true}
                  variant="categories"
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">List View</h4>
                <DownloadCenter
                  items={downloadItems.slice(0, 3)}
                  showStats={false}
                  showFilters={false}
                  showPreview={true}
                  variant="list"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Share Buttons */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Share Buttons</CardTitle>
          <CardDescription className="font-kabel">Social sharing components for portfolio projects</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Default Share Buttons</h4>
                <ShareButtons
                  title="My Amazing Portfolio Project"
                  description="Check out this incredible project I built with React and TypeScript"
                  hashtags={['portfolio', 'react', 'typescript', 'webdev']}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Minimal Variant</h4>
                <ShareButtons
                  variant="minimal"
                  showLabels={false}
                  platforms={['twitter', 'linkedin', 'github', 'copy']}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Compact Variant</h4>
                <ShareButtons
                  variant="compact"
                  showLabels={false}
                  platforms={['twitter', 'linkedin', 'email', 'copy']}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Cards */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Project Cards</CardTitle>
          <CardDescription className="font-kabel">Portfolio project showcases with interactive features</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Featured Project</h4>
                <div className="max-w-md">
                  <ProjectCard
                    title="E-Commerce Platform"
                    description="A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time notifications."
                    image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    technologies={['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Socket.io']}
                    category="Web"
                    status="completed"
                    demoUrl="https://demo.example.com"
                    githubUrl="https://github.com/example/project"
                    caseStudyUrl="https://case-study.example.com"
                    date="2024"
                    team={['John Doe', 'Jane Smith']}
                    featured={true}
                    likes={42}
                    views={1250}
                    variant="gradient"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Project Grid</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <ProjectCard
                    title="Mobile Banking App"
                    description="Secure mobile banking application with biometric authentication and real-time transaction monitoring."
                    image="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                    technologies={['React Native', 'Firebase', 'Biometrics']}
                    category="Mobile"
                    status="in-progress"
                    githubUrl="https://github.com/example/mobile-app"
                    date="2024"
                    likes={28}
                    views={890}
                    variant="glass"
                    size="small"
                  />
                  
                  <ProjectCard
                    title="Design System"
                    description="Comprehensive design system with reusable components, design tokens, and documentation."
                    image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    technologies={['React', 'TypeScript', 'Tailwind', 'Storybook']}
                    category="Design"
                    status="completed"
                    demoUrl="https://design-system.example.com"
                    githubUrl="https://github.com/example/design-system"
                    date="2023"
                    likes={156}
                    views={3420}
                    variant="default"
                    size="small"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Cards */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Skill Cards</CardTitle>
          <CardDescription className="font-kabel">Professional skills showcase with proficiency levels</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Skill Categories</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <SkillCard
                    name="React"
                    category="frontend"
                    level={95}
                    experience="4+ years"
                    projects={25}
                    certifications={2}
                    trending={true}
                    description="Advanced React development including hooks, context, performance optimization, and testing."
                    relatedSkills={['TypeScript', 'Next.js', 'Redux', 'Testing Library']}
                    variant="gradient"
                  />
                  
                  <SkillCard
                    name="Node.js"
                    category="backend"
                    level={85}
                    experience="3+ years"
                    projects={18}
                    certifications={1}
                    description="Backend development with Express, database integration, and API design."
                    relatedSkills={['Express', 'MongoDB', 'PostgreSQL', 'GraphQL']}
                    variant="glass"
                  />
                  
                  <SkillCard
                    name="UI/UX Design"
                    category="design"
                    level={78}
                    experience="2+ years"
                    projects={12}
                    description="User interface and experience design with focus on accessibility and usability."
                    relatedSkills={['Figma', 'Adobe XD', 'Prototyping', 'User Research']}
                    variant="default"
                  />
                  
                  <SkillCard
                    name="React Native"
                    category="mobile"
                    level={72}
                    experience="2+ years"
                    projects={8}
                    description="Cross-platform mobile development with native performance."
                    relatedSkills={['Expo', 'Native Modules', 'App Store', 'Play Store']}
                    variant="glass"
                  />
                  
                  <SkillCard
                    name="AWS"
                    category="devops"
                    level={68}
                    experience="1+ years"
                    projects={6}
                    certifications={1}
                    description="Cloud infrastructure, serverless functions, and deployment automation."
                    relatedSkills={['Lambda', 'S3', 'CloudFormation', 'EC2']}
                    variant="default"
                  />
                  
                  <SkillCard
                    name="Machine Learning"
                    category="other"
                    level={45}
                    experience="6 months"
                    projects={3}
                    trending={true}
                    description="Data analysis, model training, and AI integration in web applications."
                    relatedSkills={['Python', 'TensorFlow', 'Scikit-learn', 'Pandas']}
                    variant="gradient"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Minimal Skills</h4>
                <div className="grid md:grid-cols-4 gap-3">
                  <SkillCard
                    name="TypeScript"
                    category="frontend"
                    level={90}
                    variant="minimal"
                    showProgress={false}
                  />
                  <SkillCard
                    name="GraphQL"
                    category="backend"
                    level={75}
                    variant="minimal"
                    showProgress={false}
                  />
                  <SkillCard
                    name="Docker"
                    category="devops"
                    level={65}
                    variant="minimal"
                    showProgress={false}
                  />
                  <SkillCard
                    name="Figma"
                    category="design"
                    level={80}
                    variant="minimal"
                    showProgress={false}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonial Cards */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Testimonial Cards</CardTitle>
          <CardDescription className="font-kabel text-white/80">Customer testimonials with expandable content and social links</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Testimonial Variants</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <TestimonialCard
                    name="Sarah Johnson"
                    position="Senior Designer"
                    company="Creative Studio"
                    avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                    shortTestimonial="This design system has completely transformed how our team works. The components are beautiful and easy to use."
                    fullTestimonial="This design system has completely transformed how our team works. The components are beautiful and easy to use. We've been able to ship features 3x faster while maintaining consistent quality. The documentation is excellent and the glassmorphism effects add such a premium feel to our products. I can't recommend it enough!"
                    linkedinUrl="https://linkedin.com/in/sarah-johnson"
                    rating={5}
                    variant="glass"
                  />
                  
                  <TestimonialCard
                    name="Michael Chen"
                    position="Lead Developer"
                    company="Tech Innovations"
                    shortTestimonial="The best design system I've worked with. Clean code, great documentation, and amazing support."
                    fullTestimonial="The best design system I've worked with. Clean code, great documentation, and amazing support. The TypeScript integration is seamless and the component API is intuitive. Our development velocity has increased significantly since adopting this system."
                    linkedinUrl="https://linkedin.com/in/michael-chen"
                    rating={5}
                    variant="default"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Single Testimonial</h4>
                <div className="max-w-md">
                  <TestimonialCard
                    name="Alex Rivera"
                    position="Product Manager"
                    company="StartupCo"
                    shortTestimonial="Game-changing design system that helped us scale our product design efficiently."
                    fullTestimonial="Game-changing design system that helped us scale our product design efficiently. The consistency across all components is remarkable, and the accessibility features are top-notch. Our users love the polished feel of our new interface."
                    rating={5}
                    variant="gradient"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certification Cards */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Certification Cards</CardTitle>
          <CardDescription className="font-kabel">Professional certifications and achievements with verification</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Certification Variants</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <CertificationCard
                    title="AWS Certified Solutions Architect"
                    issuer="Amazon Web Services"
                    issueDate="2023-06-15"
                    expiryDate="2026-06-15"
                    credentialId="AWS-SAA-C03-123456"
                    credentialUrl="https://aws.amazon.com/verification"
                    logo="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=150"
                    description="Validates expertise in designing distributed systems on AWS with best practices for security, reliability, and cost optimization."
                    skills={['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization']}
                    status="active"
                    variant="default"
                  />
                  
                  <CertificationCard
                    title="Google UX Design Certificate"
                    issuer="Google Career Certificates"
                    issueDate="2023-03-20"
                    credentialId="GOOGLE-UX-789012"
                    credentialUrl="https://coursera.org/verify/certificate"
                    description="Comprehensive program covering user experience design fundamentals, research methods, and design thinking."
                    skills={['User Research', 'Prototyping', 'Figma', 'Design Systems']}
                    status="active"
                    variant="glass"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Different Status Types</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <CertificationCard
                    title="React Developer Certification"
                    issuer="Meta"
                    issueDate="2023-01-10"
                    expiryDate="2025-01-10"
                    credentialId="META-REACT-345678"
                    description="Advanced React development skills including hooks, context, and performance optimization."
                    skills={['React', 'JavaScript', 'Hooks', 'Performance']}
                    status="active"
                    variant="gradient"
                  />
                  
                  <CertificationCard
                    title="Kubernetes Administrator"
                    issuer="Cloud Native Computing Foundation"
                    issueDate="2022-08-15"
                    expiryDate="2024-02-15"
                    credentialId="CKA-901234"
                    description="Demonstrates skills in Kubernetes cluster administration and troubleshooting."
                    skills={['Kubernetes', 'Docker', 'DevOps', 'Container Orchestration']}
                    status="expired"
                    variant="default"
                  />
                  
                  <CertificationCard
                    title="Certified Scrum Master"
                    issuer="Scrum Alliance"
                    issueDate="2024-01-05"
                    credentialId="CSM-567890"
                    description="Agile project management and Scrum framework expertise for leading development teams."
                    skills={['Scrum', 'Agile', 'Project Management', 'Team Leadership']}
                    status="pending"
                    variant="glass"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Dashboard */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Stats Dashboard</CardTitle>
          <CardDescription className="font-kabel">GitHub statistics and development metrics</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Developer Statistics</h4>
                <StatsDashboard
                  githubUsername="your-username"
                  showGitHub={true}
                  showLanguages={true}
                  showActivity={true}
                  showContributions={true}
                  customStats={[
                    { label: 'Projects Completed', value: 28, icon: Award, color: 'text-success-500', trend: 12 },
                    { label: 'Coffee Consumed', value: '2.4k', icon: Coffee, color: 'text-warning-500', trend: 8 },
                    { label: 'Lines of Code', value: '47k', icon: Code, color: 'text-primary-500', trend: 15 },
                    { label: 'Happy Clients', value: 15, icon: Users, color: 'text-secondary-500', trend: 25 },
                  ]}
                  variant="default"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Study Layout */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Case Study Layout</CardTitle>
          <CardDescription className="font-kabel">Comprehensive project documentation with detailed breakdowns</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Sample Case Study</h4>
                <CaseStudyLayout
                  title="E-Commerce Platform Redesign"
                  subtitle="Transforming the shopping experience"
                  description="A complete redesign of an e-commerce platform focusing on user experience, conversion optimization, and mobile-first design. The project involved extensive user research, prototyping, and iterative testing."
                  heroImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  client="RetailCorp"
                  role="Lead UX Designer & Frontend Developer"
                  duration="6 months"
                  team={['Sarah Johnson (Designer)', 'Mike Chen (Developer)', 'Alex Rivera (PM)']}
                  technologies={['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Stripe', 'Node.js']}
                  category="Web"
                  status="completed"
                  demoUrl="https://demo.retailcorp.com"
                  githubUrl="https://github.com/example/ecommerce-redesign"
                  figmaUrl="https://figma.com/example"
                  sections={[
                    {
                      id: 'research',
                      title: 'User Research & Discovery',
                      content: 'We conducted extensive user interviews with 25 customers to understand pain points in the current shopping experience. Key findings revealed that users struggled with product discovery and the checkout process was too complex.',
                      highlights: [
                        '78% of users abandoned cart due to complex checkout',
                        'Average task completion time was 4.2 minutes',
                        'Mobile users had 40% higher bounce rate'
                      ],
                      images: [
                        {
                          id: 'research-1',
                          src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
                          alt: 'User research session',
                          title: 'User Interview Session',
                          description: 'Conducting user interviews to understand pain points'
                        }
                      ]
                    },
                    {
                      id: 'design',
                      title: 'Design Process & Prototyping',
                      content: 'Based on research insights, we created wireframes and high-fidelity prototypes. The new design focused on simplified navigation, streamlined checkout, and improved product discovery.',
                      highlights: [
                        'Reduced checkout steps from 6 to 3',
                        'Implemented smart product recommendations',
                        'Created mobile-first responsive design'
                      ],
                      code: `// Simplified checkout flow
const CheckoutFlow = () => {
  const steps = ['Cart', 'Shipping', 'Payment'];
  
  return (
    <div className="checkout-flow">
      {steps.map((step, index) => (
        <CheckoutStep key={step} step={step} active={index === currentStep} />
      ))}
    </div>
  );
};`
                    },
                    {
                      id: 'implementation',
                      title: 'Development & Implementation',
                      content: 'The development phase focused on performance optimization, accessibility, and seamless integration with existing systems. We used React with TypeScript for type safety and Tailwind CSS for consistent styling.',
                      highlights: [
                        'Achieved 95+ Lighthouse performance score',
                        'Implemented WCAG 2.1 AA accessibility standards',
                        'Reduced page load time by 60%'
                      ]
                    }
                  ]}
                  outcomes={[
                    { metric: 'Conversion Rate', value: '+34%', description: 'Increase in completed purchases' },
                    { metric: 'Page Load Time', value: '1.2s', description: 'Average page load speed' },
                    { metric: 'User Satisfaction', value: '4.8/5', description: 'Post-launch user rating' }
                  ]}
                  challenges={[
                    'Integrating with legacy payment systems while maintaining security',
                    'Balancing feature richness with performance on mobile devices',
                    'Coordinating design changes across multiple stakeholder teams'
                  ]}
                  learnings={[
                    'User research early and often prevents costly redesigns later',
                    'Performance optimization should be considered from day one',
                    'Accessibility improvements benefit all users, not just those with disabilities'
                  ]}
                  nextSteps={[
                    'Implement advanced personalization features',
                    'Add AR product visualization for furniture items',
                    'Expand to international markets with localization'
                  ]}
                  variant="default"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}