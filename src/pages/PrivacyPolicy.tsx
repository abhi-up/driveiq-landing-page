import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, FileText, Lock, Eye, Database, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = 'January 2024';

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
                <Shield className="w-4 h-4 text-gold-400" />
                Privacy & Data Protection
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Privacy
                <span className="text-gradient-gold block">Policy</span>
              </h1>
              
              <p className="text-lg text-navy-200 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-navy-300 mt-4">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-gold-500" />
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DriveIQ Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Services").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Database className="w-8 h-8 text-gold-500" />
                  2. Information We Collect
                </h2>
                
                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Name, email address, phone number, and postal address</li>
                  <li>Company name and business information</li>
                  <li>Payment and billing information</li>
                  <li>Account credentials and authentication information</li>
                  <li>Communications and correspondence with us</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">2.2 Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We automatically collect certain information when you access or use our Services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage patterns and interaction data</li>
                  <li>Location data (with your permission)</li>
                  <li>Log files and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">2.3 IoT and Fleet Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For our fuel management, fleet management, and safety services, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Vehicle and asset location data</li>
                  <li>Fuel consumption and level data</li>
                  <li>Vehicle performance metrics</li>
                  <li>Driver behavior and safety data</li>
                  <li>Emergency response and incident data</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Eye className="w-8 h-8 text-gold-500" />
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>To provide, maintain, and improve our Services</li>
                  <li>To process transactions and manage your account</li>
                  <li>To send you technical notices, updates, and support messages</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To monitor and analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To personalize your experience and deliver relevant content</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                </ul>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Lock className="w-8 h-8 text-gold-500" />
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                
                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">4.1 Service Providers</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share information with third-party service providers who perform services on our behalf, such as cloud hosting, payment processing, and analytics. These providers are contractually obligated to protect your information.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">4.2 Legal Requirements</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of our users or others.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">4.3 Business Transfers</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold-500" />
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and vulnerability testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure cloud infrastructure and data centers</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-gold-500" />
                  6. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our Services and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">10. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our Services, you consent to the transfer of your information to our facilities and those third parties with whom we share it as described in this policy.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact Us */}
              <div className="mb-12 bg-navy-50 rounded-2xl p-8 border border-border">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Mail className="w-8 h-8 text-gold-500" />
                  12. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <a href="mailto:support@driveiq.io" className="text-gold-500 hover:text-gold-600 transition-colors">
                        support@driveiq.io
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <p className="text-muted-foreground">1800-1030-024 (24x7 Toll-Free)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Address</p>
                      <p className="text-muted-foreground">
                        5, Jangpura A, Mathura Road,<br />
                        New Delhi – 110014, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

