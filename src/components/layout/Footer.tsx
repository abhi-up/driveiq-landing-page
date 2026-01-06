import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary-foreground">DriveIQ</span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed">
              DriveIQ is a next-generation intelligent platform combining IoT-based Fuel & Asset Management, Fleet Telematics, and On-Demand Safety & Emergency Response.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/driveiqprivatelimited/" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/fuel-management" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  Fuel Management System
                </Link>
              </li>
              <li>
                <Link to="/fleet-management" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  Fleet Management System
                </Link>
              </li>
              <li>
                <Link to="/safety-response" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  Safety & Emergency Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#clients" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-navy-300">Sales & Enquiries</p>
                  <p className="text-primary-foreground">+91-9650391206</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-navy-300">24x7 Support</p>
                  <p className="text-primary-foreground">1800-1030-024</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-primary-foreground text-sm">support@driveiq.com</p>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-navy-300 text-sm">
                  5, Jangpura A, Mathura Road,<br />New Delhi – 110014
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} DriveIQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/" className="text-navy-400 hover:text-gold-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/" className="text-navy-400 hover:text-gold-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
