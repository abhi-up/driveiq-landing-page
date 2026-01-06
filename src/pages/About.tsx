import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Target,
  Eye,
  Calendar,
  Users,
  Fuel,
  Cpu,
  MapPin,
  Building2,
  Truck,
  HardHat,
  Zap,
  Shield,
  CheckCircle,
  TrendingUp,
  Clock,
  BarChart3,
} from 'lucide-react';
import { useEffect } from 'react';

const stats = [
  { icon: Users, value: '100+', label: 'Clients Served' },
  { icon: Fuel, value: '5,000+', label: 'KL Fuel Managed' },
  { icon: Cpu, value: '3,000+', label: 'Units Installed' },
  { icon: MapPin, value: 'PAN-India', label: 'Coverage' },
];

const whyDriveIQ = [
  {
    icon: Cpu,
    title: 'Unified Platform',
    description: 'One platform for fuel, fleet, and safety—eliminating the need for multiple vendors.',
  },
  {
    icon: TrendingUp,
    title: 'Proven IoT Expertise',
    description: 'Years of experience deploying IoT solutions across diverse industries and environments.',
  },
  {
    icon: Clock,
    title: '24x7 Response Ecosystem',
    description: 'Round-the-clock support with on-ground responders across the nation.',
  },
  {
    icon: BarChart3,
    title: 'Scalable Architecture',
    description: 'From 10 assets to 10,000—our platform grows with your business.',
  },
  {
    icon: Shield,
    title: 'Data-Driven ROI',
    description: 'Transparent metrics showing exactly how much you save with our solutions.',
  },
];

const industries = [
  { icon: HardHat, name: 'Construction & Infrastructure', description: 'Fuel monitoring for heavy equipment and site generators' },
  { icon: Building2, name: 'Mining & Heavy Equipment', description: 'Asset tracking and fuel management in remote locations' },
  { icon: Truck, name: 'Logistics & Transportation', description: 'Fleet optimization and route intelligence' },
  { icon: Zap, name: 'Power Backup & Telecom', description: 'DG set monitoring and fuel management' },
  { icon: Shield, name: 'Corporate & Individual Safety', description: 'Personal safety solutions for employees and families' },
];

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
          </div>
          
          <div className="container-section relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-700/50 border border-navy-500/30 text-navy-200 text-sm mb-6">
                <Calendar className="w-4 h-4 text-gold-400" />
                Established 2015
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About
                <span className="text-gradient-gold block">DriveIQ</span>
              </h1>
              
              <p className="text-lg text-navy-200 leading-relaxed">
                We are a technology company on a mission to make operations smarter, safer, and more efficient through intelligent IoT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-elevated p-8">
                <div className="icon-circle mb-6">
                  <Target className="w-7 h-7 text-gold-500" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with intelligent IoT solutions that provide complete visibility, control, and optimization of their assets—while ensuring the safety and security of people.
                </p>
              </div>
              
              <div className="card-elevated p-8">
                <div className="icon-circle mb-6">
                  <Eye className="w-7 h-7 text-gold-500" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's leading platform for asset intelligence and safety services—trusted by enterprises for operational excellence and by individuals for personal security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 gradient-navy">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Our Impact in Numbers
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-navy-700 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-gold-400" />
                  </div>
                  <p className="text-4xl font-bold text-gold-400 mb-2">{stat.value}</p>
                  <p className="text-sm text-navy-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why DriveIQ */}
        <section className="section-padding bg-navy-50">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose DriveIQ?
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that truly make a difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyDriveIQ.map((item, index) => (
                <div key={index} className="card-elevated p-8">
                  <div className="icon-circle mb-6">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Our solutions are trusted across diverse sectors, from heavy industry to personal safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-gold-300 transition-colors">
                  <div className="icon-circle w-14 h-14 flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding gradient-navy">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Innovation', description: 'Constantly pushing boundaries with new technologies' },
                { title: 'Reliability', description: 'Systems that work 24x7, without fail' },
                { title: 'Transparency', description: 'Clear data, honest metrics, no hidden costs' },
                { title: 'Customer First', description: 'Your success is our success' },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-navy-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-navy-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-navy-200 mb-8 max-w-2xl mx-auto">
                Join 100+ companies who trust DriveIQ for their fleet, fuel, and safety needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="/#contact">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline-light" size="xl">
                  Download Company Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
