import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { Progress } from './Progress';
import { 
  Github, 
  GitBranch, 
  GitCommit, 
  Star, 
  Users, 
  Calendar,
  TrendingUp,
  Activity,
  Code,
  Coffee,
  Zap,
  Target,
  Award,
  Clock,
  BarChart3,
  PieChart,
  LineChart,
  RefreshCw
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface GitHubStats {
  totalRepos: number;
  totalCommits: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  following: number;
  contributions: number;
  streak: number;
  languages: Array<{
    name: string;
    percentage: number;
    color: string;
  }>;
  recentActivity: Array<{
    type: 'commit' | 'pr' | 'issue' | 'star';
    repo: string;
    message: string;
    date: string;
  }>;
}

interface StatsDashboardProps {
  githubUsername?: string;
  githubStats?: GitHubStats;
  customStats?: Array<{
    label: string;
    value: string | number;
    icon: React.ComponentType<any>;
    color: string;
    trend?: number;
  }>;
  showGitHub?: boolean;
  showLanguages?: boolean;
  showActivity?: boolean;
  showContributions?: boolean;
  variant?: 'default' | 'glass' | 'gradient';
  className?: string;
}

export function StatsDashboard({
  githubUsername = 'developer',
  githubStats,
  customStats = [],
  showGitHub = true,
  showLanguages = true,
  showActivity = true,
  showContributions = true,
  variant = 'default',
  className,
}: StatsDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('year');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Default stats if none provided
  const defaultStats: GitHubStats = {
    totalRepos: 42,
    totalCommits: 1247,
    totalStars: 156,
    totalForks: 23,
    followers: 89,
    following: 67,
    contributions: 847,
    streak: 23,
    languages: [
      { name: 'TypeScript', percentage: 35, color: '#3178c6' },
      { name: 'JavaScript', percentage: 28, color: '#f7df1e' },
      { name: 'React', percentage: 20, color: '#61dafb' },
      { name: 'CSS', percentage: 12, color: '#1572b6' },
      { name: 'Other', percentage: 5, color: '#6b7280' },
    ],
    recentActivity: [
      { type: 'commit', repo: 'design-system', message: 'Add new component variants', date: '2 hours ago' },
      { type: 'pr', repo: 'portfolio-site', message: 'Update project showcase', date: '1 day ago' },
      { type: 'star', repo: 'awesome-react', message: 'Starred repository', date: '2 days ago' },
      { type: 'commit', repo: 'api-server', message: 'Fix authentication bug', date: '3 days ago' },
    ],
  };

  const stats = githubStats || defaultStats;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'commit':
        return <GitCommit className="w-4 h-4 text-success-500" />;
      case 'pr':
        return <GitBranch className="w-4 h-4 text-primary-500" />;
      case 'issue':
        return <Target className="w-4 h-4 text-warning-500" />;
      case 'star':
        return <Star className="w-4 h-4 text-warning-500" />;
      default:
        return <Activity className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const defaultCustomStats = [
    { label: 'Projects Completed', value: 28, icon: Award, color: 'text-success-500', trend: 12 },
    { label: 'Coffee Consumed', value: '2.4k', icon: Coffee, color: 'text-warning-500', trend: 8 },
    { label: 'Lines of Code', value: '47k', icon: Code, color: 'text-primary-500', trend: 15 },
    { label: 'Happy Clients', value: 15, icon: Users, color: 'text-secondary-500', trend: 25 },
  ];

  const allCustomStats = customStats.length > 0 ? customStats : defaultCustomStats;

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header */}
      <Card variant="gradient" padding="lg">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-basement text-white mb-2">Developer Statistics</CardTitle>
            <CardDescription className="font-kabel text-white/80">
              Real-time insights into development activity and achievements
            </CardDescription>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-white/20 rounded-lg p-1">
              {(['week', 'month', 'year'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={cn(
                    'px-3 py-1 rounded-md text-sm font-kabel transition-all',
                    selectedPeriod === period
                      ? 'bg-white/30 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/20'
                  )}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
            
            <Button
              variant="glass"
              size="sm"
              onClick={handleRefresh}
              isLoading={isRefreshing}
              className="flex items-center gap-2"
            >
              <RefreshCw size={16} />
              Refresh
            </Button>
          </div>
        </div>
      </Card>

      {/* GitHub Stats Overview */}
      {showGitHub && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card variant="glass" className="text-center" hover>
            <div className="p-4">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Github className="w-5 h-5 text-primary-400" />
              </div>
              <div className="text-2xl font-bold font-basement text-foreground mb-1">
                {stats.totalRepos}
              </div>
              <div className="text-xs text-muted-foreground font-kabel">Repositories</div>
            </div>
          </Card>

          <Card variant="glass" className="text-center" hover>
            <div className="p-4">
              <div className="w-10 h-10 bg-success-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <GitCommit className="w-5 h-5 text-success-400" />
              </div>
              <div className="text-2xl font-bold font-basement text-foreground mb-1">
                {stats.totalCommits.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground font-kabel">Commits</div>
            </div>
          </Card>

          <Card variant="glass" className="text-center" hover>
            <div className="p-4">
              <div className="w-10 h-10 bg-warning-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 text-warning-400" />
              </div>
              <div className="text-2xl font-bold font-basement text-foreground mb-1">
                {stats.totalStars}
              </div>
              <div className="text-xs text-muted-foreground font-kabel">Stars Earned</div>
            </div>
          </Card>

          <Card variant="glass" className="text-center" hover>
            <div className="p-4">
              <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <GitBranch className="w-5 h-5 text-secondary-400" />
              </div>
              <div className="text-2xl font-bold font-basement text-foreground mb-1">
                {stats.totalForks}
              </div>
              <div className="text-xs text-muted-foreground font-kabel">Forks</div>
            </div>
          </Card>

          <Card variant="glass" className="text-center" hover>
            <div className="p-4">
              <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-accent-400" />
              </div>
              <div className="text-2xl font-bold font-basement text-foreground mb-1">
                {stats.followers}
              </div>
              <div className="text-xs text-muted-foreground font-kabel">Followers</div>
            </div>
          </Card>

          <Card variant="glass" className="text-center" hover>
            <div className="p-4">
              <div className="w-10 h-10 bg-error-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="w-5 h-5 text-error-400" />
              </div>
              <div className="text-2xl font-bold font-basement text-foreground mb-1">
                {stats.streak}
              </div>
              <div className="text-xs text-muted-foreground font-kabel">Day Streak</div>
            </div>
          </Card>
        </div>
      )}

      {/* Custom Stats */}
      {allCustomStats.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCustomStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} variant="default" hover className="text-center">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className={cn('w-6 h-6', stat.color)} />
                  </div>
                  <div className="text-2xl font-bold font-basement text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-kabel mb-2">
                    {stat.label}
                  </div>
                  {stat.trend && (
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-success-500" />
                      <span className="text-xs text-success-500 font-kabel">
                        +{stat.trend}% this month
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Language Distribution */}
      {showLanguages && (
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Language Distribution</CardTitle>
          <CardDescription className="font-kabel">Programming languages used across all repositories</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {stats.languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: language.color }}
                      />
                      <span className="text-sm font-basement text-foreground">{language.name}</span>
                    </div>
                    <span className="text-sm font-kabel text-muted-foreground">
                      {language.percentage}%
                    </span>
                  </div>
                  <Progress 
                    value={language.percentage} 
                    variant="default"
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Contributions Chart */}
      {showContributions && (
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Contribution Activity</CardTitle>
          <CardDescription className="font-kabel">Daily contribution pattern over the past year</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Contribution Grid */}
              <div className="overflow-x-auto">
                <div className="grid grid-cols-53 gap-1 min-w-[800px]">
                  {Array.from({ length: 365 }, (_, index) => {
                    const intensity = Math.floor(Math.random() * 5);
                    const intensityClasses = [
                      'bg-muted',
                      'bg-success-500/20',
                      'bg-success-500/40',
                      'bg-success-500/60',
                      'bg-success-500/80',
                      'bg-success-500',
                    ];
                    
                    return (
                      <div
                        key={index}
                        className={cn(
                          'w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125',
                          intensityClasses[intensity]
                        )}
                        title={`${intensity} contributions`}
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground font-kabel">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-muted rounded-sm" />
                    <div className="w-3 h-3 bg-success-500/20 rounded-sm" />
                    <div className="w-3 h-3 bg-success-500/40 rounded-sm" />
                    <div className="w-3 h-3 bg-success-500/60 rounded-sm" />
                    <div className="w-3 h-3 bg-success-500 rounded-sm" />
                  </div>
                  <span>More</span>
                </div>
                
                <div className="text-sm text-muted-foreground font-kabel">
                  {stats.contributions} contributions in the last year
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      {showActivity && (
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Recent Activity</CardTitle>
          <CardDescription className="font-kabel">Latest GitHub activity and contributions</CardDescription>
          <CardContent>
            <div className="space-y-3">
              {stats.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 glass-card rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-basement text-foreground">
                        {activity.repo}
                      </span>
                      <Badge variant="neutral" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-kabel">
                      {activity.message}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-kabel">
                        {activity.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card variant="gradient" className="text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold font-basement text-white mb-2">
              +{Math.round((stats.contributions / 365) * 100)}%
            </div>
            <div className="text-white/80 font-kabel">
              Productivity Growth
            </div>
            <div className="text-xs text-white/60 font-kabel mt-1">
              vs last year
            </div>
          </div>
        </Card>

        <Card variant="glass" className="text-center" hover>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-primary-400" />
            </div>
            <div className="text-3xl font-bold font-basement text-foreground mb-2">
              {Math.round(stats.contributions / 52)}
            </div>
            <div className="text-muted-foreground font-kabel">
              Avg Weekly Commits
            </div>
            <div className="text-xs text-muted-foreground font-kabel mt-1">
              {selectedPeriod} average
            </div>
          </div>
        </Card>

        <Card variant="default" className="text-center" hover>
          <div className="p-6">
            <div className="w-16 h-16 bg-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-secondary-400" />
            </div>
            <div className="text-3xl font-bold font-basement text-foreground mb-2">
              {Math.round((stats.totalStars / stats.totalRepos) * 10) / 10}
            </div>
            <div className="text-muted-foreground font-kabel">
              Avg Stars per Repo
            </div>
            <div className="text-xs text-muted-foreground font-kabel mt-1">
              quality metric
            </div>
          </div>
        </Card>
      </div>

      {/* GitHub Profile Link */}
      <Card variant="glass" padding="lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
              <Github className="w-8 h-8 text-primary-400" />
            </div>
            <div>
              <h3 className="font-basement text-foreground text-lg">GitHub Profile</h3>
              <p className="text-muted-foreground font-kabel">@{githubUsername}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground font-kabel">
                <span>{stats.followers} followers</span>
                <span>{stats.following} following</span>
              </div>
            </div>
          </div>
          
          <Button variant="gradient" className="flex items-center gap-2">
            <Github size={16} />
            View Profile
          </Button>
        </div>
      </Card>
    </div>
  );
}