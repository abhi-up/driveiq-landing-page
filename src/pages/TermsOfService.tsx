import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileText, Scale, Shield, AlertTriangle, CreditCard, Lock, Users, Gavel, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';

const TermsOfService = () => {
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
                <Scale className="w-4 h-4 text-gold-400" />
                Legal Agreement
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Terms of
                <span className="text-gradient-gold block">Service</span>
              </h1>
              
              <p className="text-lg text-navy-200 leading-relaxed">
                Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-navy-300 mt-4">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
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
                  Welcome to DriveIQ Private Limited ("DriveIQ," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, software, and services (collectively, the "Services") provided by DriveIQ.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our Services.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold-500" />
                  2. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and "you" will refer to both you individually and the organization.
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-gold-500" />
                  3. Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DriveIQ provides IoT-based solutions and services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Fuel Management Systems for monitoring and tracking fuel consumption</li>
                  <li>Fleet Management Solutions for vehicle tracking and optimization</li>
                  <li>Safety & Emergency Response Services through mobile applications</li>
                  <li>Data analytics, reporting, and dashboard services</li>
                  <li>Hardware installation, maintenance, and support services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our Services at any time, with or without notice, and without liability to you.
                </p>
              </div>

              {/* User Accounts */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Users className="w-8 h-8 text-gold-500" />
                  4. User Accounts
                </h2>
                
                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">4.1 Account Registration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To access certain features of our Services, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">4.2 Account Security</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to protect your account information.
                </p>
              </div>

              {/* Use of Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold-500" />
                  5. Use of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Interfere with or disrupt the Services or servers connected to the Services</li>
                  <li>Attempt to gain unauthorized access to any portion of the Services</li>
                  <li>Use the Services to transmit any malicious code, viruses, or harmful data</li>
                  <li>Reverse engineer, decompile, or disassemble any part of our Services</li>
                  <li>Remove or alter any proprietary notices or labels on our Services</li>
                  <li>Use automated systems to access the Services without our prior written consent</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-gold-500" />
                  6. Payment Terms
                </h2>
                
                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">6.1 Fees and Billing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Certain Services may require payment of fees. You agree to pay all fees as specified in your service agreement or subscription plan. Fees are non-refundable unless otherwise stated in writing.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">6.2 Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We accept various payment methods as specified during the checkout process. By providing payment information, you represent and warrant that you are authorized to use the payment method provided.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-3 mt-6">6.3 Late Payments</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If payment is not received by the due date, we may suspend or terminate your access to the Services. You are responsible for any fees incurred due to late payment, including interest and collection costs.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Lock className="w-8 h-8 text-gold-500" />
                  7. Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, software, and the compilation thereof, are the exclusive property of DriveIQ or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your internal business purposes, subject to these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.
                </p>
              </div>

              {/* Prohibited Uses */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-gold-500" />
                  8. Prohibited Uses
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not use our Services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate DriveIQ, a DriveIQ employee, another user, or any other person or entity</li>
                  <li>In any manner that could disable, overburden, damage, or impair the Services</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold-500" />
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DRIVEIQ AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Your use or inability to use the Services</li>
                  <li>Any conduct or content of third parties on the Services</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any interruption or cessation of transmission to or from the Services</li>
                  <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  IN NO EVENT SHALL DRIVEIQ'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID TO DRIVEIQ IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY.
                </p>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold-500" />
                  10. Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to defend, indemnify, and hold harmless DriveIQ and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right</li>
                  <li>Any claim that your use of the Services caused damage to a third party</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-gold-500" />
                  11. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon termination, your right to use the Services will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may terminate your account at any time by contacting us at the contact information provided below.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Gavel className="w-8 h-8 text-gold-500" />
                  12. Governing Law and Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be settled through arbitration in accordance with the Arbitration and Conciliation Act, 2015. The arbitration shall be conducted in New Delhi, India, in the English language.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notwithstanding the foregoing, we may seek injunctive or other equitable relief to protect our intellectual property rights in any court of competent jurisdiction.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">14. Severability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements.
                </p>
              </div>

              {/* Contact Us */}
              <div className="mb-12 bg-navy-50 rounded-2xl p-8 border border-border">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Mail className="w-8 h-8 text-gold-500" />
                  15. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;

