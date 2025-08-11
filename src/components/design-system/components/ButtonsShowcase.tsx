import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Heart, Star, ShoppingCart, Download, Play, Pause } from 'lucide-react';

export function ButtonsShowcase() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Buttons</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Interactive buttons with hover effects, loading states, and multiple variants for different use cases.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Button Variants */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Button Variants</CardTitle>
          <CardDescription className="font-kabel">Different visual styles for various contexts</CardDescription>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="glass">Glass</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Sizes */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Button Sizes</CardTitle>
          <CardDescription className="font-kabel">Three size options for different interface needs</CardDescription>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button States */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Button States</CardTitle>
          <CardDescription className="font-kabel">Different interaction states and loading indicators</CardDescription>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button isLoading={isLoading} onClick={handleLoadingDemo}>
                {isLoading ? 'Loading' : 'Click for Loading'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Buttons with Icons */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Buttons with Icons</CardTitle>
          <CardDescription className="font-kabel text-white/80">Enhanced buttons with Lucide React icons</CardDescription>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="glass" className="flex items-center gap-2">
                <Heart size={16} />
                Like
              </Button>
              <Button variant="glass" className="flex items-center gap-2">
                <Star size={16} />
                Favorite
              </Button>
              <Button variant="glass" className="flex items-center gap-2">
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
              <Button variant="glass" className="flex items-center gap-2">
                <Download size={16} />
                Download
              </Button>
              <Button variant="glass" className="flex items-center gap-2">
                <Play size={16} />
                Play
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Examples */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Interactive Examples</CardTitle>
          <CardDescription className="font-kabel">Real-world button usage scenarios</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Call to Action */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Call to Action</h4>
                <div className="text-center p-6 glass-card rounded-lg">
                  <h3 className="text-xl font-basement text-foreground mb-2">Ready to get started?</h3>
                  <p className="text-muted-foreground font-kabel mb-4">Join thousands of developers using our design system</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="gradient" size="lg">Get Started</Button>
                    <Button variant="outline" size="lg">Learn More</Button>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Action Bar</h4>
                <div className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="font-kabel text-foreground">3 items selected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Share</Button>
                    <Button variant="danger" size="sm">Delete</Button>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Form Actions</h4>
                <div className="flex justify-end space-x-3 p-4 glass-card rounded-lg">
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="outline">Save Draft</Button>
                  <Button variant="primary">Publish</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Best Practices</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-success-500">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use primary buttons for main actions</li>
                  <li>• Provide loading states for async actions</li>
                  <li>• Include icons for better recognition</li>
                  <li>• Maintain consistent sizing within sections</li>
                  <li>• Use appropriate variants for context</li>
                  <li>• Ensure adequate touch targets (44px minimum)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use multiple primary buttons in one section</li>
                  <li>• Mix different button styles randomly</li>
                  <li>• Make buttons too small for touch devices</li>
                  <li>• Use vague labels like "Click here"</li>
                  <li>• Forget disabled states for unavailable actions</li>
                  <li>• Overuse gradient and glass effects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}