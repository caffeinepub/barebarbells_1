import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, inView } = useScrollAnimation();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          inquiryType: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-gradient-to-b from-background to-accent py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text font-display text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-xl font-semibold text-muted-foreground sm:text-2xl">
            Questions? Custom orders? We're here to help
          </p>
        </div>

        <div
          ref={ref}
          className={`mx-auto max-w-3xl transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {isSubmitted ? (
            <div className="rounded-3xl border-4 border-strength bg-gradient-to-br from-card to-accent p-16 text-center shadow-strength">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-strength to-energy shadow-strength">
                  <CheckCircle2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="gradient-text mb-4 font-display text-4xl font-black uppercase">
                Message Sent!
              </h3>
              <p className="text-xl font-semibold text-muted-foreground">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl border-4 border-transparent bg-gradient-to-br from-card to-accent p-8 shadow-lg transition-all hover:border-strength hover:shadow-strength sm:p-12">
              {/* Name field */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-lg font-bold uppercase">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`h-14 border-4 text-lg font-semibold transition-all focus:border-strength ${
                    errors.name ? 'border-destructive' : ''
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-base font-bold text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-lg font-bold uppercase">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`h-14 border-4 text-lg font-semibold transition-all focus:border-strength ${
                    errors.email ? 'border-destructive' : ''
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-base font-bold text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Inquiry type field */}
              <div className="space-y-3">
                <Label htmlFor="inquiryType" className="text-lg font-bold uppercase">
                  Inquiry Type *
                </Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => handleChange('inquiryType', value)}
                >
                  <SelectTrigger
                    id="inquiryType"
                    className={`h-14 border-4 text-lg font-semibold transition-all focus:border-strength ${
                      errors.inquiryType ? 'border-destructive' : ''
                    }`}
                  >
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general" className="text-lg font-semibold">
                      General Inquiry
                    </SelectItem>
                    <SelectItem value="custom" className="text-lg font-semibold">
                      Custom Orders
                    </SelectItem>
                    <SelectItem value="wholesale" className="text-lg font-semibold">
                      Wholesale Requests
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.inquiryType && (
                  <p className="text-base font-bold text-destructive">
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-3">
                <Label htmlFor="message" className="text-lg font-bold uppercase">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`min-h-[180px] border-4 text-lg font-semibold transition-all focus:border-strength ${
                    errors.message ? 'border-destructive' : ''
                  }`}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && (
                  <p className="text-base font-bold text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                className="h-16 w-full bg-gradient-to-r from-strength to-energy text-xl font-black uppercase shadow-strength transition-all hover:scale-105 hover:shadow-energy sm:w-auto sm:px-16"
              >
                <Send className="mr-2 h-6 w-6" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
