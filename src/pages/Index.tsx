import { Link } from "react-router-dom";
import { FileText, Github, Linkedin, BookOpen, Image, Layers, BookOpenText, Instagram, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects from "@/data/ProjectsData";
import ArtCard from "@/components/ArtCard";

const Index = () => {
  // Get featured/recent projects (first 2)
  const featuredProjects = projects.slice(0, 3);

  // Sample art data (typically would come from a data file)
  const featuredArt = [
    {
      id: 1,
      title: "Urban Motion",
      image: "/neruda.jpg",
      technique: "Digital Photography",
      year: "2024"
    },
    {
      id: 2,
      title: "Color Theory",
      image: "/orange.jpeg",
      technique: "Digital Art",
      year: "2023"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center justify-center mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Avatar className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-gray-200 mb-8 glass-morphism ">
              <AvatarImage src="vnco.jpg" alt="Vitor Negromonte" className="object-cover " />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
            
            <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-3 tracking-tight">
              Vitor Negromonte
            </h1>
            
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/10">
                AI Researcher
              </Badge>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/10">
                Data Scientist
              </Badge>
            </div>
            
            <p className="text-gray-600 mb-6 mx-auto leading-relaxed">
              I'm a researcher focusing on <span className="text-accent font-medium">Generative AI</span> and 
              <span className="text-accent font-medium"> Computer Vision</span> applications.
              My work explores the intersection of artificial intelligence and real-world problems,
              with particular emphasis on accessibility and healthcare.
            </p>
            
            <div className="flex justify-center gap-6 mt-7">
              <a href="cv.pdf" className="text-gray-500 hover:text-accent transition-colors">
                <FileText size={20} />
              </a>
              <a href="mailto:contato.vnco@gmail.com" className="text-gray-500 hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
              <a href="http://github.com/vitornegromonte" className="text-gray-500 hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="http://linkedin.com/in/vitornegromonte" className="text-gray-500 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="http://instagram.com/vitor.ncabral" className="text-gray-500 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="http://medium.com/@vitornegromonte" className="text-gray-500 hover:text-accent transition-colors">
                <BookOpenText size={20} />
              </a>
            </div>
          </div>
        </section>
        
        {/* Recent Publications Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-gray-900 flex items-center gap-2">
                <BookOpen size={20} className="text-accent" />
                Recent Publications
              </h2>
              <Link to="/papers" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all publications →
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="glass-morphism bg-white p-5 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <span className="text-sm text-gray-500">Brazilian Symposium on Information Systems (2025)</span>
                <h3 className="text-lg font-medium mb-1">A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism</h3>
                <p className="text-gray-600 text-sm mb-2">Danilo Monteiro Ribeiro, Felipe de Vasconcelos Melo, <strong>Vitor Cabral de Oliveira</strong>, et al.</p>
                <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:text-accent/80 transition-colors">
                  Read paper →
                </a>
              </div>
              
              <div className="glass-morphism bg-white p-5 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <span className="text-sm text-gray-500">Brazilian Symposium on Human Factors in Computing Systems (2024)</span>
                <h3 className="text-lg font-medium mb-1">A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps</h3>
                <p className="text-gray-600 text-sm mb-2">Danilo M. Ribeiro, Felipe V. Melo, <strong>Vitor Negromonte</strong>, et al.</p>
                <a href="https://sol.sbc.org.br" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:text-accent/80 transition-colors">
                  Read paper →
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Projects Section */}
        <section className="container mx-auto px-4 py-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-gray-900 flex items-center gap-2">
                <Layers size={20} className="text-accent" />
                Recent Projects
              </h2>
              <Link to="/projects" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all projects →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="glass-morphism bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                  
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Link 
                      to={`${project.githubUrl}`} 
                      className="text-accent text-sm hover:text-accent/80 transition-colors"
                    >
                      View project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Research Interests Section */}
        <section className="container mx-auto px-4 py-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-display text-gray-900 mb-6">Research Interests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="glass-morphism  bg-gray-50/50 p-5 rounded-lg hover:bg-gray-100/50 transition-colors">
                <h3 className="font-medium mb-2">Generative AI</h3>
                <p className="text-gray-600 text-sm">Exploring the capabilities of large language models and diffusion models for creative and practical applications.</p>
              </div>
              
              <div className="glass-morphism bg-gray-50/50 p-5 rounded-lg hover:bg-gray-100/50 transition-colors">
                <h3 className="font-medium mb-2">Computer Vision</h3>
                <p className="text-gray-600 text-sm">Developing models for image recognition, segmentation, and analysis in healthcare and accessibility domains.</p>
              </div>
              
              <div className="glass-morphism bg-gray-50/50 p-5 rounded-lg hover:bg-gray-100/50 transition-colors">
                <h3 className="font-medium mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">Creating AI solutions that improve technological accessibility for individuals with various needs and abilities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;