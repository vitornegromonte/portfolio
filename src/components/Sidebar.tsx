
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FileText, Microscope, Layers, Paintbrush, User, Mail, Home, FileUser, Paperclip } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Projects", path: "/projects", icon: <Layers size={18} /> },
    { name: "Papers & Talks", path: "/papers", icon: <Microscope size={18} /> },
    { name: "Art", path: "/art", icon: <Paintbrush size={18} /> }
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 md:w-60 bg-white border-r border-gray-50 shadow-sm z-50 transition-all duration-300">
      <div className="flex flex-col h-full py-8 overflow-hidden">
        <div className="px-4 mb-8 flex justify-center md:justify-start">
          <Link 
            to="/" 
            className="text-xl font-display tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-accent">Vitor</span>
            <span className="text-gray-900 hidden md:inline"> Negromonte</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-2">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-all duration-200",
                    "hover:bg-gray-50 group",
                    location.pathname === link.path 
                      ? "bg-gray-50 text-accent" 
                      : "text-gray-500"
                  )}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span className="hidden md:block text-sm font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
            
            {/* CV Download Button */}
            <li>
              <a
                href="/cv.pdf" 
                download
                className={cn(
                  "flex items-center py-2 px-3 rounded-md transition-all duration-200",
                  "hover:bg-gray-50 group text-gray-500",
                )}
              >
                <span className="mr-3"><FileText size={18} /></span>
                <span className="hidden md:block text-sm font-medium">Curriculum Vitæ</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="px-4 pt-4 border-t border-gray-50 hidden md:block">
          <div className="text-xs text-gray-400">
            <p>© 2025 Vitor Negromonte</p>
            <p>Data Scientist & AI Researcher</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
