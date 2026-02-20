import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check, Star, ShoppingCart, Zap } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCart } from '../contexts/CartContext';

const pricingTiers = [
  {
    id: 'single-tee',
    name: 'Single Tee',
    quantity: 1,
    price: 35,
    savings: 0,
    image: '/assets/generated/tshirt-small-logo.dim_800x800.png',
    features: [
      'Premium quality t-shirt',
      'Barebarbells branding',
      'Durable construction',
      'Free shipping over $50',
    ],
  },
  {
    id: '3-pack-bundle',
    name: '3-Pack Bundle',
    quantity: 3,
    price: 90,
    originalPrice: 105,
    savings: 15,
    recommended: true,
    image: '/assets/generated/tshirt-medium-logo.dim_800x800.png',
    features: [
      'Three premium t-shirts',
      'Mix & match sizes',
      'Save $15 instantly',
      'Free shipping included',
      'Priority processing',
    ],
  },
  {
    id: '5-pack-bundle',
    name: '5-Pack Bundle',
    quantity: 5,
    price: 140,
    originalPrice: 175,
    savings: 35,
    image: '/assets/generated/tshirt-showcase.dim_1200x800.png',
    features: [
      'Five premium t-shirts',
      'Mix & match sizes',
      'Save $35 instantly',
      'Free shipping included',
      'Priority processing',
      'Exclusive bundle gift',
    ],
  },
];

export default function PricingTable() {
  const [showAnnual, setShowAnnual] = useState(false);
  const { ref, inView } = useScrollAnimation();
  const { addItem, toggleCart } = useCart();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (tier: typeof pricingTiers[0]) => {
    addItem({
      id: tier.id,
      name: tier.name,
      price: tier.price,
      quantity: 1,
    });
    toggleCart();
  };

  return (
    <div className="bg-gradient-to-b from-accent to-background py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text font-display text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            Choose Your Bundle
          </h2>
          <p className="mt-6 text-xl font-semibold text-muted-foreground sm:text-2xl">
            Premium quality at unbeatable prices
          </p>

          {/* Toggle for pricing view */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Label htmlFor="pricing-toggle" className="text-lg font-bold">
              One-Time Purchase
            </Label>
            <Switch
              id="pricing-toggle"
              checked={showAnnual}
              onCheckedChange={setShowAnnual}
            />
            <Label htmlFor="pricing-toggle" className="text-lg font-bold">
              Subscription (Coming Soon)
            </Label>
          </div>
        </div>

        <div
          ref={ref}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-4 transition-all duration-500 hover:scale-105 ${
                tier.recommended
                  ? 'border-strength shadow-strength lg:scale-105'
                  : 'border-transparent hover:border-strength hover:shadow-strength'
              } ${
                inView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {tier.recommended && (
                <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-strength to-energy px-6 py-3 shadow-strength">
                    <Star className="h-5 w-5 fill-white text-white" />
                    <span className="font-display text-base font-black uppercase text-white">
                      Best Value
                    </span>
                    <Zap className="h-5 w-5 fill-white text-white" />
                  </div>
                </div>
              )}

              {/* Product image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent to-muted">
                <img
                  src={tier.image}
                  alt={tier.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <CardHeader className="text-center">
                <CardTitle className="font-display text-4xl font-black uppercase">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-lg font-semibold">
                  {tier.quantity} {tier.quantity === 1 ? 'shirt' : 'shirts'}
                </CardDescription>
                
                <div className="mt-6">
                  {tier.originalPrice && (
                    <p className="text-xl font-bold text-muted-foreground line-through">
                      ${tier.originalPrice}
                    </p>
                  )}
                  <p className="gradient-text font-display text-6xl font-black">
                    ${tier.price}
                  </p>
                  {tier.savings > 0 && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-strength to-energy px-4 py-2">
                      <Zap className="h-4 w-4 fill-white text-white" />
                      <p className="font-bold text-white">
                        Save ${tier.savings}!
                      </p>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-6 w-6 flex-shrink-0 text-strength" />
                      <span className="text-base font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    onClick={() => handleAddToCart(tier)}
                    className={`w-full text-lg font-black uppercase shadow-strength transition-all hover:scale-105 hover:shadow-energy ${
                      tier.recommended 
                        ? 'bg-gradient-to-r from-strength to-energy' 
                        : ''
                    }`}
                    variant={tier.recommended ? 'default' : 'outline'}
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    Add to Cart
                  </Button>
                  
                  <Button
                    onClick={scrollToContact}
                    className="w-full text-lg font-black uppercase"
                    variant="ghost"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-16 text-center text-base font-semibold text-muted-foreground">
          All prices in USD. Free shipping on orders over $50.
        </p>
      </div>
    </div>
  );
}
