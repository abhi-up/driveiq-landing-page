import abpLogo from '@/assets/clients/abp.png';
import apcoLogo from '@/assets/clients/apco.png';
import ashokaLogo from '@/assets/clients/ashoka.png';
import bestroadwaysLogo from '@/assets/clients/bestroadways.png';
import cdsLogo from '@/assets/clients/cds.png';
import dmrcLogo from '@/assets/clients/dmrc.png';
import gawarLogo from '@/assets/clients/gawar.png';
import heroLogo from '@/assets/clients/hero.png';
import iitLogo from '@/assets/clients/iit.png';
import intelenetLogo from '@/assets/clients/intelenet.png';
import jindalLogo from '@/assets/clients/jindal.jpg';
import medicalLogo from '@/assets/clients/medical.png';
import niesbudLogo from '@/assets/clients/niesbud.png';
import poscoLogo from '@/assets/clients/posco.png';
import rise11Logo from '@/assets/clients/rise11.png';
import sanyLogo from '@/assets/clients/sany.png';
import shahiLogo from '@/assets/clients/shahi.png';
import shreeramLogo from '@/assets/clients/shreeram.png';
import skgcLogo from '@/assets/clients/skgc.png';
import spLogo from '@/assets/clients/sp.png';
import svampowerLogo from '@/assets/clients/svampower.png';
import tcsLogo from '@/assets/clients/tcs.png';

const clientLogos = [
  abpLogo,
  apcoLogo,
  ashokaLogo,
  bestroadwaysLogo,
  cdsLogo,
  dmrcLogo,
  gawarLogo,
  heroLogo,
  iitLogo,
  intelenetLogo,
  jindalLogo,
  medicalLogo,
  niesbudLogo,
  poscoLogo,
  rise11Logo,
  sanyLogo,
  shahiLogo,
  shreeramLogo,
  skgcLogo,
  spLogo,
  svampowerLogo,
  tcsLogo,
];

const ClientsSection = () => {
  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Over 100 companies across India trust DriveIQ for their fleet, fuel, and safety needs.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="aspect-[3/2] flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-w-full max-h-full object-contain w-full h-full p-2"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join the growing list of companies transforming their operations with DriveIQ
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
