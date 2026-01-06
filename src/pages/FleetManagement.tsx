import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Truck,
  MapPin,
  Route,
  BarChart3,
  Shield,
  Bell,
  Clock,
  Users,
  FileText,
  Settings,
  CheckCircle,
  AlertTriangle,
  Gauge,
  Navigation,
} from "lucide-react"
import { useEffect } from "react"
import fleetDashboardImg from "@/assets/fleetdashboard.png"

const features = [
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description:
      "Real-time location tracking with 10-second refresh intervals for complete fleet visibility.",
  },
  {
    icon: Route,
    title: "Route Optimization",
    description:
      "AI-powered route planning that considers traffic, weather, and delivery windows.",
  },
  {
    icon: Users,
    title: "Driver Behavior Analytics",
    description:
      "Monitor speeding, harsh braking, rapid acceleration, and idling patterns.",
  },
  {
    icon: BarChart3,
    title: "Rich Reports & Dashboards",
    description:
      "Customizable dashboards with 50+ report types for data-driven decisions.",
  },
  {
    icon: Shield,
    title: "Smart Geo-Fencing",
    description:
      "Create virtual boundaries and receive alerts for entry/exit events.",
  },
  {
    icon: FileText,
    title: "Issue Management",
    description:
      "Centralized system for reporting, tracking, and resolving fleet issues.",
  },
]

const benefits = [
  { value: "30%", label: "Fuel Cost Reduction" },
  { value: "25%", label: "Improved Efficiency" },
  { value: "40%", label: "Less Idle Time" },
  { value: "99%", label: "Uptime" },
]

const reportTypes = [
  "Trip History & Playback",
  "Distance & Running Hours",
  "Stoppage Analysis",
  "Fuel Consumption Reports",
  "Driver Score Cards",
  "Geo-Fence Violation Reports",
  "Maintenance Schedules",
  "Custom Analytics",
]

const faqs = [
  {
    question: "How quickly can I see my fleet on the dashboard?",
    answer:
      "Once devices are installed, you can see your entire fleet within minutes. Installation typically takes 1-2 hours per vehicle.",
  },
  {
    question: "Can I set up custom alerts?",
    answer:
      "Yes, you can configure unlimited custom alerts based on speed, location, idle time, geo-fence violations, and more. Alerts can be sent via SMS, email, and push notifications.",
  },
  {
    question: "Does it work for all vehicle types?",
    answer:
      "Our system supports all vehicle types including cars, trucks, buses, construction equipment, and two-wheelers. Custom solutions available for specialized vehicles.",
  },
  {
    question: "What happens if the device loses connectivity?",
    answer:
      "Our devices store data locally and automatically sync when connectivity is restored. You never lose critical tracking data.",
  },
  {
    question: "Can I integrate with my existing systems?",
    answer:
      "Yes, we offer API integration with ERP systems, fuel management systems, and third-party applications. Our team assists with seamless integration.",
  },
]

const FleetManagement = () => {
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
                <Truck className="w-4 h-4 text-gold-400" />
                Fleet Telematics
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Next-Generation
                <span className="text-gradient-gold block">
                  Fleet Management System
                </span>
              </h1>

              <p className="text-lg text-navy-200 mb-8 leading-relaxed">
                Take complete control of your fleet with real-time tracking,
                intelligent route optimization, driver analytics, and
                comprehensive reporting—all from a single platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="/#contact">
                    Talk to Fleet Expert
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Stats */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Everything You Need to Manage Your Fleet
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive tools designed to optimize operations, reduce
                costs, and improve safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card-elevated p-8 group">
                  <div className="icon-circle mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Tracking Section */}
        <section className="section-padding bg-navy-50">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                  Real-Time Tracking
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  See Your Entire Fleet at a Glance
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our intuitive map interface shows you exactly where every
                  vehicle is, what it's doing, and how it's performing—in real
                  time.
                </p>

                <ul className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      text: "Live location updates every 10 seconds",
                    },
                    {
                      icon: Navigation,
                      text: "Historical trip playback and analysis",
                    },
                    { icon: Clock, text: "Accurate ETA predictions" },
                    { icon: Bell, text: "Instant alerts for route deviations" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="icon-circle w-10 h-10">
                        <item.icon className="w-5 h-5 text-gold-500" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fleet Dashboard Image */}
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border bg-card">
                <img
                  src={fleetDashboardImg}
                  alt="Real-Time Fleet Tracking Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Driver Analytics */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Gauge,
                      label: "Speed Score",
                      value: "92%",
                      color: "emerald",
                    },
                    {
                      icon: AlertTriangle,
                      label: "Harsh Braking",
                      value: "3",
                      color: "amber",
                    },
                    {
                      icon: Clock,
                      label: "Idle Time",
                      value: "12%",
                      color: "blue",
                    },
                    {
                      icon: CheckCircle,
                      label: "Overall Score",
                      value: "88%",
                      color: "gold",
                    },
                  ].map((metric, idx) => (
                    <div key={idx} className="card-elevated p-6 text-center">
                      <metric.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                      <p className="text-2xl font-bold text-primary">
                        {metric.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                  Driver Analytics
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Improve Driver Performance & Safety
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Monitor driving behavior in real-time and use data-driven
                  insights to coach drivers, reduce accidents, and lower fuel
                  costs.
                </p>
                <ul className="space-y-3">
                  {[
                    "Speed monitoring with customizable thresholds",
                    "Harsh braking and acceleration detection",
                    "Idle time tracking and optimization",
                    "Driver scorecards and gamification",
                    "Training recommendations based on data",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="section-padding gradient-navy">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-navy-700 text-gold-400 text-sm font-semibold mb-4">
                Reporting
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                50+ Reports for Every Need
              </h2>
              <p className="text-lg text-navy-200">
                Get the insights you need with our comprehensive reporting
                suite.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {reportTypes.map((report, index) => (
                <div
                  key={index}
                  className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 border border-navy-600/30 hover:border-gold-400/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gold-400" />
                    <span className="text-sm text-navy-100">{report}</span>
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
                Ready to Optimize Your Fleet?
              </h2>
              <p className="text-lg text-navy-200 mb-8 max-w-2xl mx-auto">
                Get a personalized demo and see how DriveIQ can transform your
                fleet operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="/#contact">
                    Talk to Fleet Expert
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FleetManagement
