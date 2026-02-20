import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Zap, Shield, Sparkles, TrendingUp, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Shield,
    title: 'Premium Materials',
    description: 'High-quality fabrics that withstand your toughest workouts and maintain their shape.',
    size: 'large',
    image: '/assets/generated/tshirt-medium-logo.dim_800x800.png',
  },
  {
    icon: Dumbbell,
    title: 'Built to Last',
    description: 'Reinforced stitching and durable construction for long-lasting performance.',
    size: 'medium',
  },
  {
    icon: Zap,
    title: 'Maximum Mobility',
    description: 'Designed for unrestricted movement during intense training sessions.',
    size: 'medium',
  },
  {
    icon: Sparkles,
    title: 'Bold Designs',
    description: 'Stand out with athletic apparel that makes a powerful statement.',
    size: 'large',
    image: '/assets/generated/tshirt-large-logo-back.dim_800x800.png',
  },
  {
    icon: TrendingUp,
    title: 'Performance First',
    description: 'Engineered for athletes who demand the best from their gear.',
    size: 'medium',
    image: '/assets/generated/tshirt-small-logo.dim_800x800.png',
  },
  {
    icon: Award,
    title: 'Champion Quality',
    description: 'Trusted by athletes who refuse to settle for anything less than excellence.',
    size: 'medium',
  },
];

export default function FeaturesBentoGrid() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="bg-gradient-to-b from-background to-accent py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text font-display text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            Why Choose Barebarbells
          </h2>
          <p className="mt-6 text-xl font-semibold text-muted-foreground sm:text-2xl">
            Premium quality meets uncompromising performance
          </p>
        </div>

        <div
          ref={ref}
          className="grid auto-rows-fr gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === 'large';
            
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-4 border-transparent bg-gradient-to-br from-card to-accent transition-all duration-500 hover:scale-105 hover:border-strength hover:shadow-strength ${
                  isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
                } ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {feature.image && (
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 transition-opacity group-hover:opacity-20">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-strength to-energy shadow-strength transition-all group-hover:scale-110 group-hover:shadow-energy">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="font-display text-3xl font-black uppercase leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
