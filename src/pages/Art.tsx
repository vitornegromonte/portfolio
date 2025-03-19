import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ArtCard from "@/components/ArtCard";

const Art = () => {
  const [selectedArt, setSelectedArt] = useState<null | {
    title: string;
    image: string;
    technique: string;
    year: string;
    description?: string;
  }>(null);
  
  const [filter, setFilter] = useState("all");
  
  const handleArtClick = (art: any) => {
    setSelectedArt(art);
  };
  
  const artworks = [
    {
      id: 1,
      title: "Life finds a way",
      image: "life.gif",
      technique: "Mathematics",
      year: "2025",
      description: "life and death; evolution and extinction; the cycle of life finds a way to continue.",
      category: "math"
    },
    {
      id: 2,
      title: "Lissajous 3:5",
      image: "public/lissa2.gif",
      technique: "Mathematics",
      year: "2025",
      description: "3:5 ratio",
      category: "math"
    },
    {
      id: 3,
      title: "Lissajous  3:4",
      image: "public/lissa1.gif",
      technique: "Mathematics",
      year: "2025",
      description: "3:4 ratio",
      category: "math"
    },

    {
      id: 4,
      title: "orange and teal-ish",
      image: "orange and teal.jpeg",
      technique: "Photography",
      year: "2019",
      description: "the sky just seemed to be beautiful that day",
      category: "photo"
    },
    {
      id: 5,
      title: "home",
      image: "orange.jpeg",
      technique: "Photography",
      year: "2024",
      description: "parents old orange tree",
      category: "photo"
    },
    {
      id: 6,
      title: "movie night",
      image: "cine.jpg",
      technique: "Photography",
      year: "2024",
      description: "\"I'm still here\" premiered at the 15th Janela Internacional de Cinema do Recife, with Walter Salles.",
      category: "photo"
    },
    {
      id: 7,
      title: "Rio seems fine",
      image: "rio.jpeg",
      technique: "Photography",
      year: "2020",
      description: "3AM - Guanabara Bay, Rio de Janeiro, Brazil",
      category: "photo"
    },
    {
      id: 8,
      title: "Neruda's Backyard",
      image: "neruda.jpg",
      technique: "Photography",
      year: "2019",
      description: "Pablo Neruda's backyard in Isla Negra, Chile. The poet's house is a museum now.",
      category: "photo"
    }
  ];
  
  const categories = [
    { id: "all", name: "All Works" },
    { id: "math", name: "Mathematics" },
    { id: "photo", name: "Photography" } 
  ];
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <main className="p-8">
        <div className="pt-8 pb-16">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">Hobby</span>
          <h1 className="text-gray-900 font-display text-3xl md:text-4xl mb-4">Art Gallery</h1>
          <p className="text-gray-600 max-w-2xl">
            Exploring the intersection of computer science, mathematics and artistic expression
            through photography, generative algorithms and creative coding.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8">
            <TabsList className="bg-gray-100 p-1">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setFilter(category.id)}
                  className="data-[state=active]:bg-accent/20"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={filter} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredArtworks.map(artwork => (
                <ArtCard 
                  key={artwork.id}
                  title={artwork.title}
                  image={artwork.image}
                  technique={artwork.technique}
                  year={artwork.year}
                  onClick={() => handleArtClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Dialog open={!!selectedArt} onOpenChange={(open) => !open && setSelectedArt(null)}>
        <DialogContent className="bg-white border-gray-200 text-gray-900 max-w-3xl">
          {selectedArt && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-md">
                <img 
                  src={selectedArt.image} 
                  alt={selectedArt.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-display mb-2">{selectedArt.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <span>{selectedArt.technique}</span>
                  <span className="text-gray-300">•</span>
                  <span>{selectedArt.year}</span>
                </div>
                <p className="text-gray-600">{selectedArt.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Art;
