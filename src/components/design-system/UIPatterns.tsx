import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Input } from '../ui/Input';
import { Search, Filter, MoreHorizontal, ChevronDown, Star, Heart, Share } from 'lucide-react';

export function UIPatterns() {
  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">UI Patterns</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Common interface patterns and layouts that provide consistent user experiences across applications.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Navigation Patterns */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Navigation Patterns</CardTitle>
          <CardDescription className="font-kabel">Common navigation structures and behaviors</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Breadcrumb Navigation</h4>
                <nav className="flex items-center space-x-2 text-sm font-kabel">
                  <span className="text-muted-foreground">Home</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-muted-foreground">Products</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground font-medium">Design System</span>
                </nav>
              </div>

              {/* Tab Navigation */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Tab Navigation</h4>
                <div className="flex space-x-1 bg-muted/50 p-1 rounded-lg">
                  <button className="px-4 py-2 bg-primary-500 text-white rounded-md font-kabel text-sm">Overview</button>
                  <button className="px-4 py-2 text-muted-foreground hover:text-foreground font-kabel text-sm">Details</button>
                  <button className="px-4 py-2 text-muted-foreground hover:text-foreground font-kabel text-sm">Reviews</button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Patterns */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Content Patterns</CardTitle>
          <CardDescription className="font-kabel">Layouts for displaying and organizing content</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Card Grid */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Card Grid Layout</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} variant="glass" hover className="text-center">
                      <div className="p-4">
                        <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3"></div>
                        <h5 className="font-basement text-foreground mb-2">Card {item}</h5>
                        <p className="text-sm text-muted-foreground font-kabel">Sample content</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* List Pattern */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">List Pattern</h4>
                <div className="space-y-2">
                  {['Item One', 'Item Two', 'Item Three'].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary-500/20 rounded-full"></div>
                        <span className="font-kabel text-foreground">{item}</span>
                      </div>
                      <Button variant="ghost" className="p-2">
                        <MoreHorizontal size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Patterns */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Form Patterns</CardTitle>
          <CardDescription className="font-kabel text-white/80">Common form layouts and input groupings</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Search Pattern */}
              <div>
                <h4 className="font-medium font-basement text-white mb-3">Search & Filter Pattern</h4>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full pl-10 pr-4 py-2 glass-card rounded-lg border border-white/20 text-white placeholder:text-white/60 font-kabel"
                    />
                  </div>
                  <Button variant="glass" className="flex items-center gap-2">
                    <Filter size={16} />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Action Bar Pattern */}
              <div>
                <h4 className="font-medium font-basement text-white mb-3">Action Bar Pattern</h4>
                <div className="flex items-center justify-between p-3 glass-card rounded-lg border border-white/20">
                  <div className="flex items-center space-x-3">
                    <span className="font-kabel text-white">3 items selected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="glass" size="sm">Delete</Button>
                    <Button variant="glass" size="sm">Archive</Button>
                    <Button variant="glass" size="sm">Share</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Patterns */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Interactive Patterns</CardTitle>
          <CardDescription className="font-kabel">Common interactive elements and behaviors</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Dropdown Pattern */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Dropdown Menu</h4>
                <Button variant="outline" className="flex items-center gap-2">
                  Options
                  <ChevronDown size={16} />
                </Button>
              </div>

              {/* Rating Pattern */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Rating Pattern</h4>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-warning-500 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground font-kabel">(4.5)</span>
                </div>
              </div>

              {/* Social Actions Pattern */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Social Actions</h4>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="flex items-center gap-2 text-sm">
                    <Heart size={16} />
                    Like (24)
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 text-sm">
                    <Share size={16} />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Layout Patterns */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Layout Patterns</CardTitle>
          <CardDescription className="font-kabel">Common page and section layouts</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Hero Section Pattern */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Hero Section</h4>
                <div className="text-center p-8 glass-card rounded-lg">
                  <h2 className="text-2xl font-bold font-basement gradient-text mb-2">Hero Title</h2>
                  <p className="text-muted-foreground font-kabel mb-4">Supporting description text</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="gradient">Primary Action</Button>
                    <Button variant="outline">Secondary Action</Button>
                  </div>
                </div>
              </div>

              {/* Feature Grid Pattern */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Feature Grid</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Feature A', 'Feature B', 'Feature C', 'Feature D'].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 glass-card rounded-lg">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex-shrink-0"></div>
                      <div>
                        <h5 className="font-basement text-foreground mb-1">{feature}</h5>
                        <p className="text-sm text-muted-foreground font-kabel">Feature description</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}