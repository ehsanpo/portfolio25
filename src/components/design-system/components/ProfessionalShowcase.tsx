import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { EducationTimeline } from '../../ui/EducationTimeline';
import { WorkExperience } from '../../ui/WorkExperience';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

export function ProfessionalShowcase() {
  // Sample education data
  const sampleEducation = [
    {
      id: 'masters-cs',
      institution: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science',
      startDate: '2018-09-01',
      endDate: '2020-06-15',
      location: 'Stanford, CA',
      gpa: '3.8/4.0',
      honors: ['Magna Cum Laude', 'Dean\'s List'],
      description: 'Specialized in Human-Computer Interaction and Machine Learning with focus on web technologies and user experience design.',
      coursework: ['Advanced Algorithms', 'Machine Learning', 'Human-Computer Interaction', 'Database Systems', 'Software Engineering'],
      projects: ['AI-powered recommendation system for e-commerce', 'Real-time collaborative design tool', 'Mobile accessibility research project'],
      activities: ['Computer Science Graduate Association - President', 'Teaching Assistant for CS106A', 'Hackathon organizer'],
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://stanford.edu',
      featured: true,
    },
    {
      id: 'bachelors-cs',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2014-08-25',
      endDate: '2018-05-20',
      location: 'Berkeley, CA',
      gpa: '3.7/4.0',
      honors: ['Cum Laude', 'Golden Key Honor Society'],
      description: 'Comprehensive computer science education with emphasis on software engineering, algorithms, and system design.',
      coursework: ['Data Structures', 'Computer Architecture', 'Operating Systems', 'Web Development', 'Software Engineering'],
      projects: ['Campus event management system', 'Distributed file storage system', 'Mobile game development'],
      activities: ['ACM Student Chapter - Vice President', 'Peer tutor for introductory programming', 'Intramural soccer team captain'],
      logo: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://berkeley.edu',
      featured: false,
    },
    {
      id: 'certification-aws',
      institution: 'Amazon Web Services',
      degree: 'AWS Certified Solutions Architect',
      field: 'Cloud Computing',
      startDate: '2023-03-01',
      endDate: '2023-06-15',
      location: 'Online',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      coursework: ['Cloud Architecture', 'Security Best Practices', 'Cost Optimization', 'High Availability Design'],
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://aws.amazon.com',
      featured: false,
    },
  ];

  // Sample work experience data
  const sampleWorkExperience = [
    {
      id: 'senior-dev-techcorp',
      company: 'TechCorp Solutions',
      position: 'Senior Full-Stack Developer',
      department: 'Product Engineering',
      startDate: '2022-01-15',
      location: 'San Francisco, CA',
      employmentType: 'full-time' as const,
      description: 'Lead development of customer-facing web applications serving 100k+ daily active users. Architect scalable solutions and mentor junior developers.',
      achievements: [
        'Reduced application load time by 60% through performance optimization',
        'Led migration from monolith to microservices architecture',
        'Mentored 5 junior developers, with 3 receiving promotions',
        'Implemented automated testing pipeline reducing bugs by 40%',
        'Designed and built real-time notification system handling 1M+ events daily'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Redis'],
      projects: [
        'Customer dashboard redesign increasing user engagement by 35%',
        'Real-time collaboration features for team workspaces',
        'Mobile-responsive design system used across 12 products'
      ],
      teamSize: 8,
      reportingTo: 'VP of Engineering',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://techcorp.example.com',
      current: true,
      featured: true,
      remote: false,
    },
    {
      id: 'fullstack-dev-startup',
      company: 'InnovateLab',
      position: 'Full-Stack Developer',
      department: 'Engineering',
      startDate: '2020-07-01',
      endDate: '2021-12-31',
      location: 'Austin, TX',
      employmentType: 'full-time' as const,
      description: 'Developed MVP and scaled early-stage fintech platform from 0 to 10k users. Built both frontend and backend systems.',
      achievements: [
        'Built entire platform MVP in 4 months with React and Node.js',
        'Implemented secure payment processing with Stripe integration',
        'Achieved 99.9% uptime through robust error handling and monitoring',
        'Reduced customer onboarding time from 15 minutes to 3 minutes'
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Stripe', 'Heroku', 'Jest'],
      projects: [
        'User authentication and authorization system',
        'Payment processing and subscription management',
        'Admin dashboard for customer support'
      ],
      teamSize: 4,
      reportingTo: 'CTO',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://innovatelab.example.com',
      current: false,
      featured: false,
      remote: true,
    },
    {
      id: 'frontend-dev-agency',
      company: 'Digital Creative Agency',
      position: 'Frontend Developer',
      department: 'Development Team',
      startDate: '2019-03-01',
      endDate: '2020-06-30',
      location: 'Los Angeles, CA',
      employmentType: 'full-time' as const,
      description: 'Specialized in creating responsive, accessible websites for diverse clients including e-commerce, healthcare, and education sectors.',
      achievements: [
        'Delivered 25+ client projects with 100% on-time completion rate',
        'Improved website performance scores by average of 40 points',
        'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
        'Created reusable component library used across 15+ projects'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Webpack', 'Git'],
      projects: [
        'E-commerce platform for fashion retailer (50k+ products)',
        'Healthcare patient portal with HIPAA compliance',
        'Educational platform for online learning'
      ],
      teamSize: 6,
      reportingTo: 'Lead Developer',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://digitalcreative.example.com',
      current: false,
      featured: false,
      remote: false,
    },
    {
      id: 'intern-google',
      company: 'Google',
      position: 'Software Engineering Intern',
      department: 'Chrome Team',
      startDate: '2018-06-01',
      endDate: '2018-08-31',
      location: 'Mountain View, CA',
      employmentType: 'internship' as const,
      description: 'Contributed to Chrome browser development focusing on performance optimization and developer tools.',
      achievements: [
        'Implemented performance monitoring feature used by 2B+ users',
        'Reduced memory usage in developer tools by 15%',
        'Contributed to open-source Chromium project'
      ],
      technologies: ['C++', 'JavaScript', 'Python', 'Chromium', 'DevTools'],
      projects: [
        'Performance profiling tool for web developers',
        'Memory leak detection in browser extensions'
      ],
      teamSize: 12,
      reportingTo: 'Senior Staff Engineer',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=150',
      website: 'https://google.com',
      current: false,
      featured: true,
      remote: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Professional Timeline</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Education and work experience components for showcasing professional journey and career progression.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Education Timeline */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Education Timeline</CardTitle>
          <CardDescription className="font-kabel">Academic background with detailed coursework and achievements</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Timeline View</h4>
                <EducationTimeline
                  education={sampleEducation}
                  variant="timeline"
                  showDetails={true}
                  showGPA={true}
                  showActivities={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Cards View</h4>
                <EducationTimeline
                  education={sampleEducation.slice(0, 2)}
                  variant="cards"
                  showDetails={false}
                  showGPA={true}
                  showActivities={false}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Minimal View</h4>
                <EducationTimeline
                  education={sampleEducation}
                  variant="minimal"
                  showDetails={false}
                  showGPA={false}
                  showActivities={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Work Experience</CardTitle>
          <CardDescription className="font-kabel">Professional career history with achievements and technologies</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Timeline View</h4>
                <WorkExperience
                  experience={sampleWorkExperience}
                  variant="timeline"
                  showDetails={true}
                  showTechnologies={true}
                  showAchievements={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Cards View</h4>
                <WorkExperience
                  experience={sampleWorkExperience.slice(0, 2)}
                  variant="cards"
                  showDetails={false}
                  showTechnologies={true}
                  showAchievements={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Minimal View</h4>
                <WorkExperience
                  experience={sampleWorkExperience}
                  variant="minimal"
                  showDetails={false}
                  showTechnologies={false}
                  showAchievements={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Combined Timeline */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Combined Professional Timeline</CardTitle>
          <CardDescription className="font-kabel text-white/80">Education and work experience in chronological order</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Career Overview</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 glass-card rounded-lg border border-white/20">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold font-basement text-white mb-1">
                      {sampleEducation.length}
                    </div>
                    <div className="text-white/80 font-kabel text-sm">Degrees & Certifications</div>
                  </div>
                  
                  <div className="text-center p-4 glass-card rounded-lg border border-white/20">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold font-basement text-white mb-1">
                      {sampleWorkExperience.length}
                    </div>
                    <div className="text-white/80 font-kabel text-sm">Work Positions</div>
                  </div>
                  
                  <div className="text-center p-4 glass-card rounded-lg border border-white/20">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold font-basement text-white mb-1">
                      5+
                    </div>
                    <div className="text-white/80 font-kabel text-sm">Years Experience</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Recent Experience</h4>
                <div className="space-y-4">
                  {/* Current Position */}
                  <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border border-white/20">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-basement text-white">Senior Full-Stack Developer</h5>
                      <p className="text-white/80 font-kabel text-sm">TechCorp Solutions • 2022 - Present</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 font-kabel text-xs">Current Position</div>
                      <div className="text-white/80 font-kabel text-sm">2+ years</div>
                    </div>
                  </div>

                  {/* Previous Position */}
                  <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border border-white/20">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-basement text-white">Full-Stack Developer</h5>
                      <p className="text-white/80 font-kabel text-sm">InnovateLab • 2020 - 2021</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 font-kabel text-xs">Previous</div>
                      <div className="text-white/80 font-kabel text-sm">1.5 years</div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border border-white/20">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-basement text-white">Master of Science, Computer Science</h5>
                      <p className="text-white/80 font-kabel text-sm">Stanford University • 2018 - 2020</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 font-kabel text-xs">Education</div>
                      <div className="text-white/80 font-kabel text-sm">GPA: 3.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Component Features</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Education Timeline Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Institution logos and branding</li>
                  <li>• GPA and academic honors display</li>
                  <li>• Expandable coursework and projects</li>
                  <li>• Activities and leadership roles</li>
                  <li>• Multiple layout variants (timeline, cards, minimal)</li>
                  <li>• Current/featured status indicators</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Work Experience Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Company logos and links</li>
                  <li>• Employment type badges (full-time, contract, etc.)</li>
                  <li>• Detailed achievements and impact metrics</li>
                  <li>• Technology stacks and tools used</li>
                  <li>• Team size and reporting structure</li>
                  <li>• Remote work indicators</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Best Practices</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-success-500">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• List experiences in reverse chronological order</li>
                  <li>• Include quantifiable achievements and impact</li>
                  <li>• Use consistent date formatting</li>
                  <li>• Highlight current positions and featured items</li>
                  <li>• Include relevant technologies and skills</li>
                  <li>• Provide expandable details for complex roles</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Include irrelevant or outdated positions</li>
                  <li>• Use vague descriptions without specifics</li>
                  <li>• Forget to update current status</li>
                  <li>• Overcrowd with too many details upfront</li>
                  <li>• Use inconsistent formatting across items</li>
                  <li>• Include personal or sensitive information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}