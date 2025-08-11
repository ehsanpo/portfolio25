import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { BarChart3, PieChart, TrendingUp, Activity, Target, Zap } from 'lucide-react';

export function DataVisualization() {
  const chartTypes = [
    {
      icon: BarChart3,
      name: 'Bar Charts',
      description: 'Compare values across categories',
      usage: 'Sales data, survey results, performance metrics',
      colors: ['primary-500', 'secondary-500', 'accent-500'],
    },
    {
      icon: TrendingUp,
      name: 'Line Charts',
      description: 'Show trends and changes over time',
      usage: 'Growth metrics, time series data, progress tracking',
      colors: ['primary-500', 'success-500'],
    },
    {
      icon: PieChart,
      name: 'Pie Charts',
      description: 'Display parts of a whole',
      usage: 'Market share, budget allocation, demographics',
      colors: ['primary-500', 'secondary-500', 'accent-500', 'warning-500'],
    },
    {
      icon: Activity,
      name: 'Area Charts',
      description: 'Show cumulative values over time',
      usage: 'Revenue streams, user engagement, resource usage',
      colors: ['primary-500/60', 'secondary-500/60'],
    },
  ];

  const colorPalettes = [
    {
      name: 'Primary Palette',
      description: 'Main brand colors for standard visualizations',
      colors: ['#ef446a', '#8b5cf6', '#00ff88', '#fbbf24'],
    },
    {
      name: 'Sequential',
      description: 'Gradual progression for ordered data',
      colors: ['#fef2f4', '#fbd0da', '#f17a9b', '#ef446a', '#c1234f'],
    },
    {
      name: 'Diverging',
      description: 'Two-way scale with neutral midpoint',
      colors: ['#ef446a', '#f17a9b', '#f5f5f5', '#c084fc', '#8b5cf6'],
    },
    {
      name: 'Categorical',
      description: 'Distinct colors for unrelated categories',
      colors: ['#ef446a', '#8b5cf6', '#00ff88', '#fbbf24', '#22c55e', '#f59e0b'],
    },
  ];

  const designPrinciples = [
    {
      title: 'Clarity First',
      description: 'Data should be immediately understandable',
      guidelines: [
        'Use clear, descriptive labels',
        'Maintain consistent scales',
        'Avoid unnecessary decoration',
        'Highlight key insights',
      ],
    },
    {
      title: 'Accessibility',
      description: 'Visualizations must be inclusive',
      guidelines: [
        'Ensure color contrast ratios',
        'Don\'t rely solely on color',
        'Provide alternative text',
        'Support screen readers',
      ],
    },
    {
      title: 'Brand Consistency',
      description: 'Align with overall design system',
      guidelines: [
        'Use brand color palette',
        'Apply consistent typography',
        'Match component styling',
        'Maintain visual hierarchy',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Data Visualization</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Guidelines for creating clear, accessible, and beautiful data visualizations that align with our design system.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Visualization Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Visualization Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Great data visualization transforms complex information into clear, actionable insights. 
            Our approach prioritizes clarity over decoration, accessibility over aesthetics, and 
            user understanding over visual complexity. Every chart should tell a story and guide decision-making.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Clear</Badge>
            <Badge variant="glass">Accessible</Badge>
            <Badge variant="glass">Actionable</Badge>
            <Badge variant="glass">Beautiful</Badge>
          </div>
        </Card>

        {/* Chart Types */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Chart Types</CardTitle>
          <CardDescription className="font-kabel">Common visualization patterns and their applications</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {chartTypes.map((chart, index) => {
                const Icon = chart.icon;
                return (
                  <div key={index} className="p-4 glass-card rounded-lg">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                        <Icon className="h-6 w-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold font-basement text-foreground mb-1">{chart.name}</h4>
                        <p className="text-sm text-muted-foreground font-kabel">{chart.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-medium font-basement text-foreground mb-2">Best for:</h5>
                      <p className="text-xs text-muted-foreground font-kabel">{chart.usage}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium font-basement text-foreground mb-2">Color Palette:</h5>
                      <div className="flex space-x-2">
                        {chart.colors.map((color, colorIndex) => (
                          <div 
                            key={colorIndex}
                            className={`w-6 h-6 rounded border border-border/50 bg-${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Color Palettes */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Color Palettes</CardTitle>
          <CardDescription className="font-kabel">Carefully selected color schemes for different data types</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {colorPalettes.map((palette, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold font-basement text-foreground">{palette.name}</h4>
                      <p className="text-sm text-muted-foreground font-kabel">{palette.description}</p>
                    </div>
                    <Badge variant="neutral">{palette.colors.length} colors</Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    {palette.colors.map((color, colorIndex) => (
                      <div key={colorIndex} className="flex-1">
                        <div 
                          className="h-12 rounded border border-border/50 mb-2"
                          style={{ backgroundColor: color }}
                        />
                        <code className="text-xs font-mono text-muted-foreground">{color}</code>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Example Visualizations */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Example Visualizations</CardTitle>
          <CardDescription className="font-kabel">Sample charts demonstrating our design principles</CardDescription>
          <CardContent>
            <div className="space-y-8">
              {/* Bar Chart Example */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Bar Chart Example</h4>
                <div className="p-6 glass-card rounded-lg">
                  <div className="flex items-end justify-between h-32 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary-500 rounded-t mb-2" style={{ height: '60%' }}></div>
                      <span className="text-xs font-kabel text-muted-foreground">Q1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-secondary-500 rounded-t mb-2" style={{ height: '80%' }}></div>
                      <span className="text-xs font-kabel text-muted-foreground">Q2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-accent-500 rounded-t mb-2" style={{ height: '100%' }}></div>
                      <span className="text-xs font-kabel text-muted-foreground">Q3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-warning-500 rounded-t mb-2" style={{ height: '70%' }}></div>
                      <span className="text-xs font-kabel text-muted-foreground">Q4</span>
                    </div>
                  </div>
                  <h5 className="font-basement text-foreground text-center">Quarterly Revenue Growth</h5>
                </div>
              </div>

              {/* Line Chart Example */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Line Chart Example</h4>
                <div className="p-6 glass-card rounded-lg">
                  <div className="relative h-32 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 300 100">
                      <polyline
                        points="0,80 75,60 150,40 225,30 300,20"
                        fill="none"
                        stroke="#ef446a"
                        strokeWidth="3"
                        className="drop-shadow-sm"
                      />
                      <circle cx="0" cy="80" r="4" fill="#ef446a" />
                      <circle cx="75" cy="60" r="4" fill="#ef446a" />
                      <circle cx="150" cy="40" r="4" fill="#ef446a" />
                      <circle cx="225" cy="30" r="4" fill="#ef446a" />
                      <circle cx="300" cy="20" r="4" fill="#ef446a" />
                    </svg>
                  </div>
                  <h5 className="font-basement text-foreground text-center">User Engagement Trend</h5>
                </div>
              </div>

              {/* Pie Chart Example */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Pie Chart Example</h4>
                <div className="p-6 glass-card rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="#ef446a" strokeWidth="0" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="#8b5cf6" 
                          strokeWidth="0"
                          strokeDasharray="75 25"
                          strokeDashoffset="0"
                          className="opacity-90"
                        />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="#00ff88" 
                          strokeWidth="0"
                          strokeDasharray="50 50"
                          strokeDashoffset="-75"
                          className="opacity-80"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 text-xs font-kabel">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded mr-2"></div>
                      <span>Desktop 45%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-secondary-500 rounded mr-2"></div>
                      <span>Mobile 35%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent-500 rounded mr-2"></div>
                      <span>Tablet 20%</span>
                    </div>
                  </div>
                  <h5 className="font-basement text-foreground text-center mt-4">Traffic Sources</h5>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Principles */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Design Principles</CardTitle>
          <CardDescription className="font-kabel">Core principles for effective data visualization</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {designPrinciples.map((principle, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <Target className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-basement text-foreground mb-1">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground font-kabel">{principle.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-1">
                    {principle.guidelines.map((guideline, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Best Practices</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Guidelines for creating effective data visualizations
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✓ Do</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Start with the story you want to tell</li>
                  <li>• Choose the right chart type for your data</li>
                  <li>• Use consistent colors and styling</li>
                  <li>• Provide clear labels and legends</li>
                  <li>• Test with real users and data</li>
                  <li>• Optimize for different screen sizes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Use 3D effects or unnecessary decoration</li>
                  <li>• Rely solely on color to convey meaning</li>
                  <li>• Truncate axes to mislead</li>
                  <li>• Overcrowd with too much information</li>
                  <li>• Use pie charts for more than 5 categories</li>
                  <li>• Ignore accessibility requirements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Tools */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Implementation Tools</CardTitle>
          <CardDescription className="font-kabel">Recommended libraries and tools for creating visualizations</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-1">Chart.js</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-2">Simple yet flexible charting</p>
                <Badge variant="primary" className="text-xs">Recommended</Badge>
              </div>
              
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-1">D3.js</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-2">Advanced custom visualizations</p>
                <Badge variant="secondary" className="text-xs">Advanced</Badge>
              </div>
              
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-basement text-foreground mb-1">Recharts</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-2">React-based charting library</p>
                <Badge variant="accent" className="text-xs">React</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}