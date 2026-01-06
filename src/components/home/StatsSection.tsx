import { Calendar, Users, Fuel, Cpu, MapPin, AlertCircle, UserCheck, Footprints } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '2015', label: 'Founded' },
  { icon: Users, value: '100+', label: 'Clients Served' },
  { icon: Fuel, value: '5,000+', label: 'KL Fuel Managed' },
  { icon: Cpu, value: '3,000+', label: 'Units Installed' },
  { icon: MapPin, value: 'PAN-India', label: 'Safety Coverage' },
  { icon: AlertCircle, value: '30,000+', label: 'Total Incidents' },
  { icon: UserCheck, value: '174,960', label: 'Subscribers' },
  { icon: Footprints, value: '22,550', label: 'Feet on Ground' },
];

const StatsSection = () => {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-300 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-navy-700 text-gold-400 text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Driving Results That Matter
          </h2>
          <p className="text-lg text-navy-200">
            Numbers that reflect our commitment to excellence and customer success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-600/30 hover:border-gold-400/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-navy-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
