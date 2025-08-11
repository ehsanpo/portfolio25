import React from 'react';
import { colors } from '../../tokens/colors';
import { Card, CardContent, CardTitle } from '../ui/Card';

export function ColorPalette() {
  const colorGroups = [
    { name: 'Primary', colors: colors.primary, description: 'Main brand colors for primary actions' },
    { name: 'Secondary', colors: colors.secondary, description: 'Supporting colors for secondary elements' },
    { name: 'Accent', colors: colors.accent, description: 'Accent colors for highlights and emphasis' },
    { name: 'Success', colors: colors.success, description: 'Success states and positive feedback' },
    { name: 'Warning', colors: colors.warning, description: 'Warning states and caution indicators' },
    { name: 'Error', colors: colors.error, description: 'Error states and destructive actions' },
    { name: 'Neutral', colors: colors.neutral, description: 'Neutral grays for backgrounds, borders, and text' },
    { name: 'Custom', colors: { white: colors.white, offwhite: colors.offwhite, opium: colors.opium }, description: 'Custom brand colors for backgrounds and text' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Color System</h2>
        <p className="text-lg text-neutral-600 mb-8">
          Our color system provides a comprehensive palette with semantic meaning and proper contrast ratios.
        </p>
      </div>

      <div className="grid gap-8">
        {colorGroups.map((group) => (
          <Card key={group.name} padding="lg">
            <CardTitle>{group.name}</CardTitle>
            <p className="text-sm text-neutral-600 mt-2 mb-6">{group.description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-11 gap-2">
              {Object.entries(group.colors).map(([shade, color]) => (
                <div key={shade} className="group">
                  <div 
                    className="aspect-square rounded-lg mb-2 shadow-sm border border-neutral-200 transition-transform hover:scale-105"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-center">
                    <div className="text-xs font-medium text-neutral-700">{shade}</div>
                    <div className="text-xs text-neutral-500 font-mono">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}