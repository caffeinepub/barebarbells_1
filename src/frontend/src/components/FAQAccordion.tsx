import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What sizes do you offer?',
    answer: 'We offer sizes from XS to 3XL. Our shirts are designed with an athletic fit that provides room for movement while maintaining a sharp silhouette. Check our size guide for detailed measurements.',
  },
  {
    question: 'What materials are your shirts made from?',
    answer: 'Our t-shirts are made from premium cotton blends (60% cotton, 40% polyester) that provide durability, breathability, and moisture-wicking properties. The fabric is pre-shrunk and designed to maintain its shape and color through countless washes.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days within the continental US. We offer free shipping on all orders over $50. Priority processing is included with our 3-pack and 5-pack bundles, reducing delivery time to 3-5 business days.',
  },
  {
    question: 'Can I mix and match sizes in bundles?',
    answer: 'Absolutely! When ordering our 3-pack or 5-pack bundles, you can select different sizes for each shirt. Just specify your size preferences in the order notes or contact form.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, you can return unworn, unwashed items with tags attached for a full refund or exchange. Return shipping is free for defective items.',
  },
  {
    question: 'Do you offer custom orders or wholesale pricing?',
    answer: 'Yes! We work with gyms, athletic teams, and fitness organizations for custom orders and wholesale pricing. Use our contact form and select "Custom Orders" or "Wholesale Requests" to get started.',
  },
  {
    question: 'How should I care for my Barebarbells shirts?',
    answer: 'Machine wash cold with like colors, tumble dry low. Avoid bleach and fabric softeners to maintain the fabric\'s performance properties. Our shirts are designed to withstand frequent washing while maintaining their quality and appearance.',
  },
  {
    question: 'Are your shirts suitable for intense workouts?',
    answer: 'Absolutely! Our shirts are specifically designed for athletes and intense training sessions. The fabric blend provides excellent moisture-wicking, durability, and freedom of movement. They\'re perfect for weightlifting, CrossFit, running, and any high-intensity activity.',
  },
];

export default function FAQAccordion() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="border-t-4 border-strength bg-gradient-to-b from-accent to-background py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-strength to-energy shadow-strength">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="gradient-text font-display text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl font-semibold text-muted-foreground sm:text-2xl">
            Everything you need to know
          </p>
        </div>

        <div
          ref={ref}
          className={`mx-auto max-w-4xl transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border-4 border-transparent bg-gradient-to-br from-card to-accent px-8 transition-all hover:border-strength hover:shadow-strength"
              >
                <AccordionTrigger className="py-6 text-left font-display text-2xl font-black uppercase leading-tight hover:text-strength hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 text-lg font-semibold leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
