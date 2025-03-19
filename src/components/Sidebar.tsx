import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FileText, Layers, Paintbrush, User, Mail, Home, FileUser, Paperclip } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/projects", icon: <Layers size={20} /> },
    { name: "Papers & Talks", path: "/papers", icon: <FileText size={20} /> },
    { name: "Art", path: "/art", icon: <Paintbrush size={20} /> }
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 md:w-60 bg-white border-r border-gray-200 z-50 transition-all duration-300">
      <div className="flex flex-col h-full py-8 overflow-hidden">
        <div className="px-4 mb-8 flex justify-center md:justify-start">
        <Link 
          to="/" 
          className="text-xl font-display tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          <span className="text-gradient-accent">Vitor </span>
          <span className="text-gray-900">Negromonte</span>
        </Link>
        </div>
        
        <nav className="flex-1 px-2">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-colors",
                    "hover:bg-gray-100 group",
                    location.pathname === link.path 
                      ? "bg-accent/10 text-accent" 
                      : "text-gray-700"
                  )}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span className="hidden md:block">{link.name}</span>
                </Link>
              </li>
            ))}
            
            {/* CV Download Button */}
            <li>
              <a
                href="/cv.pdf" 
                download
                className={cn(
                  "flex items-center py-2 px-3 rounded-md transition-colors",
                  "hover:bg-gray-100 group text-gray-700",
                )}
              >
                <span className="mr-3"><Paperclip  size={20} /></span>
                <span className="hidden md:block">Curriculum Vitæ</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="px-4 pt-4 border-t border-gray-200 hidden md:block">
          <div className="text-xs text-gray-600">
            <p>© 2025 Vitor Negromonte</p>
            <p>Data Scientist & AI Researcher</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;