
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
  <Link 
    to="/" 
    className="text-xl font-display tracking-tight text-white"
  >
    <span className="text-gradient-accent">Vitor</span>
    <span className="text-gray-800 block">Negromonte</span>
  </Link>
</div>
          
<div>
  <h4 className="text-lg font-medium mb-4">Quick Links</h4>
  <ul className="grid grid-cols-2 gap-2">
    <li><Link to="/" className="text-muted-foreground hover:text-gradient-accent transition-colors">Home</Link></li>
    <li><Link to="/about" className="text-muted-foreground hover:text-gradient-accent transition-colors">About</Link></li>
    <li><Link to="/projects" className="text-muted-foreground hover:text-gradient-accent transition-colors">Projects</Link></li>
    <li><Link to="/papers" className="text-muted-foreground hover:text-gradient-accent transition-colors">Papers</Link></li>
    <li><Link to="/art" className="text-muted-foreground hover:text-gradient-accent transition-colors">Art</Link></li>
    <li><Link to="/contact" className="text-muted-foreground hover:text-gradient-accent transition-colors">Contact</Link></li>
  </ul>
</div>
          
        <div>
  <h4 className="text-lg font-medium mb-4">Connect</h4>
  <ul className="grid grid-cols-2 gap-2">
    <li>
      <a 
        href="https://github.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-muted-foreground hover:text-gradient-accent transition-colors"
      >
        GitHub
      </a>
    </li>
    <li>
      <a 
        href="https://linkedin.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-muted-foreground hover:text-gradient-accent transition-colors"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a 
        href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-muted-foreground hover:text-gradient-accent transition-colors"
      >
        Twitter
      </a>
    </li>
    <li>
      <a 
        href="mailto:contact@example.com" 
        className="text-muted-foreground hover:text-gradient-accent transition-colors"
      >
        Email
      </a>
    </li>
  </ul>
</div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/10 text-center text-muted-foreground">
          <p>&copy; {currentYear} Vitor Negromonte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
