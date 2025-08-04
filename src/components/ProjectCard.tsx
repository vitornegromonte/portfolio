import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectCardProps {
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  tags: string[];
  categories?: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  detailedDescription,
  image,
  tags,
  categories = [],
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const renderActionButtons = (isDetailView = false) => (
    <div className={`flex gap-3 ${!isDetailView ? "mt-auto" : "pt-4"}`}>
      {githubUrl && (
        <Button 
          variant="outline" 
          size={isDetailView ? "default" : "sm"} 
          asChild 
          className="gap-2"
          onClick={!isDetailView ? handleLinkClick : undefined}
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            <span>{isDetailView ? "View Code" : "Code"}</span>
          </a>
        </Button>
      )}
      
      {liveUrl && (
        <Button 
          size={isDetailView ? "default" : "sm"} 
          asChild 
          className="gap-2"
          onClick={!isDetailView ? handleLinkClick : undefined}
        >
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            <span>{isDetailView ? "View Demo" : "Demo"}</span>
          </a>
        </Button>
      )}
    </div>
  );

  return (
    <>
      <Card 
        className={cn(
          "glass-morphism overflow-hidden hover-card border border-gray-200 bg-white cursor-pointer h-[360px] transition-all duration-300 hover:shadow-md",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Open details for ${title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        <div className="relative overflow-hidden h-[160px]">
          <img
            src={image}
            alt={`Project thumbnail: ${title}`}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {categories.length > 0 && (
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <div className="flex flex-wrap gap-2 mb-2">
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="secondary" 
                    className="bg-black/50 text-white text-xs"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-5 flex flex-col h-[120px]">
          <h3 className="text-xl font-display mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
          
        </div>
        
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh]">
          <ScrollArea className="max-h-[90vh]">
            <div className="aspect-video w-full h-[320px]">
              <img 
                src={image} 
                alt={`Project preview: ${title}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">{title}</DialogTitle>
                <DialogDescription className="text-base text-gray-700 mt-2">
                  {detailedDescription || description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 space-y-4">
                {categories && categories.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge 
                          key={category} 
                          className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-gray-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {renderActionButtons(true)}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;