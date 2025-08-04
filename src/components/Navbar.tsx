
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Papers", path: "/papers" },
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
        isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
        >
          <span>Vitor </span>
          <span>Negromonte</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                location.pathname === link.path 
                  ? "text-accent" 
                  : "text-gray-500 hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/cv.pdf" 
            download
            className="text-sm font-medium text-gray-500 hover:text-accent transition-colors duration-200 flex items-center"
          >
            <FileText size={16} className="mr-1" />
            CV
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in absolute top-full left-0 right-0 p-4 mt-0 shadow-md">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded transition-colors",
                  location.pathname === link.path 
                    ? "text-accent" 
                    : "text-gray-500 hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/cv.pdf" 
              download
              className="px-4 py-2 text-sm font-medium rounded transition-colors text-gray-500 hover:text-accent flex items-center"
            >
              <FileText size={16} className="mr-1" />
              CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
  