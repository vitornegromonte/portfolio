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
    <div className={`flex gap-3 ${!isDetailView ? "mt-4" : "pt-4"}`}>
      {githubUrl && (
        <Button 
          variant="outline" 
          size={isDetailView ? "default" : "sm"} 
          asChild 
          className=""
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
          className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
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
          "glass-morphism overflow-hidden hover-card border border-border bg-card cursor-pointer h-[320px] transition-all duration-300 hover:shadow-md",
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
        </div>
        
        <div className="p-5 flex flex-col h-[120px]">
          <h3 className="text-xl font-display mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh] bg-background border-border">
          <ScrollArea className="max-h-[90vh]">
            <div className="aspect-video w-full h-[300px]">
              <img 
                src={image} 
                alt={`Project preview: ${title}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display text-foreground">{title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground mt-2">
                  {detailedDescription || description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 space-y-4">
                {categories && categories.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Categories</h4>
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
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-muted/50 border-border text-muted-foreground">
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