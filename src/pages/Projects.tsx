
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/ProjectsData";
import Footer from "@/components/Footer";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Extract unique tags and categories from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const allCategories = [...new Set(projects.flatMap(project => project.categories))];
  
  // Filter projects based on selected tag and category
  const filteredProjects = projects.filter(project => {
    const matchesTag = tagFilter ? project.tags.includes(tagFilter) : true;
    const matchesCategory = categoryFilter ? project.categories.includes(categoryFilter) : true;
    return matchesTag && matchesCategory;
  });
  
  // Clear all filters function
  const clearFilters = () => {
    setTagFilter(null);
    setCategoryFilter(null);
  };
  
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="p-8">
        <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">
            My Work
          </span>
          <h1 className="font-display mb-6">Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my coding projects done in my free time.
          </p>
        </div>
        </section>

        <div className="space-y-4 mb-8 container mx-auto max-w-3xl">
          {/* Filter stats and controls */}
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">{filteredProjects.length}</span> of {projects.length} projects
            </p>
            
            <div className="flex items-center gap-2">
              {(tagFilter || categoryFilter) && (
                <Button
                  onClick={clearFilters}
                  variant="outline" 
                  size="sm"
                  className="flex items-center text-gray-500 border-gray-300"
                >
                  <X size={14} className="mr-1" /> Clear filters
                </Button>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter size={14} />
                    Filter Projects
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem 
                      className={categoryFilter === null ? "bg-accent text-white" : ""}
                      onClick={() => setCategoryFilter(null)}
                    >
                      All Categories
                    </DropdownMenuItem>
                    {allCategories.map(category => (
                      <DropdownMenuItem
                        key={category}
                        className={categoryFilter === category ? "bg-accent text-white" : ""}
                        onClick={() => setCategoryFilter(category)}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Technologies</DropdownMenuLabel>
                  <DropdownMenuGroup className="max-h-[200px] overflow-y-auto">
                    <DropdownMenuItem 
                      className={tagFilter === null ? "bg-accent text-white" : ""}
                      onClick={() => setTagFilter(null)}
                    >
                      All Technologies
                    </DropdownMenuItem>
                    {allTags.map(tag => (
                      <DropdownMenuItem
                        key={tag}
                        className={tagFilter === tag ? "bg-accent text-white" : ""}
                        onClick={() => setTagFilter(tag)}
                      >
                        {tag}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Active filters display */}
          {(tagFilter || categoryFilter) && (
            <div className="flex flex-wrap gap-2 animate-fade-in">
              {categoryFilter && (
                <Badge variant="outline" className="bg-accent/10 text-accent px-3 py-1 flex items-center gap-1">
                  Category: {categoryFilter}
                  <button onClick={() => setCategoryFilter(null)} className="ml-1 hover:text-accent/50">
                    <X size={14} />
                  </button>
                </Badge>
              )}
              
              {tagFilter && (
                <Badge variant="outline" className="bg-accent/10 text-accent px-3 py-1 flex items-center gap-1">
                  Technology: {tagFilter}
                  <button onClick={() => setTagFilter(null)} className="ml-1 hover:text-accent/50">
                    <X size={14} />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 container mx-auto max-w-3xl">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              detailedDescription={project.detailedDescription}
              image={project.image}
              tags={project.tags}
              categories={project.categories}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              className="h-full"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 border border-gray-100 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
            <Button 
              onClick={clearFilters}
              variant="default"
              className="bg-accent hover:bg-accent/50"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
