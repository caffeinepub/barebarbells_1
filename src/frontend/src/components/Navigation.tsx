import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { toggleCart, totalItems } = useCart();

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b-4 border-strength bg-background/95 shadow-strength backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex items-center gap-3 transition-all hover:scale-105"
        >
          <div className="relative">
            <img
              src="/assets/IMG_20260220_224309-2.jpg"
              alt="Barebarbells"
              className="h-10 w-auto transition-transform group-hover:rotate-3"
            />
            <div className="absolute inset-0 -z-10 rounded-full bg-strength opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              variant={activeSection === link.id ? 'default' : 'ghost'}
              className={`font-bold uppercase tracking-wide transition-all ${
                activeSection === link.id 
                  ? 'bg-gradient-to-r from-strength to-energy shadow-strength' 
                  : 'hover:text-strength'
              }`}
            >
              {link.label}
            </Button>
          ))}
          
          {/* Cart Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleCart}
            className="relative ml-2 border-2 border-strength text-strength transition-all hover:scale-110 hover:bg-strength hover:text-white hover:shadow-strength"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-strength to-energy font-bold text-white text-xs shadow-lg">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Menu and Cart Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleCart}
            className="relative border-2 border-strength text-strength hover:bg-strength hover:text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-strength to-energy font-bold text-white text-xs">
                {totalItems}
              </span>
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:text-strength"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="animate-slide-in border-t-2 border-strength bg-background md:hidden">
          <div className="container flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                variant={activeSection === link.id ? 'default' : 'ghost'}
                className={`w-full justify-start font-bold uppercase tracking-wide ${
                  activeSection === link.id 
                    ? 'bg-gradient-to-r from-strength to-energy' 
                    : 'hover:text-strength'
                }`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
