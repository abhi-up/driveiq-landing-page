import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Truck, Fuel } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-300 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="container-section relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy-500/30">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-sm font-bold text-gradient-gold">Next-Generation IoT Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              DriveIQ
              <span className="block text-gradient-gold mt-2 pb-4">
                Intelligent IoT, Fleet & Safety Solutions
              </span>
            </h1>

            <p className="text-lg text-primary leading-relaxed max-w-xl">
              DriveIQ is a next-gen intelligent platform that combines IoT-based Fuel & Asset Management, Fleet Telematics, and On-Demand Safety & Emergency Response into one unified ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">
               <a href="#contact">

              <Button variant="gold" size="xl" className="group">
                Request Demo Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
               </a>
              
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-navy-600/50">
              <div>
                <p className="text-3xl font-bold text-gold-400">100+</p>
                <p className="text-sm text-primary">Clients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-400">3,000+</p>
                <p className="text-sm primary">Units Installed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-400">24x7</p>
                <p className="text-sm primary">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Floating Card 1 */}
              <div className="card-elevated p-6 animate-float" style={{ animationDelay: '0s' }}>
                <div className="icon-circle mb-4">
                  <Fuel className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Fuel Intelligence</h3>
                <p className="text-sm text-muted-foreground">Real-time monitoring & theft detection</p>
              </div>

              {/* Floating Card 2 */}
              <div className="card-elevated p-6 mt-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="icon-circle mb-4">
                  <Truck className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Fleet Analytics</h3>
                <p className="text-sm text-muted-foreground">GPS tracking & route optimization</p>
              </div>

              {/* Floating Card 3 */}
              <div className="card-elevated p-6 animate-float" style={{ animationDelay: '4s' }}>
                <div className="icon-circle mb-4">
                  <Shield className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-semibold text-primary mb-2">24x7 Safety</h3>
                <p className="text-sm text-muted-foreground">Emergency response on demand</p>
              </div>

              {/* Stats Card */}
              <div className="bg-gold-400 rounded-xl p-6 mt-12">
                <p className="text-4xl font-bold text-navy-900">5,000+</p>
                <p className="text-sm font-medium text-navy-700">KL Fuel Managed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-navy-400 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
