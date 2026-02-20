import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, inView } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black transition-all duration-1000 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Dynamic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-strength/30 via-transparent to-energy/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(var(--strength)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(var(--energy)/0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="container relative z-10 grid min-h-screen items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="space-y-8">
          {/* Logo with glow effect */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/assets/IMG_20260220_224309-2.jpg"
                alt="Barebarbells"
                className="h-32 w-auto sm:h-40 lg:h-48"
              />
              <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-strength opacity-40 blur-2xl" />
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-xl font-semibold leading-relaxed text-white/90 sm:text-2xl">
            Premium athletic apparel designed for those who push limits and break barriers. 
            Built for strength, crafted for performance, styled for champions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="group h-16 gap-2 bg-gradient-to-r from-strength to-energy px-10 text-xl font-black uppercase shadow-strength transition-all hover:scale-105 hover:shadow-energy"
            >
              Shop Now
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('features')}
              className="h-16 border-4 border-white px-10 text-xl font-black uppercase text-white transition-all hover:scale-105 hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Product showcase */}
        <div className="relative hidden lg:block">
          <div className="relative">
            {/* Main product image */}
            <div className="relative z-10">
              <img
                src="/assets/generated/tshirt-showcase.dim_1200x800.png"
                alt="Barebarbells T-Shirt Collection"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-strength to-energy opacity-20 blur-3xl" />
            </div>
            
            {/* Floating product cards */}
            <div className="absolute -left-12 top-1/4 z-20 animate-pulse">
              <img
                src="/assets/generated/tshirt-small-logo.dim_800x800.png"
                alt="Small Logo Tee"
                className="h-32 w-32 rounded-2xl border-4 border-white shadow-2xl"
              />
            </div>
            
            <div className="absolute -right-8 bottom-1/4 z-20 animate-pulse delay-300">
              <img
                src="/assets/generated/tshirt-medium-logo.dim_800x800.png"
                alt="Medium Logo Tee"
                className="h-32 w-32 rounded-2xl border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-14 w-10 rounded-full border-4 border-strength shadow-strength">
          <div className="mx-auto mt-2 h-3 w-3 animate-pulse rounded-full bg-gradient-to-b from-strength to-energy" />
        </div>
      </div>
    </div>
  );
}
