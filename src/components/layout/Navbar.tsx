import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Fuel, Truck, Shield } from "lucide-react"
import logo from "@/assets/logo.png"

const solutions = [
  { name: "Fuel Management System", href: "/fuel-management", icon: Fuel },
  { name: "Fleet Management System", href: "/fleet-management", icon: Truck },
  {
    name: "Safety & Emergency Response",
    href: "/safety-response",
    icon: Shield,
  },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSolutionsOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/95 backdrop-blur-md shadow-soft border-b border-border`}
    >
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={logo}
                alt="DriveIQ Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary">DriveIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                isActive("/") ? "text-gold-500" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                isActive("/about") ? "text-gold-500" : "text-foreground"
              }`}
            >
              About
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-500"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSolutionsOpen && (
                <div
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-elevated border border-border p-2 animate-fade-in"
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      to={solution.href}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-navy-50 ${
                        isActive(solution.href)
                          ? "bg-navy-50 text-gold-500"
                          : ""
                      }`}
                    >
                      <div className="icon-circle-navy w-10 h-10">
                        <solution.icon className="w-5 h-5 text-navy-600" />
                      </div>
                      <span className="text-sm font-medium">
                        {solution.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#clients"
              className="text-sm font-medium transition-colors hover:text-gold-500"
            >
              Clients
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <a href="/#contact">Contact Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-navy-50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-sm font-medium hover:bg-navy-50 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-sm font-medium hover:bg-navy-50 rounded-lg"
              >
                About
              </Link>

              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Solutions
                </p>
                {solutions.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
                    className="flex items-center gap-3 py-3 text-sm font-medium hover:text-gold-500"
                  >
                    <solution.icon className="w-5 h-5 text-navy-400" />
                    {solution.name}
                  </Link>
                ))}
              </div>

              <div className="px-4 pt-4">
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a href="/#contact">Contact Now</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
