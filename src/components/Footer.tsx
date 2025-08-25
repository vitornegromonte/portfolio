
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link 
              to="/" 
              className="text-xl font-display tracking-tight"
            >
              <span className="text-foreground font-medium">Vitor</span>
              <span className="text-foreground font-medium"> Negromonte</span>
            </Link>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4 text-foreground">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-accent transition-colors text-sm">Projects</Link></li>
              <li><Link to="/papers" className="text-muted-foreground hover:text-accent transition-colors text-sm">Papers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4 text-foreground">Connect</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a 
                  href="https://github.com/vitornegromonte" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/vitornegromonte" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/vitor.ncabral" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato.vnco@gmail.com" 
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">&copy; {currentYear} Vitor Negromonte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
