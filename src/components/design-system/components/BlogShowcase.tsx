import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { BlogCard } from '../../ui/BlogCard';
import { AuthorCard } from '../../ui/AuthorCard';
import { ArticleLayout } from '../../ui/ArticleLayout';
import { Pagination } from '../../ui/Pagination';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { 
  BookOpen, 
  User, 
  FileText, 
  Grid3X3, 
  List,
  Calendar,
  Tag,
  TrendingUp,
  Star
} from 'lucide-react';

export function BlogShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showArticleLayout, setShowArticleLayout] = useState(false);

  const sampleAuthors = [
    {
      name: 'Sarah Johnson',
      bio: 'Senior UX Designer with 8+ years of experience creating user-centered digital experiences. Passionate about accessibility and inclusive design.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Senior UX Designer',
      company: 'Design Studio',
      location: 'San Francisco, CA',
      joinDate: '2020-03-15',
      website: 'https://sarahjohnson.design',
      email: 'sarah@example.com',
      social: {
        twitter: 'https://twitter.com/sarahdesigns',
        linkedin: 'https://linkedin.com/in/sarah-johnson-design',
        github: 'https://github.com/sarahdesigns',
      },
      stats: {
        articles: 42,
        followers: 2340,
        likes: 8900,
        views: 45000,
      },
      specialties: ['UX Design', 'Accessibility', 'Design Systems', 'User Research'],
      achievements: ['UX Awards Winner 2023', 'Top Design Writer'],
      featured: true,
      verified: true,
    },
    {
      name: 'Michael Chen',
      bio: 'Full-stack developer and technical writer. Loves building scalable web applications and sharing knowledge with the community.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Senior Developer',
      company: 'TechCorp',
      location: 'Austin, TX',
      joinDate: '2019-08-20',
      social: {
        twitter: 'https://twitter.com/michaelcodes',
        linkedin: 'https://linkedin.com/in/michael-chen-dev',
        github: 'https://github.com/michaelchen',
      },
      stats: {
        articles: 28,
        followers: 1890,
        likes: 5600,
        views: 32000,
      },
      specialties: ['React', 'Node.js', 'TypeScript', 'AWS'],
      achievements: ['Open Source Contributor'],
      featured: false,
      verified: true,
    },
    {
      name: 'Emily Rodriguez',
      bio: 'Product designer focused on creating delightful user experiences. Advocate for design thinking and cross-functional collaboration.',
      role: 'Product Designer',
      company: 'StartupCo',
      location: 'New York, NY',
      joinDate: '2021-01-10',
      social: {
        linkedin: 'https://linkedin.com/in/emily-rodriguez-design',
      },
      stats: {
        articles: 15,
        followers: 890,
        likes: 2100,
        views: 12000,
      },
      specialties: ['Product Design', 'Prototyping', 'User Testing'],
      featured: false,
      verified: false,
    },
  ];

  const sampleBlogPosts = [
    {
      title: 'Building Accessible Design Systems',
      excerpt: 'Learn how to create design systems that work for everyone, including users with disabilities. We\'ll cover WCAG guidelines, testing strategies, and implementation best practices.',
      author: sampleAuthors[0],
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'Design Systems',
      tags: ['Accessibility', 'Design Systems', 'WCAG', 'Inclusive Design'],
      featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'building-accessible-design-systems',
      views: 2340,
      likes: 156,
      comments: 23,
      featured: true,
    },
    {
      title: 'Modern React Patterns for 2024',
      excerpt: 'Explore the latest React patterns and best practices that will make your code more maintainable, performant, and developer-friendly.',
      author: sampleAuthors[1],
      publishDate: '2024-01-10',
      readTime: '12 min read',
      category: 'Development',
      tags: ['React', 'JavaScript', 'TypeScript', 'Best Practices'],
      featuredImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'modern-react-patterns-2024',
      views: 1890,
      likes: 134,
      comments: 18,
      featured: false,
    },
    {
      title: 'The Psychology of Color in UI Design',
      excerpt: 'Understanding how colors affect user behavior and emotions can dramatically improve your interface design. Let\'s dive into color psychology.',
      author: sampleAuthors[2],
      publishDate: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      tags: ['Color Theory', 'UI Design', 'Psychology', 'Branding'],
      featuredImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'psychology-of-color-ui-design',
      views: 1560,
      likes: 89,
      comments: 12,
      featured: false,
    },
    {
      title: 'Optimizing Web Performance in 2024',
      excerpt: 'Performance is crucial for user experience and SEO. Learn the latest techniques for building lightning-fast web applications.',
      author: sampleAuthors[1],
      publishDate: '2023-12-28',
      readTime: '10 min read',
      category: 'Performance',
      tags: ['Performance', 'Web Vitals', 'Optimization', 'SEO'],
      featuredImage: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'optimizing-web-performance-2024',
      views: 2100,
      likes: 178,
      comments: 31,
      featured: false,
    },
    {
      title: 'Design Tokens: The Foundation of Scalable Design',
      excerpt: 'Design tokens are the building blocks of consistent design systems. Learn how to implement and maintain them effectively.',
      author: sampleAuthors[0],
      publishDate: '2023-12-20',
      readTime: '7 min read',
      category: 'Design Systems',
      tags: ['Design Tokens', 'CSS Variables', 'Scalability', 'Consistency'],
      featuredImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'design-tokens-scalable-design',
      views: 1780,
      likes: 145,
      comments: 19,
      featured: false,
    },
    {
      title: 'Micro-interactions That Delight Users',
      excerpt: 'Small animations and interactions can make a huge difference in user experience. Discover how to implement meaningful micro-interactions.',
      author: sampleAuthors[2],
      publishDate: '2023-12-15',
      readTime: '5 min read',
      category: 'UX Design',
      tags: ['Micro-interactions', 'Animation', 'UX', 'User Engagement'],
      featuredImage: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'micro-interactions-delight-users',
      views: 1340,
      likes: 92,
      comments: 15,
      featured: false,
    },
  ];

  const sampleArticleContent = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: 'Accessibility in design systems isn\'t just about compliance—it\'s about creating inclusive experiences that work for everyone. When we build with accessibility in mind from the start, we create better products for all users.',
      type: 'text' as const,
    },
    {
      id: 'why-accessibility-matters',
      title: 'Why Accessibility Matters',
      content: 'Over 1 billion people worldwide live with some form of disability. That\'s 15% of the global population. When we ignore accessibility, we\'re excluding a significant portion of potential users.',
      type: 'text' as const,
    },
    {
      id: 'wcag-guidelines',
      title: 'WCAG Guidelines Overview',
      content: 'The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making web content accessible. Here are the four main principles:',
      type: 'list' as const,
      list: {
        type: 'ordered',
        items: [
          'Perceivable - Information must be presentable in ways users can perceive',
          'Operable - Interface components must be operable by all users',
          'Understandable - Information and UI operation must be understandable',
          'Robust - Content must work with various assistive technologies'
        ]
      }
    },
    {
      id: 'implementation-example',
      title: 'Implementation Example',
      content: 'Here\'s how to implement accessible button components:',
      type: 'code' as const,
      code: {
        language: 'tsx',
        content: `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  'aria-label'?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  disabled = false,
  'aria-label': ariaLabel,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-all',
        'focus:outline-none focus:ring-2 focus:ring-primary-500',
        variant === 'primary' && 'bg-primary-500 text-white',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}`
      }
    },
    {
      id: 'expert-quote',
      title: '',
      content: '',
      type: 'quote' as const,
      quote: {
        text: 'Accessibility is not a feature you add on at the end. It\'s a fundamental part of good design that benefits everyone.',
        author: 'Inclusive Design Expert'
      }
    },
    {
      id: 'testing-strategies',
      title: 'Testing Strategies',
      content: 'Regular testing is crucial for maintaining accessibility standards. Here are some effective approaches:',
      type: 'list' as const,
      list: {
        type: 'unordered',
        items: [
          'Use automated testing tools like axe-core and Lighthouse',
          'Test with real screen readers (NVDA, JAWS, VoiceOver)',
          'Navigate using only keyboard input',
          'Test with users who have disabilities',
          'Check color contrast ratios regularly'
        ]
      }
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: 'Building accessible design systems requires ongoing commitment and attention to detail. By following WCAG guidelines, testing regularly, and involving users with disabilities in our design process, we can create truly inclusive digital experiences.',
      type: 'text' as const,
    },
  ];

  const totalPages = Math.ceil(sampleBlogPosts.length / 3);
  const startIndex = (currentPage - 1) * 3;
  const currentPosts = sampleBlogPosts.slice(startIndex, startIndex + 3);

  if (showArticleLayout) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Article Layout Demo</h2>
            <p className="text-lg text-muted-foreground font-kabel">
              Complete article layout with table of contents, author bio, and related articles
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowArticleLayout(false)}
            className="flex items-center gap-2"
          >
            <Grid3X3 size={16} />
            Back to Blog Components
          </Button>
        </div>

        <ArticleLayout
          title="Building Accessible Design Systems"
          excerpt="Learn how to create design systems that work for everyone, including users with disabilities. We'll cover WCAG guidelines, testing strategies, and implementation best practices."
          content={sampleArticleContent}
          author={sampleAuthors[0]}
          publishDate="2024-01-15"
          lastUpdated="2024-01-16"
          readTime="8 min read"
          category="Design Systems"
          tags={['Accessibility', 'Design Systems', 'WCAG', 'Inclusive Design']}
          featuredImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
          views={2340}
          likes={156}
          comments={23}
          relatedArticles={[
            {
              title: 'Color Contrast in Design Systems',
              excerpt: 'Ensuring proper color contrast for accessibility compliance',
              slug: 'color-contrast-design-systems',
              readTime: '5 min read',
              image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
            },
            {
              title: 'Testing for Accessibility',
              excerpt: 'Tools and techniques for accessibility testing',
              slug: 'testing-for-accessibility',
              readTime: '7 min read',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
            },
          ]}
          tableOfContents={true}
          showProgress={true}
          variant="default"
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Blog Components</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Complete blog system with article layouts, author cards, pagination, and content management features.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Blog Cards */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Blog Cards</CardTitle>
          <CardDescription className="font-kabel">Article preview cards with multiple layout options</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Default Cards</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleBlogPosts.slice(0, 3).map((post, index) => (
                    <BlogCard
                      key={index}
                      title={post.title}
                      excerpt={post.excerpt}
                      author={post.author}
                      publishDate={post.publishDate}
                      readTime={post.readTime}
                      category={post.category}
                      tags={post.tags}
                      featuredImage={post.featuredImage}
                      views={post.views}
                      likes={post.likes}
                      comments={post.comments}
                      featured={post.featured}
                      variant="default"
                      size="medium"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Horizontal Layout</h4>
                <div className="space-y-4">
                  {sampleBlogPosts.slice(0, 2).map((post, index) => (
                    <BlogCard
                      key={index}
                      title={post.title}
                      excerpt={post.excerpt}
                      author={post.author}
                      publishDate={post.publishDate}
                      readTime={post.readTime}
                      category={post.category}
                      tags={post.tags}
                      featuredImage={post.featuredImage}
                      views={post.views}
                      likes={post.likes}
                      comments={post.comments}
                      featured={post.featured}
                      variant="horizontal"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Glass Variant</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {sampleBlogPosts.slice(3, 5).map((post, index) => (
                    <BlogCard
                      key={index}
                      title={post.title}
                      excerpt={post.excerpt}
                      author={post.author}
                      publishDate={post.publishDate}
                      readTime={post.readTime}
                      category={post.category}
                      tags={post.tags}
                      featuredImage={post.featuredImage}
                      views={post.views}
                      likes={post.likes}
                      comments={post.comments}
                      variant="glass"
                      size="small"
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Author Cards */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Author Cards</CardTitle>
          <CardDescription className="font-kabel">Author profiles with social links, stats, and follow functionality</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Default Author Cards</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {sampleAuthors.slice(0, 2).map((author, index) => (
                    <AuthorCard
                      key={index}
                      name={author.name}
                      bio={author.bio}
                      avatar={author.avatar}
                      role={author.role}
                      company={author.company}
                      location={author.location}
                      joinDate={author.joinDate}
                      website={author.website}
                      email={author.email}
                      social={author.social}
                      stats={author.stats}
                      specialties={author.specialties}
                      achievements={author.achievements}
                      featured={author.featured}
                      verified={author.verified}
                      variant="default"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Compact Author Cards</h4>
                <div className="space-y-3">
                  {sampleAuthors.map((author, index) => (
                    <AuthorCard
                      key={index}
                      name={author.name}
                      bio={author.bio}
                      avatar={author.avatar}
                      role={author.role}
                      company={author.company}
                      verified={author.verified}
                      variant="compact"
                      showFollow={true}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Minimal Author Display</h4>
                <div className="flex flex-wrap gap-4">
                  {sampleAuthors.map((author, index) => (
                    <AuthorCard
                      key={index}
                      name={author.name}
                      bio={author.bio}
                      avatar={author.avatar}
                      role={author.role}
                      verified={author.verified}
                      variant="minimal"
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Pagination</CardTitle>
          <CardDescription className="font-kabel text-white/80">Navigation for large content sets with multiple variants</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Default Pagination</h4>
                <div className="flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    variant="default"
                    size="md"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Glass Variant</h4>
                <div className="flex justify-center">
                  <Pagination
                    currentPage={2}
                    totalPages={10}
                    onPageChange={() => {}}
                    variant="glass"
                    size="md"
                    maxVisiblePages={7}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Minimal Variant</h4>
                <div className="flex justify-center">
                  <Pagination
                    currentPage={3}
                    totalPages={8}
                    onPageChange={() => {}}
                    variant="minimal"
                    size="sm"
                    showFirstLast={false}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Large Size</h4>
                <div className="flex justify-center">
                  <Pagination
                    currentPage={1}
                    totalPages={5}
                    onPageChange={() => {}}
                    variant="glass"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Layout Demo */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Blog Layout Demo</CardTitle>
          <CardDescription className="font-kabel">Interactive blog listing with pagination and view modes</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-kabel text-muted-foreground">View:</span>
                    <div className="flex bg-muted/50 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={cn(
                          'p-2 rounded-md transition-all',
                          viewMode === 'grid'
                            ? 'bg-primary-500 text-white'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        <Grid3X3 size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={cn(
                          'p-2 rounded-md transition-all',
                          viewMode === 'list'
                            ? 'bg-primary-500 text-white'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <Badge variant="neutral">
                    {sampleBlogPosts.length} articles
                  </Badge>
                </div>
                
                <Button
                  variant="gradient"
                  onClick={() => setShowArticleLayout(true)}
                  className="flex items-center gap-2"
                >
                  <FileText size={16} />
                  View Article Layout
                </Button>
              </div>

              {/* Blog Posts */}
              <div className={cn(
                viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              )}>
                {currentPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    publishDate={post.publishDate}
                    readTime={post.readTime}
                    category={post.category}
                    tags={post.tags}
                    featuredImage={post.featuredImage}
                    views={post.views}
                    likes={post.likes}
                    comments={post.comments}
                    featured={post.featured}
                    variant={viewMode === 'list' ? 'horizontal' : 'default'}
                    size={viewMode === 'grid' ? 'medium' : 'small'}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  variant="glass"
                  size="md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Features */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Component Features</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Rich Content</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Support for text, images, code blocks, quotes, and lists
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <User className="w-6 h-6 text-secondary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Author Profiles</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Detailed author cards with social links and statistics
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Engagement</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Likes, comments, bookmarks, and sharing functionality
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-warning-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-warning-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Article Layout</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Complete article pages with table of contents
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-success-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Tag className="w-6 h-6 text-success-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Categorization</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Tags, categories, and content organization
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-error-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-error-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Pagination</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Smart pagination with multiple variants and sizes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Blog Component Best Practices</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Guidelines for creating effective blog experiences
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✓ Do</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Use clear, descriptive article titles</li>
                  <li>• Include estimated reading time</li>
                  <li>• Provide engaging excerpts that summarize content</li>
                  <li>• Use high-quality featured images</li>
                  <li>• Include author information and credibility</li>
                  <li>• Implement proper SEO metadata</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Use clickbait titles that mislead readers</li>
                  <li>• Forget to optimize images for web</li>
                  <li>• Overcrowd cards with too much information</li>
                  <li>• Use poor quality or irrelevant images</li>
                  <li>• Ignore mobile responsiveness</li>
                  <li>• Skip accessibility considerations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}