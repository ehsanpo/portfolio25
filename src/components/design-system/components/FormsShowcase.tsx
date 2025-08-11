import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { Search, Mail, Lock, User, Phone, Calendar, Eye, EyeOff } from 'lucide-react';

export function FormsShowcase() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    website: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Form Components</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Form inputs with labels, validation, helper text, and interactive states for building great user experiences.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Input Variants */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Input Variants</CardTitle>
          <CardDescription className="font-kabel">Different input states and configurations</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Input 
                  label="Email Address" 
                  type="email" 
                  placeholder="Enter your email"
                  helper="We'll never share your email with anyone."
                />
                
                <Input 
                  label="Password" 
                  type="password" 
                  placeholder="Enter your password"
                  helper="Must be at least 8 characters long"
                />
                
                <Input 
                  label="Website URL" 
                  type="url" 
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="space-y-6">
                <Input 
                  label="Invalid Input" 
                  type="text" 
                  placeholder="This has an error"
                  error="This field is required"
                />
                
                <Input 
                  label="Disabled Input" 
                  type="text" 
                  placeholder="This is disabled"
                  disabled
                  value="Read-only value"
                />
                
                <Input 
                  label="Phone Number" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  helper="Include country code"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Icons */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Inputs with Icons</CardTitle>
          <CardDescription className="font-kabel">Enhanced inputs with leading and trailing icons</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium font-basement text-foreground">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500 font-kabel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium font-basement text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500 font-kabel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium font-basement text-foreground">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="username" 
                      className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500 font-kabel"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium font-basement text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password" 
                      className="w-full pl-10 pr-12 py-3 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500 font-kabel"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium font-basement text-foreground">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500 font-kabel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium font-basement text-foreground">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500 font-kabel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Complete Form Example</CardTitle>
          <CardDescription className="font-kabel text-white/80">A real-world form with validation and error handling</CardDescription>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  error={errors.firstName}
                />
                
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  error={errors.lastName}
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                helper="We'll use this to send you important updates"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  error={errors.password}
                  helper="At least 8 characters"
                />
                
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  error={errors.confirmPassword}
                />
              </div>

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                helper="Optional - for account recovery"
              />

              <Input
                label="Website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                helper="Optional - showcase your work"
              />

              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="glass" type="button">
                  Cancel
                </Button>
                <Button variant="glass" type="submit">
                  Create Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Form Best Practices */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Form Best Practices</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-success-500">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use clear, descriptive labels</li>
                  <li>• Provide helpful placeholder text</li>
                  <li>• Show validation errors inline</li>
                  <li>• Use appropriate input types</li>
                  <li>• Group related fields together</li>
                  <li>• Provide helper text for complex fields</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use vague or technical labels</li>
                  <li>• Show all errors at once</li>
                  <li>• Make required fields unclear</li>
                  <li>• Use placeholder text as labels</li>
                  <li>• Create overly long forms</li>
                  <li>• Forget about mobile users</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}