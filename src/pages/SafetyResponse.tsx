import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Heart,
  Home,
  Car,
  UserCheck,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Bell,
  Users,
  Headphones,
} from "lucide-react"
import { useEffect } from "react"

const helpCategories = [
  {
    icon: Home,
    title: "Safety at Home",
    description:
      "Emergency response for home intrusions, fire, gas leaks, and domestic emergencies.",
    features: [
      "24x7 monitoring",
      "Instant police dispatch",
      "Neighbor alert network",
      "Fire department coordination",
    ],
  },
  {
    icon: Heart,
    title: "Medical Emergencies",
    description:
      "Immediate medical assistance and ambulance dispatch when you need it most.",
    features: [
      "Ambulance dispatch",
      "Hospital coordination",
      "Doctor-on-call",
      "Medical history access",
    ],
  },
  {
    icon: UserCheck,
    title: "Personal Safety",
    description:
      "Protection for individuals in threatening situations with panic button access.",
    features: [
      "SOS panic button",
      "Live location sharing",
      "Police coordination",
      "Family notifications",
    ],
  },
  {
    icon: Car,
    title: "On-Road Assistance",
    description:
      "Comprehensive roadside assistance for breakdowns, accidents, and emergencies.",
    features: [
      "Towing service",
      "Flat tire assistance",
      "Battery jump-start",
      "Fuel delivery",
    ],
  },
]

const appFeatures = [
  {
    title: "SafeMe",
    icon: Shield,
    description:
      "Share your real-time location with trusted contacts. They can track your journey and receive alerts if something goes wrong.",
    color: "bg-emerald-500",
  },
  {
    title: "HelpMe",
    icon: AlertCircle,
    description:
      "One-tap emergency button that immediately connects you to our 24x7 response center and shares your location.",
    color: "bg-red-500",
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Activate Alert",
    description: "Press the panic button or trigger an SOS from the app",
    icon: Bell,
  },
  {
    step: 2,
    title: "Response Center",
    description: "Our 24x7 team receives your alert with your exact location",
    icon: Headphones,
  },
  {
    step: 3,
    title: "Dispatch Help",
    description: "We coordinate with police, ambulance, or roadside assistance",
    icon: Users,
  },
  {
    step: 4,
    title: "Track & Resolve",
    description: "Real-time updates until the situation is fully resolved",
    icon: CheckCircle,
  },
]

const stats = [
  { value: "22,550", label: "Feet on Ground" },
  { value: "174,960", label: "Active Subscribers" },
  { value: "30,000+", label: "Incidents Handled" },
  { value: "<30 min", label: "Avg Response Time" },
]

const SafetyResponse = () => {
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center">
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-navy-700/50 border border-navy-500/30 text-navy-200 text-sm mb-6">
                    <div className="text-gold-400">24</div>
                    Response App
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Your Personal
                  <span className="text-gradient-gold block">
                    Safety Guardian
                  </span>
                </h1>

                <p className="text-lg text-navy-200 mb-8 leading-relaxed">
                  24x7 personal and on-road safety services with PAN-India
                  coverage. Whether it's a medical emergency, personal safety
                  concern, or roadside breakdown—help is just one tap away.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button variant="gold" size="xl" asChild>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.luckey.onetouch1&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Android App
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline-light" size="xl" asChild>
                    <a
                      href="https://itunes.apple.com/in/app/one-touch-response/id987064767?mt=8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download iOS App
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-600/30"
                  >
                    <p className="text-3xl font-bold text-gold-400 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-navy-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why 24 Response */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                India's Most Trusted Safety Network
              </h2>
              <p className="text-lg text-muted-foreground">
                With over 22,500 responders across India, we ensure help reaches
                you when you need it most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "24x7 Availability",
                  description:
                    "Our response center never sleeps. Get help any time of day or night, 365 days a year.",
                },
                {
                  icon: MapPin,
                  title: "PAN-India Coverage",
                  description:
                    "From metro cities to remote areas, our network of responders covers the entire nation.",
                },
                {
                  icon: Users,
                  title: "Expert Responders",
                  description:
                    "Trained professionals including ex-army personnel, paramedics, and certified technicians.",
                },
              ].map((item, index) => (
                <div key={index} className="card-elevated p-8 text-center">
                  <div className="icon-circle mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="section-padding bg-navy-50">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Safety Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Whatever the emergency, we've got you covered with specialized
                response teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all"
                >
                  <div className="p-8">
                    <div className="icon-circle mb-6">
                      <category.icon className="w-7 h-7 text-gold-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SafeMe & HelpMe */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4">
                App Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Two Powerful Features for Your Safety
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="card-elevated p-8 flex gap-6">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding gradient-navy">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-navy-700 text-gold-400 text-sm font-semibold mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Help in 4 Simple Steps
              </h2>
              <p className="text-lg text-navy-200">
                From alert to resolution, we're with you every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-600/30 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-navy-900">
                        {step.step}
                      </span>
                    </div>
                    <step.icon className="w-10 h-10 text-gold-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy-300">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-navy-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-3xl p-12 text-center">
              <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                In Case of Emergency
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Call our 24x7 toll-free helpline for immediate assistance. Our
                response team is always ready to help.
              </p>
              <Button
                size="xl"
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                asChild
              >
                <a href="tel:18001030024">
                  <Phone className="w-6 h-6" />
                  1800-1030-024
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* App Download CTA */}
        <section className="section-padding bg-navy-50">
          <div className="container-section">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                    Download the 24 Response App
                  </h2>
                  <p className="text-lg text-navy-200 mb-8">
                    Get instant access to emergency services, track your loved
                    ones, and stay safe with our mobile app.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gold" size="xl" asChild>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.luckey.onetouch1&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Android App
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline-light" size="xl" asChild>
                      <a
                        href="https://itunes.apple.com/in/app/one-touch-response/id987064767?mt=8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download iOS App
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-navy-700/50 rounded-3xl p-8 border border-navy-600/30">
                    <Smartphone className="w-32 h-32 text-gold-400 mx-auto" />
                    <p className="text-center text-navy-200 mt-4">
                      Available on iOS & Android
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SafetyResponse
