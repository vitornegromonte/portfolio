
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Papers", path: "/papers" },
    { name: "Art", path: "/art" },
    {/* Header { name: "Contact", path: "/contact" },*/}
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 glass-morphism" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          <span className="text-gradient-accent">Vitor </span>
          <span className="text-gray-900">Negromonte</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "link-underline text-sm font-medium transition-colors",
                location.pathname === link.path 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-gradient-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism animate-fade-in absolute top-full left-0 right-0 p-4 mt-0">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded transition-colors",
                  location.pathname === link.path 
                    ? "bg-accent/20 text-accent" 
                    : "text-muted-foreground hover:text-gradient-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
