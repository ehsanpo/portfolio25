import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { colors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';
import { spacing, shadows } from '../../tokens/spacing';

export function DesignTokens() {
  const tokenCategories = [
    {
      name: 'Colors',
      description: 'Color values used throughout the system',
      tokens: [
        { name: 'primary-500', value: colors.primary[500], type: 'color' },
        { name: 'secondary-500', value: colors.secondary[500], type: 'color' },
        { name: 'accent-500', value: colors.accent[500], type: 'color' },
        { name: 'white', value: colors.white, type: 'color' },
        { name: 'offwhite', value: colors.offwhite, type: 'color' },
        { name: 'opium', value: colors.opium, type: 'color' },
      ]
    },
    {
      name: 'Typography',
      description: 'Font families, sizes, and weights',
      tokens: [
        { name: 'font-basement', value: 'Basement, sans-serif', type: 'font' },
        { name: 'font-kabel', value: 'Kabel, sans-serif', type: 'font' },
        { name: 'text-xs', value: '0.75rem', type: 'size' },
        { name: 'text-sm', value: '0.875rem', type: 'size' },
        { name: 'text-base', value: '1rem', type: 'size' },
        { name: 'text-lg', value: '1.125rem', type: 'size' },
      ]
    },
    {
      name: 'Spacing',
      description: '8px-based spacing scale',
      tokens: [
        { name: 'space-1', value: spacing[1], type: 'size' },
        { name: 'space-2', value: spacing[2], type: 'size' },
        { name: 'space-4', value: spacing[4], type: 'size' },
        { name: 'space-8', value: spacing[8], type: 'size' },
        { name: 'space-16', value: spacing[16], type: 'size' },
        { name: 'space-24', value: spacing[24], type: 'size' },
      ]
    },
    {
      name: 'Shadows',
      description: 'Box shadow values for depth',
      tokens: [
        { name: 'shadow-sm', value: shadows.sm, type: 'shadow' },
        { name: 'shadow-base', value: shadows.base, type: 'shadow' },
        { name: 'shadow-md', value: shadows.md, type: 'shadow' },
        { name: 'shadow-lg', value: shadows.lg, type: 'shadow' },
        { name: 'shadow-xl', value: shadows.xl, type: 'shadow' },
        { name: 'shadow-2xl', value: shadows['2xl'], type: 'shadow' },
      ]
    }
  ];

  const renderTokenValue = (token: any) => {
    switch (token.type) {
      case 'color':
        return (
          <div className="flex items-center space-x-3">
            <div 
              className="w-8 h-8 rounded border border-border/50"
              style={{ backgroundColor: token.value }}
            />
            <code className="text-sm font-mono text-muted-foreground">{token.value}</code>
          </div>
        );
      case 'shadow':
        return (
          <div className="flex items-center space-x-3">
            <div 
              className="w-8 h-8 bg-background rounded border border-border/50"
              style={{ boxShadow: token.value }}
            />
            <code className="text-xs font-mono text-muted-foreground break-all">{token.value}</code>
          </div>
        );
      case 'size':
        return (
          <div className="flex items-center space-x-3">
            <div 
              className="bg-primary-500/20 h-4 rounded"
              style={{ width: token.value }}
            />
            <code className="text-sm font-mono text-muted-foreground">{token.value}</code>
          </div>
        );
      case 'font':
        return (
          <div className="flex items-center space-x-3">
            <span 
              className="text-lg"
              style={{ fontFamily: token.value }}
            >
              Aa
            </span>
            <code className="text-sm font-mono text-muted-foreground">{token.value}</code>
          </div>
        );
      default:
        return <code className="text-sm font-mono text-muted-foreground">{token.value}</code>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Design Tokens</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          The atomic values that define our design system's visual properties and ensure consistency across all platforms.
        </p>
      </div>

      <div className="grid gap-8">
        {/* What are Design Tokens */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">What are Design Tokens?</CardTitle>
          <p className="text-white/90 font-kabel leading-relaxed mb-4">
            Design tokens are the visual design atoms of the design system — specifically, they are named entities 
            that store visual design attributes. We use them in place of hard-coded values (such as hex values for color 
            or pixel values for spacing) in order to maintain a scalable and consistent visual system.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Scalable</Badge>
            <Badge variant="glass">Consistent</Badge>
            <Badge variant="glass">Maintainable</Badge>
            <Badge variant="glass">Platform Agnostic</Badge>
          </div>
        </Card>

        {/* Token Categories */}
        {tokenCategories.map((category, index) => (
          <Card key={index} variant={index % 2 === 0 ? 'glass' : 'default'} padding="lg">
            <CardTitle className="font-basement">{category.name}</CardTitle>
            <CardDescription className="font-kabel mb-6">{category.description}</CardDescription>
            <CardContent>
              <div className="space-y-4">
                {category.tokens.map((token, tokenIndex) => (
                  <div key={tokenIndex} className="flex items-center justify-between p-3 glass-card rounded-lg">
                    <div className="flex items-center space-x-4">
                      <code className="text-sm font-mono font-medium text-foreground bg-muted/50 px-2 py-1 rounded">
                        {token.name}
                      </code>
                      {renderTokenValue(token)}
                    </div>
                    <Badge variant="neutral" className="text-xs">
                      {token.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Usage Guidelines */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Usage Guidelines</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-success-500">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use semantic token names (primary, secondary)</li>
                  <li>• Reference tokens instead of hard-coded values</li>
                  <li>• Update tokens centrally for global changes</li>
                  <li>• Document token usage and context</li>
                  <li>• Use consistent naming conventions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Hard-code color or spacing values</li>
                  <li>• Create one-off tokens for single use</li>
                  <li>• Use overly specific token names</li>
                  <li>• Modify token values without team review</li>
                  <li>• Create tokens that duplicate existing ones</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Implementation</CardTitle>
          <CardDescription className="font-kabel">How to use design tokens in your code</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">CSS Custom Properties</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`:root {
  --primary-500: #ef446a;
  --spacing-4: 1rem;
  --font-basement: 'Basement', sans-serif;
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Tailwind Configuration</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`colors: {
  primary: colors.primary,
  secondary: colors.secondary,
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">JavaScript/TypeScript</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`import { colors, spacing } from './tokens';

const buttonStyle = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
};`}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}