import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Fuel, Truck, Shield, Check } from 'lucide-react';

const solutions = [
  {
    icon: Fuel,
    title: 'Fuel Management Systems',
    description: 'Complete visibility and control over your fuel assets with IoT-powered monitoring.',
    href: '/fuel-management',
    features: [
      'Real-time fuel level & consumption tracking',
      'Fuel theft detection & alerts',
      'Reconciliation & audit-ready reports',
      'Stationary & mobile asset support',
      'Industries: Construction, Mining, Power Backup, Logistics',
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Truck,
    title: 'Fleet Management Systems',
    description: 'Next-generation fleet telematics for maximum efficiency and control.',
    href: '/fleet-management',
    features: [
      'Live GPS tracking & trip history',
      'Route optimization & traffic intelligence',
      'Driver behavior analytics',
      'Rich reports & dashboards',
      'Smart Geo-Fencing Alerts',
      'Issue Management Reporting & Dashboard',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Shield,
    title: 'Safety & Emergency Response',
    description: 'Comprehensive personal and on-road safety solutions available 24x7.',
    href: '/safety-response',
    features: [
      'Personal Safety',
      'Medical Emergencies',
      'Home Safety',
      'On-Road Assistance',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
];

const SolutionsSection = () => {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Products & Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IoT and safety solutions tailored for enterprises across industries.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
              
              <div className="p-8">
                <div className="icon-circle mb-6">
                  <solution.icon className="w-7 h-7 text-gold-500" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline-gold" className="w-full group" asChild>
                  <Link to={solution.href}>
                    Explore Solution
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
