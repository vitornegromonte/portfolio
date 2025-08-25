import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaperCardProps {
  title: string;
  authors: string;
  conference: string;
  year: string;
  tags: string[];
  pdfUrl: string;
}

const PaperCard = ({
  title,
  authors,
  conference,
  year,
  tags,
  pdfUrl,
}: PaperCardProps) => {
  return (
    <Card className={cn(
      "glass-morphism overflow-hidden hover-card border border-border bg-card cursor-pointer transition-all duration-300 hover:shadow-md",
      "hover:translate-y-[-5px] hover:shadow-lg dark:hover:shadow-gray-900/50"
    )}>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
          <div className="flex items-center text-muted-foreground">
            <CalendarDays size={14} className="mr-1" />
            <span>{year}</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground font-medium">{conference}</span>
        </div>
        
        <h3 className="text-xl font-display mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{authors}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs bg-muted/50 border-border text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button 
          asChild 
          variant="outline" 
          className=""
        >
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Read Paper</span>
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default PaperCard;