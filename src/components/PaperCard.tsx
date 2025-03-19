import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink } from "lucide-react";

interface PaperCardProps {
  title: string;
  authors: string;
  conference: string;
  year: string;
  abstract: string;
  tags: string[];
  pdfUrl: string;
}

const PaperCard = ({
  title,
  authors,
  conference,
  year,
  abstract,
  tags,
  pdfUrl,
}: PaperCardProps) => {
  return (
    <Card className="bg-primary-100 border border-primary-300 overflow-hidden hover:bg-primary-200 hover:shadow-lg transition-all duration-300">
      <div className="p-5">
        <div className="flex items-center gap-2 text-secondary-700 text-sm mb-2">
          <CalendarDays size={14} />
          <span>{year}</span>
          <span className="px-2 text-secondary-500">•</span>
          <span>{conference}</span>
        </div>
        
        <h3 className="text-xl font-display text-primary-900 mb-2">{title}</h3>
        <p className="text-secondary-600 text-sm mb-3">{authors}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs text-primary-700 border-primary-500">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-secondary-600 text-sm mb-4 line-clamp-3">{abstract}</p>
        
        <Button asChild variant = "outline" className="gap-2">
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
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