
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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
        isScrolled 
          ? "py-3 bg-background/80 dark:bg-background/80 backdrop-blur-md shadow-sm dark:shadow-background/20 border-b border-border/50" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="font-medium">Vitor</span>
          <span className="font-medium"> Negromonte</span>
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
                  : "text-muted-foreground hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/cv.pdf" 
            download
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center"
          >
            <FileText size={16} className="mr-1" />
            CV
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in absolute top-full left-0 right-0 p-4 mt-0 shadow-md dark:shadow-background/20">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded transition-colors",
                  location.pathname === link.path 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/cv.pdf" 
              download
              className="px-4 py-2 text-sm font-medium rounded transition-colors text-muted-foreground hover:text-accent flex items-center"
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
  