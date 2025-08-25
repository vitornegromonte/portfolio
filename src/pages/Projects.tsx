
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
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
import { projects } from "@/lib/generatedContentLoader";

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
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="p-8">
        <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">
            My Work
          </span>
          <h1 className="font-display mb-6 text-foreground">Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my coding projects done in my free time.
          </p>
        </div>
        </section>

        <div className="space-y-4 mb-8 container mx-auto max-w-3xl">
          {/* Filter stats and controls */}
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{filteredProjects.length}</span> of {projects.length} projects
            </p>
            
            <div className="flex items-center gap-2">
              {(tagFilter || categoryFilter) && (
                <Button
                  onClick={clearFilters}
                  variant="outline" 
                  size="sm"
                  className="flex items-center text-muted-foreground border-border bg-card hover:bg-accent hover:text-accent-foreground"
                >
                  <X size={14} className="mr-1" /> Clear filters
                </Button>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 bg-card border-border hover:bg-accent hover:text-accent-foreground">
                    <Filter size={14} />
                    Filter Projects
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border-border text-popover-foreground" align="end">
                  <DropdownMenuLabel className="text-foreground">Categories</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem 
                      className={categoryFilter === null ? "bg-accent text-accent-foreground" : "text-muted-foreground focus:bg-accent/10 focus:text-accent"}
                      onClick={() => setCategoryFilter(null)}
                    >
                      All Categories
                    </DropdownMenuItem>
                    {allCategories.map(category => (
                      <DropdownMenuItem
                        key={category}
                        className={categoryFilter === category ? "bg-accent text-accent-foreground" : "text-muted-foreground focus:bg-accent/10 focus:text-accent"}
                        onClick={() => setCategoryFilter(category)}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  
                  <DropdownMenuSeparator className="bg-border" />
                  
                  <DropdownMenuLabel className="text-foreground">Technologies</DropdownMenuLabel>
                  <DropdownMenuGroup className="max-h-[200px] overflow-y-auto">
                    <DropdownMenuItem 
                      className={tagFilter === null ? "bg-accent text-accent-foreground" : "text-muted-foreground focus:bg-accent/10 focus:text-accent"}
                      onClick={() => setTagFilter(null)}
                    >
                      All Technologies
                    </DropdownMenuItem>
                    {allTags.map(tag => (
                      <DropdownMenuItem
                        key={tag}
                        className={tagFilter === tag ? "bg-accent text-accent-foreground" : "text-muted-foreground focus:bg-accent/10 focus:text-accent"}
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
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 px-3 py-1 flex items-center gap-1">
                  Category: {categoryFilter}
                  <button onClick={() => setCategoryFilter(null)} className="ml-1 hover:text-accent/50">
                    <X size={14} />
                  </button>
                </Badge>
              )}
              
              {tagFilter && (
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 px-3 py-1 flex items-center gap-1">
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
          <div className="text-center py-12 border border-border rounded-lg bg-card">
            <h3 className="text-lg font-medium text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters to find what you're looking for.</p>
            <Button 
              onClick={clearFilters}
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
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
