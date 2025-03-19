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

  return (
    <>
      <Card 
        className={cn(
          "overflow-hidden hover-card border border-gray-200 bg-white cursor-pointer h-[360px]",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden h-[160px]">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <div className="flex flex-wrap gap-2 mb-2">
              {categories.map((categories) => (
                <Badge key={categories} variant="secondary" className="bg-black/50 text-white text-xs">
                  {categories}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-5 flex flex-col h-[200px]">
          <h3 className="text-xl font-display mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
          
          <div className="flex gap-3 mt-auto">
            {githubUrl && (
              <Button variant="outline" size="sm" asChild className="gap-2" onClick={(e) => e.stopPropagation()}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </Button>
            )}
            
            {liveUrl && (
              <Button size="sm" asChild className="gap-2" onClick={(e) => e.stopPropagation()}>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh]">
          <ScrollArea className="max-h-[90vh]">
            <div className="aspect-video w-full h-[320px]">
              <img 
                src={image} 
                alt={title} 
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
                        <Badge key={category} className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
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
                
                <div className="flex gap-3 pt-4">
                  {githubUrl && (
                    <Button variant="outline" asChild className="gap-2">
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    </Button>
                  )}
                  
                  {liveUrl && (
                    <Button asChild className="gap-2">
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span>View Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;