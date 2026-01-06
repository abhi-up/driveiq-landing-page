import { useEffect, useState } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Fuel,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Radio,
  Database,
  Wifi,
  Server,
  Monitor,
  Bell,
  ShieldCheck,
  TrendingUp,
  FileText,
  Settings,
  Gauge,
} from "lucide-react"

const steps = [
  {
    icon: Radio,
    title: "Fuel Sensing",
    description:
      "High-precision capacitive fuel sensors installed in your tanks measure fuel levels with 99.5% accuracy.",
  },
  {
    icon: Database,
    title: "Data Collection",
    description:
      "IoT devices collect readings every few seconds, capturing consumption patterns and anomalies.",
  },
  {
    icon: Wifi,
    title: "Data Transmission",
    description:
      "Secure GSM/GPS modules transmit data in real-time to our cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Data Processing",
    description:
      "Advanced algorithms process data, detect patterns, and identify potential theft or leakage.",
  },
  {
    icon: Monitor,
    title: "Dashboard & Alerts",
    description:
      "Intuitive dashboards display insights while instant alerts notify you of critical events.",
  },
]

const benefits = [
  {
    icon: AlertTriangle,
    title: "Theft Alerts",
    description:
      "Instant notifications when unauthorized fuel extraction is detected",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    description: "Live visibility into fuel levels and consumption patterns",
  },
  {
    icon: CheckCircle,
    title: "Fuel Fill Accuracy",
    description: "Verify exact fuel deliveries vs. billed amounts",
  },
  {
    icon: TrendingUp,
    title: "Consumption Patterns",
    description: "Identify inefficiencies and optimize fuel usage",
  },
  {
    icon: Settings,
    title: "Maintenance Alerts",
    description: "Proactive alerts for equipment maintenance",
  },
  {
    icon: ShieldCheck,
    title: "Audit-Ready Reports",
    description: "Comprehensive documentation for compliance",
  },
]

const reports = [
  {
    title: "Daily Fuel Summary",
    description: "Opening, closing levels, consumption, and refills",
  },
  {
    title: "Theft Detection Report",
    description: "Detailed logs of suspicious activities",
  },
  {
    title: "Fill vs Delivery Report",
    description: "Compare actual fills with vendor invoices",
  },
  {
    title: "Asset Utilization Report",
    description: "Equipment running hours and fuel efficiency",
  },
  {
    title: "Monthly Trend Analysis",
    description: "Historical patterns and forecasting",
  },
  {
    title: "Exception Report",
    description: "All anomalies and alerts in one view",
  },
]

const faqs = [
  {
    question: "How accurate is the fuel level monitoring?",
    answer:
      "Our capacitive sensors provide accuracy up to 99.5%, far exceeding industry standards. They work reliably across different fuel types and tank shapes.",
  },
  {
    question: "Can it detect fuel theft in real-time?",
    answer:
      "Yes, our system detects unauthorized fuel extraction within minutes and sends instant alerts via SMS, email, and app notifications.",
  },
  {
    question: "What types of assets can be monitored?",
    answer:
      "We support both stationary tanks (storage, generators, backup systems) and mobile assets (trucks, heavy equipment, construction machinery).",
  },
  {
    question: "How long does installation take?",
    answer:
      "Typical installation takes 2-4 hours per asset. Our trained technicians ensure minimal disruption to your operations.",
  },
  {
    question: "Is the data secure?",
    answer:
      "Absolutely. We use end-to-end encryption, secure cloud infrastructure, and comply with industry data protection standards.",
  },
]

const FuelManagement = () => {
  const [fuelPrice, setFuelPrice] = useState(100)
  const [monthlyUsage, setMonthlyUsage] = useState(5000)
  const [theftRate] = useState(5)

  const potentialSavings = Math.round(
    monthlyUsage * (theftRate / 100) * fuelPrice * 12
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-700/50 border border-navy-500/30 text-navy-200 text-sm mb-6">
                <Fuel className="w-4 h-4 text-gold-400" />
                IoT-Powered Solution
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Drive Better with
                <span className="text-gradient-gold block">
                  Fuel Monitoring
                </span>
              </h1>

              <p className="text-lg text-navy-200 mb-8 leading-relaxed">
                Get complete visibility and control over your fuel assets. Our
                IoT-powered fuel management system helps you reduce theft,
                optimize consumption, and improve operational efficiency.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="/#contact">
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline-light" size="xl">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
                  The Problem
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Fuel Theft & Wastage is Costing You
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Studies show that 3-7% of fuel is lost annually due to theft,
                  pilferage, and inefficiencies. For a fleet of 50 vehicles,
                  this can mean losses of ₹15-30 lakhs per year.
                </p>
                <ul className="space-y-4">
                  {[
                    "Manual dip-stick measurements are error-prone",
                    "Delivery discrepancies go unnoticed",
                    "Theft happens during transit and storage",
                    "No visibility into actual consumption patterns",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-destructive" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <Gauge className="w-16 h-16 text-gold-400 mx-auto mb-6" />
                <p className="text-5xl font-bold text-gold-400 mb-2">3-7%</p>
                <p className="text-lg text-navy-200">Average Fuel Loss</p>
                <p className="text-sm text-navy-400 mt-4">
                  Industry average across unmonitored fleets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-navy-50">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                From Sensor to Insight
              </h2>
              <p className="text-lg text-muted-foreground">
                Our end-to-end solution captures, transmits, and analyzes fuel
                data in real-time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="card-elevated p-6 text-center h-full">
                    <div className="icon-circle mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <span className="inline-block w-8 h-8 rounded-full bg-navy-100 text-navy-600 font-bold text-sm leading-8 mb-3">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-navy-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Our Fuel Management System
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-elevated p-8">
                  <div className="icon-circle mb-6">
                    <benefit.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fuel Calculator */}
        <section className="section-padding gradient-navy">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-navy-700 text-gold-400 text-sm font-semibold mb-4">
                  Savings Calculator
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Calculate Your Potential Savings
                </h2>
                <p className="text-lg text-navy-200 mb-8">
                  See how much you could save by reducing fuel theft and wastage
                  with our monitoring system.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-elevated">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Fuel Price per Litre (₹)
                    </label>
                    <Input
                      type="number"
                      value={fuelPrice}
                      onChange={(e) => setFuelPrice(Number(e.target.value))}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Monthly Fuel Usage (Litres)
                    </label>
                    <Input
                      type="number"
                      value={monthlyUsage}
                      onChange={(e) => setMonthlyUsage(Number(e.target.value))}
                      className="h-12"
                    />
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      Estimated Annual Savings
                    </p>
                    <p className="text-4xl font-bold text-gold-500">
                      ₹{potentialSavings.toLocaleString("en-IN")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Based on industry average theft rate of {theftRate}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Reporting
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Reports & Analytics
              </h2>
              <p className="text-lg text-muted-foreground">
                Get actionable insights with our detailed reporting suite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-gold-300 transition-colors"
                >
                  <div className="icon-circle-navy w-12 h-12 flex-shrink-0">
                    <FileText className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {report.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {report.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-navy-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-gold-500">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Take Control of Your Fuel?
              </h2>
              <p className="text-lg text-navy-200 mb-8 max-w-2xl mx-auto">
                Join 100+ companies who trust DriveIQ for their fuel management
                needs. Get started with a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="/#contact">
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <a href="/#contact">
                  <Button variant="outline-light" size="xl">
                    Contact Sales
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FuelManagement
