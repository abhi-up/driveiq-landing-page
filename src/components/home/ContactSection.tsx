import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_3neci0j';
const EMAILJS_TEMPLATE_ID = 'template_egqm9zq';
const EMAILJS_PUBLIC_KEY = 'jYrQgy0twyzKrucJq';

// Recipient emails
const RECIPIENT_EMAILS = 'pallab@bristontech.com,support@driveiq.io,raj@bristontech.com';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: RECIPIENT_EMAILS,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not provided',
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Enquiry Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send your enquiry. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-navy-50">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Let's Discuss Your Needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-soft h-full">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Sales */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Sales & Corporate Enquiries
                  </h4>
                  <div className="space-y-3">
                    <a href="tel:+918920023493" className="flex items-center gap-3 text-foreground hover:text-gold-500 transition-colors">
                      <div className="icon-circle w-10 h-10">
                        <Phone className="w-5 h-5 text-gold-500" />
                      </div>
                      <span>+91-8920023493 </span>
                    </a>
                    <a href="tel:+918800018010" className="flex items-center gap-3 text-foreground hover:text-gold-500 transition-colors">
                      <div className="icon-circle w-10 h-10">
                        <Phone className="w-5 h-5 text-gold-500" />
                      </div>
                      <span>+91-8800018010</span>
                    </a>
                  </div>
                </div>

                {/* Support */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Customer Support & Emergency
                  </h4>
                  <a href="tel:18001030024" className="flex items-center gap-3 text-foreground hover:text-gold-500 transition-colors">
                    <div className="icon-circle w-10 h-10">
                      <Phone className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <span className="block font-semibold">1800-1030-024</span>
                      <span className="text-sm text-muted-foreground">24x7 Toll-Free</span>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Email
                  </h4>
                  <a href="mailto:support@driveiq.com" className="flex items-center gap-3 text-foreground hover:text-gold-500 transition-colors">
                    <div className="icon-circle w-10 h-10">
                      <Mail className="w-5 h-5 text-gold-500" />
                    </div>
                    <span>support@driveiq.io</span>
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Registered Office
                  </h4>
                  <div className="flex items-start gap-3">
                    <div className="icon-circle w-10 h-10 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold-500" />
                    </div>
                    <p className="text-foreground">
                      5, Jangpura A, Mathura Road,<br />
                      New Delhi – 110014, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    <span>24x7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    <span>Expert Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
