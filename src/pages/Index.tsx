
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Linkedin, Instagram, BookOpenText  } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20 flex flex-col items-center min-h-[calc(100vh-200px)] justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-gray-200 mb-8">
            <img 
              src="vnco.JPG" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-gray-900 font-display text-4xl md:text-5xl mb-4">
            Vitor Negromonte
          </h1>
          
          <p className="text-gray-700 text-lg mb-2 max-w-2xl mx-auto leading-relaxed">
            Data Scientist and AI Researcher. Conducting research in <span className="font-semibold">Generative AI</span> and <span className="font-semibold">Computer Vision</span>.
          </p>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="cv.pdf" className="text-gray-700 hover:text-accent transition-colors">
              <FileText size={24} />
            </a>
            <a href="mailto:contato.vnco@gmail.com" className="text-gray-700 hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
            <a href="http://github.com/vitornegromonte" className="text-gray-700 hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="http://linkedin.com/in/vitornegromonte" className="text-gray-700 hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="http://instagram.com/vitor.ncabral" className="text-gray-700 hover:text-accent transition-colors">
              <Instagram size={24} />
            </a>

            <a href="http://medium.com/@vitornegromonte" className="text-gray-700 hover:text-accent transition-colors">
            <BookOpenText x size={24} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
