import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/Card';
import { spacing, borderRadius, shadows } from '../../tokens/spacing';

export function SpacingShowcase() {
  const spacingSizes = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];
  const radiusSizes = ['sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl'];
  const shadowSizes = ['sm', 'base', 'md', 'lg', 'xl', '2xl'];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Spacing & Layout</h2>
        <p className="text-lg text-neutral-600 mb-8">
          Our 8px-based spacing system ensures consistent rhythm and visual hierarchy throughout the interface.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Spacing Scale */}
        <Card padding="lg">
          <CardTitle>Spacing Scale (8px base)</CardTitle>
          <CardContent>
            <div className="space-y-4">
              {spacingSizes.map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-mono text-neutral-600">
                    {size} ({spacing[size as keyof typeof spacing]})
                  </div>
                  <div 
                    className="bg-primary-200 h-4 rounded"
                    style={{ width: spacing[size as keyof typeof spacing] }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Border Radius */}
        <Card padding="lg">
          <CardTitle>Border Radius</CardTitle>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {radiusSizes.map((size) => (
                <div key={size} className="text-center">
                  <div 
                    className="w-16 h-16 bg-secondary-200 border-2 border-secondary-300 mb-2 mx-auto"
                    style={{ borderRadius: borderRadius[size as keyof typeof borderRadius] }}
                  />
                  <div className="text-xs font-medium text-neutral-700">{size}</div>
                  <div className="text-xs text-neutral-500 font-mono">
                    {borderRadius[size as keyof typeof borderRadius]}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shadows */}
        <Card padding="lg">
          <CardTitle>Shadows</CardTitle>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {shadowSizes.map((size) => (
                <div key={size} className="text-center">
                  <div 
                    className="w-16 h-16 bg-white border border-neutral-100 rounded-lg mb-3 mx-auto"
                    style={{ boxShadow: shadows[size as keyof typeof shadows] }}
                  />
                  <div className="text-xs font-medium text-neutral-700">{size}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Layout Grid Example */}
        <Card padding="lg">
          <CardTitle>Layout Examples</CardTitle>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-neutral-900 mb-3">Grid System</h4>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 bg-neutral-100 p-4 rounded text-center text-sm">12 columns</div>
                  <div className="col-span-6 bg-neutral-100 p-4 rounded text-center text-sm">6 columns</div>
                  <div className="col-span-6 bg-neutral-100 p-4 rounded text-center text-sm">6 columns</div>
                  <div className="col-span-4 bg-neutral-100 p-4 rounded text-center text-sm">4 columns</div>
                  <div className="col-span-4 bg-neutral-100 p-4 rounded text-center text-sm">4 columns</div>
                  <div className="col-span-4 bg-neutral-100 p-4 rounded text-center text-sm">4 columns</div>
                  <div className="col-span-3 bg-neutral-100 p-4 rounded text-center text-sm">3 columns</div>
                  <div className="col-span-3 bg-neutral-100 p-4 rounded text-center text-sm">3 columns</div>
                  <div className="col-span-3 bg-neutral-100 p-4 rounded text-center text-sm">3 columns</div>
                  <div className="col-span-3 bg-neutral-100 p-4 rounded text-center text-sm">3 columns</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}