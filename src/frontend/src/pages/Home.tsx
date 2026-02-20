import Hero from '../components/Hero';
import FeaturesBentoGrid from '../components/FeaturesBentoGrid';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PricingTable from '../components/PricingTable';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="w-full">
      <section id="hero">
        <Hero />
      </section>

      <section id="features" className="scroll-mt-20">
        <FeaturesBentoGrid />
      </section>

      <section id="testimonials" className="scroll-mt-20">
        <TestimonialsCarousel />
      </section>

      <section id="pricing" className="scroll-mt-20">
        <PricingTable />
      </section>

      <section id="faq" className="scroll-mt-20">
        <FAQAccordion />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>
    </div>
  );
}
