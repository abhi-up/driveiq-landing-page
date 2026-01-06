import { Cpu, BarChart3, Building2, Shield, Smartphone, Cloud } from 'lucide-react';

const highlights = [
  {
    icon: Cpu,
    title: 'IoT-Powered Fuel & Asset Intelligence',
    description: 'Advanced sensors and real-time data processing for complete visibility into your fuel consumption and asset utilization.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Fleet & Route Analytics',
    description: 'AI-driven insights to optimize routes, reduce fuel costs, and improve overall fleet efficiency.',
  },
  {
    icon: Building2,
    title: 'Infrastructure & Site Digitization',
    description: 'Transform your sites with digital monitoring, automated reporting, and predictive maintenance.',
  },
  {
    icon: Shield,
    title: '24x7 Safety, Emergency & Roadside Assistance',
    description: 'Round-the-clock personal and on-road safety services with immediate response capabilities.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App + Web Dashboard',
    description: 'Access your data anywhere with our intuitive mobile apps and comprehensive web dashboard.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Based Platform',
    description: 'Secure, scalable cloud infrastructure ensuring your data is always accessible and protected.',
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
            Why Choose DriveIQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            One Platform. Total Control. Complete Safety.
          </h2>
          <p className="text-lg text-muted-foreground">
            DriveIQ brings together real-time fuel monitoring, fleet optimization, infrastructure asset intelligence, and 24x7 personal & on-road safety services.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-elevated p-8 group"
            >
              <div className="icon-circle mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
