import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { FileText, Github, Linkedin, BookOpen, Image, Layers, BookOpenText, Instagram, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { papers, projects, aboutContent } from "@/lib/generatedContentLoader";

// Parse bio content to separate short and long versions
const parseBioContent = (content: string) => {
  const longBioStart = content.indexOf('<!-- LONG_BIO_START -->');
  const longBioEnd = content.indexOf('<!-- LONG_BIO_END -->');
  
  const shortBio = longBioStart > -1 ? content.substring(0, longBioStart).trim() : content;
  const longBio = longBioStart > -1 && longBioEnd > -1 ? 
    content.substring(longBioStart + 24, longBioEnd).trim() : 
    content;
    
  return { shortBio, longBio };
};

// Parse research interests from markdown content
const parseResearchInterests = (content: string) => {
  const lines = content.split('\n');
  const interests: { title: string; description: string }[] = [];
  
  // Look for the research interests section
  let inResearchInterests = false;
  let currentInterest: { title: string; description: string } | null = null;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine === '## Research Interests') {
      inResearchInterests = true;
      continue;
    }
    
    if (inResearchInterests) {
      if (trimmedLine.startsWith('## ')) {
        // End of research interests section
        if (currentInterest) {
          interests.push(currentInterest);
        }
        break;
      }
      
      if (trimmedLine.startsWith('- **') && trimmedLine.endsWith('**')) {
        // Save previous interest if exists
        if (currentInterest) {
          interests.push(currentInterest);
        }
        
        // Start new interest
        const titleMatch = trimmedLine.match(/- \*\*(.*?)\*\*/);
        currentInterest = {
          title: titleMatch ? titleMatch[1] : '',
          description: ''
        };
      } else if (currentInterest && trimmedLine && !trimmedLine.startsWith('- **')) {
        // Add description line
        if (currentInterest.description) {
          currentInterest.description += ' ' + trimmedLine;
        } else {
          currentInterest.description = trimmedLine;
        }
      }
    }
  }
  
  // Don't forget the last interest
  if (currentInterest && inResearchInterests) {
    interests.push(currentInterest);
  }
  
  return interests;
};

const Index = () => {
  // Get selected papers (where selected: 1)
  const selectedPapers = papers.filter(paper => paper.selected === 1);

  // Get selected projects (where selected: 1)
  const selectedProjects = projects.filter(project => project.selected === 1);
  
  // Parse bio content
  const { shortBio } = parseBioContent(aboutContent.bio.content);
  
  // Parse research interests
  const researchInterests = parseResearchInterests(aboutContent.interests.content);
  
  // Define research interest cards with proper content from markdown
  const researchInterestCards = researchInterests.length > 0 
    ? researchInterests.slice(0, 4).map(interest => ({
        title: interest.title,
        description: interest.description
      }))
    : [
        {
          title: "Meta-Learning",
          description: "Focused on creating learning paradigms and optimization strategies that allow models to quickly adapt and generalize from minimal data."
        },
        {
          title: "Data-Centric Modeling",
          description: "Engineering systematic methodologies for data curation, augmentation, and annotation to improve model performance and reliability."
        },
        {
          title: "Natural Language Processing",
          description: "Building computational models for semantic representation, reasoning, and generation to solve problems in machine translation and information extraction."
        },
        {
          title: "Knowledge Representation",
          description: "Investigating the underlying mathematical principles of high-dimensional embeddings, focusing on the geometric and algebraic structures within vector spaces to formally model semantic relationships."
        }
      ];
  
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center justify-center mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Avatar className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-border mb-8 glass-morphism">
              <AvatarImage src="vnco.jpg" alt="Vitor Negromonte" className="object-cover" />
              <AvatarFallback className="bg-muted text-foreground">VN</AvatarFallback>
            </Avatar>
            
            <h1 className="text-foreground font-display text-3xl md:text-4xl mb-3 tracking-tight">
              Vitor Negromonte
            </h1>
            
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                AI Researcher
              </Badge>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                Data Scientist
              </Badge>
            </div>
            
            <p className="text-muted-foreground mb-6 mx-auto leading-relaxed">
              I'm a researcher focused on using <span className="text-accent font-medium">Meta-Learning</span>, 
              <span className="text-accent font-medium"> Knowledge Representation</span>, and <span className="text-accent font-medium">Data-Centric Modeling</span> to create more transparent and interpretable AI systems.
            </p>
            
            <div className="flex justify-center gap-6 mt-7">
              <a href="cv.pdf" className="text-muted-foreground hover:text-accent transition-colors">
                <FileText size={20} />
              </a>
              <a href="mailto:contato.vnco@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
              <a href="http://github.com/vitornegromonte" className="text-muted-foreground hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="http://linkedin.com/in/vitornegromonte" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="http://instagram.com/vitor.ncabral" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="http://medium.com/@vitornegromonte" className="text-muted-foreground hover:text-accent transition-colors">
                <BookOpenText size={20} />
              </a>
            </div>
          </div>
        </section>
        
        {/* Recent Publications Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-foreground flex items-center gap-2">
                <BookOpen size={20} className="text-accent" />
                Recent Publications
              </h2>
              <Link to="/papers" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all publications →
              </Link>
            </div>
            
            <div className="space-y-4">
              {selectedPapers.length > 0 ? (
                selectedPapers.map((paper, index) => (
                  <div key={index} className="glass-morphism bg-card p-5 border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                    <span className="text-sm text-muted-foreground">{paper.conference} ({paper.year})</span>
                    <h3 className="text-lg font-medium mb-1 text-foreground">{paper.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{paper.authors}</p>
                    <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:text-accent/80 transition-colors">
                      Read paper →
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center">
                  No academic papers found.
                </p>
              )}
            </div>
          </div>
        </section>
        
        {/* Recent Projects Section */}
        <section className="container mx-auto px-4 py-8 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display text-foreground flex items-center gap-2">
                <Layers size={20} className="text-accent" />
                Recent Projects
              </h2>
              <Link to="/projects" className="text-accent text-sm hover:text-accent/80 transition-colors">
                View all projects →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {selectedProjects.length > 0 ? (
                selectedProjects.map((project) => (
                  <div key={project.id} className="glass-morphism bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1 text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-muted/50 border-border text-muted-foreground">
                            {tag}
                          </Badge>
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
                ))
              ) : (
                <p className="text-muted-foreground text-center">
                  No selected projects found.
                </p>
              )}
            </div>
          </div>
        </section>
        
        {/* Research Interests Section */}
        <section className="container mx-auto px-4 py-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-display text-foreground mb-6">Research Interests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {researchInterestCards.map((interest, index) => (
                <div key={index} className="glass-morphism bg-card p-5 rounded-lg hover:bg-accent/5 transition-colors border border-border">
                  <h3 className="font-medium mb-2 text-foreground">{interest.title}</h3>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;