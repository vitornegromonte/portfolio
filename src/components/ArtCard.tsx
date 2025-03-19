
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArtCardProps {
  title: string;
  image: string;
  technique: string;
  year: string;
  onClick?: () => void;
}

const ArtCard = ({
  title,
  image,
  technique,
  year,
  onClick
}: ArtCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden hover-card cursor-pointer bg-transparent border-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="transform transition-transform duration-300 translate-y-0">
            <Badge variant="outline" className="bg-black/15 text-white text-xs mb-2">
              {technique}
            </Badge>
            <h4 className="text-white font-display mb-1">{title}</h4>
            <p className="text-white/70 text-sm">{year}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArtCard;
