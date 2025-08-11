import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  ArrowDown,
  Play,
  Pause,
  RotateCcw,
  Clock,
  Users,
  Target,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration?: string;
  deliverables?: string[];
  tools?: string[];
  team?: string[];
  details?: string;
  substeps?: Array<{
    title: string;
    description: string;
    completed?: boolean;
  }>;
}

interface ProcessFlowProps {
  title: string;
  description?: string;
  steps: ProcessStep[];
  variant?: 'horizontal' | 'vertical' | 'timeline' | 'cards';
  showProgress?: boolean;
  interactive?: boolean;
  animated?: boolean;
  currentStep?: number;
  className?: string;
}

export function ProcessFlow({
  title,
  description,
  steps,
  variant = 'horizontal',
  showProgress = true,
  interactive = true,
  animated = true,
  currentStep = 0,
  className,
}: ProcessFlowProps) {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const playAnimation = () => {
    setIsPlaying(true);
    setAnimationStep(0);
    
    const interval = setInterval(() => {
      setAnimationStep(prev => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setAnimationStep(0);
  };

  const renderHorizontalFlow = () => (
    <div className="space-y-8">
      {/* Progress Bar */}
      {showProgress && (
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted transform -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2 transition-all duration-1000"
            style={{ width: `${((isPlaying ? animationStep : currentStep) / (steps.length - 1)) * 100}%` }}
          />
          
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = isPlaying ? index <= animationStep : index <= currentStep;
              const isCurrent = isPlaying ? index === animationStep : index === currentStep;
              
              return (
                <Card 
                  key={step.id}
                  variant={variant} 
                  hover 
                  padding="lg"
                  className={cn(
                    'flex flex-col items-center cursor-pointer transition-all duration-500',
                    interactive && 'hover:scale-110'
                  )}
                  onClick={() => interactive && setSelectedStep(selectedStep === index ? null : index)}
                >
                  <div className={cn(
                    'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 mb-3',
                    isActive 
                      ? 'bg-gradient-to-br from-primary-500 to-secondary-500 border-primary-500 text-white shadow-lg' 
                      : 'bg-muted border-border text-muted-foreground',
                    isCurrent && 'ring-4 ring-primary-500/30 scale-110'
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="text-center max-w-24">
                    <div className={cn(
                      'text-sm font-basement transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}>
                      {step.title}
                    </div>
                    {step.duration && (
                      <div className="text-xs text-muted-foreground font-kabel mt-1">
                        {step.duration}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Step Details */}
      {selectedStep !== null && (
        <Card variant="glass" padding="lg">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
              {React.createElement(steps[selectedStep].icon, { className: 'w-6 h-6 text-primary-400' })}
            </div>
            <div className="flex-1">
              <CardTitle className="font-basement">{steps[selectedStep].title}</CardTitle>
              <CardDescription className="font-kabel mb-4">{steps[selectedStep].description}</CardDescription>
              
              {steps[selectedStep].details && (
                <p className="text-sm text-muted-foreground font-kabel mb-4">
                  {steps[selectedStep].details}
                </p>
              )}
              
              <div className="grid md:grid-cols-3 gap-4">
                {steps[selectedStep].deliverables && (
                  <div>
                    <h5 className="font-basement text-foreground mb-2 text-sm">Deliverables</h5>
                    <ul className="space-y-1">
                      {steps[selectedStep].deliverables!.map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                          <CheckCircle className="w-3 h-3 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {steps[selectedStep].tools && (
                  <div>
                    <h5 className="font-basement text-foreground mb-2 text-sm">Tools</h5>
                    <div className="flex flex-wrap gap-1">
                      {steps[selectedStep].tools!.map((tool, idx) => (
                        <Badge key={idx} variant="neutral" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {steps[selectedStep].team && (
                  <div>
                    <h5 className="font-basement text-foreground mb-2 text-sm">Team</h5>
                    <div className="space-y-1">
                      {steps[selectedStep].team!.map((member, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground font-kabel flex items-center">
                          <Users className="w-3 h-3 mr-2" />
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const renderVerticalFlow = () => (
    <div className="space-y-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = isPlaying ? index <= animationStep : index <= currentStep;
        const isCurrent = isPlaying ? index === animationStep : index === currentStep;
        
        return (
          <div key={step.id} className="relative">
            {/* Connection line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-muted">
                <div 
                  className={cn(
                    'w-full bg-gradient-to-b from-primary-500 to-secondary-500 transition-all duration-1000',
                    isActive ? 'h-full' : 'h-0'
                  )}
                />
              </div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className={cn(
                'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative z-10',
                isActive 
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500 border-primary-500 text-white shadow-lg' 
                  : 'bg-background border-border text-muted-foreground',
                isCurrent && 'ring-4 ring-primary-500/30 scale-110'
              )}>
                <Icon className="w-5 h-5" />
              </div>
              
              <Card 
                variant={isActive ? 'gradient' : 'glass'} 
                hover={interactive}
                className={cn(
                  'flex-1 transition-all duration-500',
                  interactive && 'cursor-pointer',
                  selectedStep === index && 'ring-2 ring-primary-500/50'
                )}
                onClick={() => interactive && setSelectedStep(selectedStep === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={cn(
                      'font-basement text-lg',
                      isActive && variant !== 'gradient' ? 'text-foreground' : isActive ? 'text-white' : 'text-muted-foreground'
                    )}>
                      {step.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {step.duration && (
                        <Badge variant={isActive ? "glass" : "neutral"} className="text-xs">
                          {step.duration}
                        </Badge>
                      )}
                      <Badge variant={isActive ? "success" : "neutral"} className="text-xs">
                        Step {index + 1}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className={cn(
                    'font-kabel mb-4',
                    isActive && variant !== 'gradient' ? 'text-muted-foreground' : isActive ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    {step.description}
                  </p>
                  
                  {selectedStep === index && step.substeps && (
                    <div className="space-y-2 mt-4">
                      <h4 className={cn(
                        'font-basement text-sm',
                        isActive ? 'text-white' : 'text-foreground'
                      )}>
                        Substeps:
                      </h4>
                      {step.substeps.map((substep, subIndex) => (
                        <div key={subIndex} className="flex items-start space-x-2">
                          <CheckCircle className={cn(
                            'w-4 h-4 mt-0.5',
                            substep.completed ? 'text-success-400' : 'text-muted-foreground'
                          )} />
                          <div>
                            <div className={cn(
                              'text-sm font-basement',
                              isActive ? 'text-white' : 'text-foreground'
                            )}>
                              {substep.title}
                            </div>
                            <div className={cn(
                              'text-xs font-kabel',
                              isActive ? 'text-white/70' : 'text-muted-foreground'
                            )}>
                              {substep.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderTimelineFlow = () => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted" />
      <div 
        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 transition-all duration-2000"
        style={{ height: `${((isPlaying ? animationStep : currentStep) / (steps.length - 1)) * 100}%` }}
      />
      
      <div className="space-y-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = isPlaying ? index <= animationStep : index <= currentStep;
          
          return (
            <div 
              key={step.id} 
              className={cn(
                'relative flex items-start space-x-6 transition-all duration-500',
                animated && 'animate-fade-in'
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline node */}
              <div className={cn(
                'relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500',
                isActive 
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500 border-white shadow-xl' 
                  : 'bg-background border-border'
              )}>
                <Icon className={cn(
                  'w-6 h-6 transition-colors',
                  isActive ? 'text-white' : 'text-muted-foreground'
                )} />
              </div>
              
              {/* Content */}
              <Card 
                variant={isActive ? 'gradient' : 'glass'} 
                hover={interactive}
                className="flex-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={cn(
                      'font-basement text-xl',
                      isActive ? 'text-white' : 'text-foreground'
                    )}>
                      {step.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {step.duration && (
                        <Badge variant={isActive ? "glass" : "neutral"}>
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      )}
                      <Badge variant={isActive ? "success" : "neutral"}>
                        Phase {index + 1}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className={cn(
                    'font-kabel leading-relaxed mb-4',
                    isActive ? 'text-white/90' : 'text-muted-foreground'
                  )}>
                    {step.description}
                  </p>
                  
                  {step.details && (
                    <p className={cn(
                      'text-sm font-kabel mb-4',
                      isActive ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      {step.details}
                    </p>
                  )}
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {step.deliverables && (
                      <div>
                        <h5 className={cn(
                          'font-basement text-sm mb-2',
                          isActive ? 'text-white' : 'text-foreground'
                        )}>
                          Deliverables
                        </h5>
                        <ul className="space-y-1">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className={cn(
                              'text-xs font-kabel flex items-start',
                              isActive ? 'text-white/80' : 'text-muted-foreground'
                            )}>
                              <CheckCircle className="w-3 h-3 text-success-400 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {step.tools && (
                      <div>
                        <h5 className={cn(
                          'font-basement text-sm mb-2',
                          isActive ? 'text-white' : 'text-foreground'
                        )}>
                          Tools
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {step.tools.map((tool, idx) => (
                            <Badge key={idx} variant={isActive ? "glass" : "neutral"} className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {step.team && (
                      <div>
                        <h5 className={cn(
                          'font-basement text-sm mb-2',
                          isActive ? 'text-white' : 'text-foreground'
                        )}>
                          Team
                        </h5>
                        <div className="space-y-1">
                          {step.team.map((member, idx) => (
                            <div key={idx} className={cn(
                              'text-xs font-kabel flex items-center',
                              isActive ? 'text-white/80' : 'text-muted-foreground'
                            )}>
                              <Users className="w-3 h-3 mr-2" />
                              {member}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCardsFlow = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = isPlaying ? index <= animationStep : index <= currentStep;
        
        return (
          <Card 
            key={step.id}
            variant={isActive ? 'gradient' : 'glass'} 
            hover={interactive}
            className={cn(
              'transition-all duration-500',
              animated && 'animate-fade-in'
            )}
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => interactive && setSelectedStep(selectedStep === index ? null : index)}
          >
            <div className="p-6 text-center">
              <div className={cn(
                'w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300',
                isActive 
                  ? 'bg-white/20 border border-white/30' 
                  : 'bg-primary-500/20 border border-primary-500/30'
              )}>
                <Icon className={cn(
                  'w-8 h-8',
                  isActive ? 'text-white' : 'text-primary-400'
                )} />
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-3">
                <h3 className={cn(
                  'font-basement text-lg',
                  isActive ? 'text-white' : 'text-foreground'
                )}>
                  {step.title}
                </h3>
                <Badge variant={isActive ? "glass" : "neutral"} className="text-xs">
                  {index + 1}
                </Badge>
              </div>
              
              <p className={cn(
                'text-sm font-kabel leading-relaxed',
                isActive ? 'text-white/90' : 'text-muted-foreground'
              )}>
                {step.description}
              </p>
              
              {step.duration && (
                <div className="mt-3">
                  <Badge variant={isActive ? "glass" : "neutral"} className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header */}
      <Card variant="gradient" padding="lg">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-basement text-white mb-2">{title}</CardTitle>
            {description && (
              <CardDescription className="font-kabel text-white/80">{description}</CardDescription>
            )}
          </div>
          
          {animated && (
            <div className="flex items-center space-x-3">
              <Button
                variant="glass"
                size="sm"
                onClick={isPlaying ? resetAnimation : playAnimation}
                className="flex items-center gap-2"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? 'Pause' : 'Play'} Animation
              </Button>
              
              <Button
                variant="glass"
                size="sm"
                onClick={resetAnimation}
                className="flex items-center gap-2"
              >
                <RotateCcw size={16} />
                Reset
              </Button>
              
              <Badge variant="glass">
                Step {(isPlaying ? animationStep : currentStep) + 1} of {steps.length}
              </Badge>
            </div>
          )}
        </div>
      </Card>

      {/* Flow Content */}
      <div>
        {variant === 'horizontal' && renderHorizontalFlow()}
        {variant === 'vertical' && renderVerticalFlow()}
        {variant === 'timeline' && renderVerticalFlow()}
        {variant === 'cards' && renderCardsFlow()}
      </div>
    </div>
  );
}