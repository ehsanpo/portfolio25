import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/Card';

export function TypographyShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Typography</h2>
        <p className="text-lg text-neutral-600 mb-8">
          Our typography system uses Inter font family with carefully crafted scales and line heights for optimal readability.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Headings */}
        <Card padding="lg">
          <CardTitle>Headings</CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-neutral-900">Heading 1</div>
              <div className="text-5xl font-bold text-neutral-900">Heading 2</div>
              <div className="text-4xl font-bold text-neutral-900">Heading 3</div>
              <div className="text-3xl font-semibold text-neutral-900">Heading 4</div>
              <div className="text-2xl font-semibold text-neutral-900">Heading 5</div>
              <div className="text-xl font-semibold text-neutral-900">Heading 6</div>
            </div>
          </CardContent>
        </Card>

        {/* Body Text */}
        <Card padding="lg">
          <CardTitle>Body Text</CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">Large (18px)</div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The quick brown fox jumps over the lazy dog. This pangram contains every letter in the alphabet.
                </p>
              </div>
              
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">Base (16px)</div>
                <p className="text-base text-neutral-700 leading-relaxed">
                  The quick brown fox jumps over the lazy dog. This pangram contains every letter in the alphabet.
                </p>
              </div>
              
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">Small (14px)</div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  The quick brown fox jumps over the lazy dog. This pangram contains every letter in the alphabet.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Font Weights */}
        <Card padding="lg">
          <CardTitle>Font Weights</CardTitle>
          <CardContent>
            <div className="space-y-3">
              <div className="text-lg font-normal text-neutral-900">Normal (400) - Regular text</div>
              <div className="text-lg font-medium text-neutral-900">Medium (500) - Emphasized text</div>
              <div className="text-lg font-semibold text-neutral-900">Semibold (600) - Strong emphasis</div>
              <div className="text-lg font-bold text-neutral-900">Bold (700) - Headings and titles</div>
            </div>
          </CardContent>
        </Card>

        {/* Text Colors */}
        <Card padding="lg">
          <CardTitle>Text Colors</CardTitle>
          <CardContent>
            <div className="space-y-3">
              <div className="text-lg text-neutral-900">Primary text color</div>
              <div className="text-lg text-neutral-600">Secondary text color</div>
              <div className="text-lg text-neutral-500">Tertiary text color</div>
              <div className="text-lg text-primary-600">Link text color</div>
              <div className="text-lg text-success-600">Success text color</div>
              <div className="text-lg text-warning-600">Warning text color</div>
              <div className="text-lg text-error-600">Error text color</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}