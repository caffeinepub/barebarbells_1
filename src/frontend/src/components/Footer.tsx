import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'barebarbells';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t-4 border-strength bg-gradient-to-br from-black via-zinc-900 to-black py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/assets/IMG_20260220_224309-2.jpg"
                  alt="Barebarbells"
                  className="h-16 w-auto"
                />
                <div className="absolute inset-0 -z-10 rounded-full bg-strength opacity-30 blur-xl" />
              </div>
            </div>
            <p className="max-w-md text-lg font-semibold text-white/80">
              Premium athletic apparel designed for those who push limits and break barriers.
            </p>
            
            {/* Social media links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-strength to-energy text-white shadow-strength transition-all hover:scale-110 hover:shadow-energy"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-strength to-energy text-white shadow-strength transition-all hover:scale-110 hover:shadow-energy"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-strength to-energy text-white shadow-strength transition-all hover:scale-110 hover:shadow-energy"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-6 font-display text-2xl font-black uppercase text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-semibold text-white/70 transition-all hover:translate-x-1 hover:text-strength"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-6 font-display text-2xl font-black uppercase text-white">
              Contact
            </h4>
            <ul className="space-y-3 font-semibold text-white/70">
              <li className="transition-colors hover:text-strength">Email: info@barebarbells.com</li>
              <li className="transition-colors hover:text-strength">Phone: (555) 123-4567</li>
              <li className="transition-colors hover:text-strength">Support: 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t-2 border-strength/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-sm font-semibold text-white/60">
              <span>© {currentYear} Barebarbells. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white/60">
              <span>Built with</span>
              <Heart className="h-4 w-4 fill-strength text-strength" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white transition-colors hover:text-strength"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
