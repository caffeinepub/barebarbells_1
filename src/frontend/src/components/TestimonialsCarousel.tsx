import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Marcus Johnson',
    review: 'Best athletic wear I\'ve ever owned. The quality is unmatched and the fit is perfect for heavy lifting sessions.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    review: 'These shirts actually hold up through intense CrossFit workouts. Finally found a brand that understands athletes.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    review: 'The material is incredibly durable and comfortable. I\'ve been wearing Barebarbells exclusively for 6 months now.',
    rating: 5,
  },
  {
    name: 'Emily Thompson',
    review: 'Love the bold designs and the quality is outstanding. These shirts make me feel confident in and out of the gym.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    review: 'Worth every penny. The fit is perfect, the material breathes well, and they still look brand new after months of use.',
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="border-t-4 border-strength bg-gradient-to-br from-black via-zinc-900 to-black py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text font-display text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            What Athletes Say
          </h2>
          <p className="mt-6 text-xl font-semibold text-white/70 sm:text-2xl">
            Real feedback from real champions
          </p>
        </div>

        <div
          ref={ref}
          className={`relative mx-auto max-w-5xl transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Card className="relative overflow-hidden border-4 border-strength bg-gradient-to-br from-card to-accent shadow-strength">
            <div className="absolute left-8 top-8 opacity-10">
              <Quote className="h-24 w-24 text-strength" />
            </div>
            
            <CardContent className="relative p-12 sm:p-16">
              <div className="mb-8 flex justify-center gap-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-strength text-strength" />
                ))}
              </div>
              
              <blockquote className="mb-8 text-center text-2xl font-semibold leading-relaxed sm:text-3xl lg:text-4xl">
                "{testimonials[currentIndex].review}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-strength to-energy" />
                <p className="gradient-text font-display text-2xl font-black uppercase">
                  {testimonials[currentIndex].name}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-energy to-strength" />
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="h-14 w-14 border-4 border-strength text-strength transition-all hover:scale-110 hover:bg-strength hover:text-white hover:shadow-strength"
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-4 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-strength to-energy shadow-strength'
                      : 'w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-14 w-14 border-4 border-strength text-strength transition-all hover:scale-110 hover:bg-strength hover:text-white hover:shadow-strength"
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
