import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "@/components/ui/collapsible";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import { aboutContent } from "@/lib/generatedContentLoader";

const About = () => {
  // Refs for sections that will fade in
  const bioRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [bioRef.current, educationRef.current, skillsRef.current];
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Bio component with expandable content
  const Bio = () => {
    const [showFullBio, setShowFullBio] = useState(false);

    // Split bio content into short and long parts
    const bioContent = aboutContent.bio.content;
    const longBioStart = bioContent.indexOf('<!-- LONG_BIO_START -->');
    const longBioEnd = bioContent.indexOf('<!-- LONG_BIO_END -->');
    
    const shortBio = longBioStart > -1 ? bioContent.substring(0, longBioStart).trim() : bioContent;
    const longBio = longBioStart > -1 && longBioEnd > -1 ? 
      bioContent.substring(longBioStart + 24, longBioEnd).trim() : 
      bioContent;

    return (

      <section ref={bioRef} className="py-16 section-fade-in max-w-3xl mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">            
            <div className="">
              <h2 className="text-3xl font-display mb-6 text-foreground">My Journey</h2>
              
              {!showFullBio ? (
                <>
                  <div className="prose text-muted-foreground">
                    {shortBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <Button 
                    onClick={() => setShowFullBio(true)} 
                    variant="outline"
                    className="text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    Long bio
                  </Button>
                </>
              ) : (
                <div className="prose text-muted-foreground">
                  {longBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
                  <Button 
                    onClick={() => setShowFullBio(false)} 
                    variant="outline"
                    className="text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    Short bio
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Header component
  const Header = () => {
    return (
      <section className="">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">About Me</span>
          <h1 className="font-display mb-6 text-foreground">The Story So Far</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know my background, skills, and the journey that led me to become a data scientist and machine learning engineer.
          </p>
        </div>
      </section>
    );
  };

  // Parse experiences from markdown content with improved logic
  const parseExperiences = (content: string) => {
    const sections: Record<string, any[]> = {
      education: [],
      work: [],
      research: [],
      extracurricular: [],
      teaching: []
    };
    
    const lines = content.split('\n');
    let currentSection = '';
    let currentItem: any = null;
    let descriptionLines: string[] = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Check for section headers
      if (trimmedLine === '## Education') {
        // Save previous item if exists
        if (currentItem && currentSection) {
          currentItem.description = descriptionLines.join(' ');
          sections[currentSection].push(currentItem);
        }
        currentSection = 'education';
        currentItem = null;
        descriptionLines = [];
        continue;
      } else if (trimmedLine === '## Work Experience') {
        // Save previous item if exists
        if (currentItem && currentSection) {
          currentItem.description = descriptionLines.join(' ');
          sections[currentSection].push(currentItem);
        }
        currentSection = 'work';
        currentItem = null;
        descriptionLines = [];
        continue;
      } else if (trimmedLine === '## Research Experience') {
        // Save previous item if exists
        if (currentItem && currentSection) {
          currentItem.description = descriptionLines.join(' ');
          sections[currentSection].push(currentItem);
        }
        currentSection = 'research';
        currentItem = null;
        descriptionLines = [];
        continue;
      } else if (trimmedLine === '## Extracurricular') {
        // Save previous item if exists
        if (currentItem && currentSection) {
          currentItem.description = descriptionLines.join(' ');
          sections[currentSection].push(currentItem);
        }
        currentSection = 'extracurricular';
        currentItem = null;
        descriptionLines = [];
        continue;
      } else if (trimmedLine === '## Teaching') {
        // Save previous item if exists
        if (currentItem && currentSection) {
          currentItem.description = descriptionLines.join(' ');
          sections[currentSection].push(currentItem);
        }
        currentSection = 'teaching';
        currentItem = null;
        descriptionLines = [];
        continue;
      }
      
      // Check for new item
      if (trimmedLine.startsWith('- **') && currentSection) {
        // Save previous item if exists
        if (currentItem) {
          currentItem.description = descriptionLines.join(' ');
          sections[currentSection].push(currentItem);
        }
        
        // Start new item
        const titleMatch = trimmedLine.match(/- \*\*(.*?)\*\*/);
        currentItem = {
          title: titleMatch ? titleMatch[1] : '',
          period: '',
          organization: '',
          description: ''
        };
        descriptionLines = [];
      } else if (currentItem && trimmedLine.match(/^\d{4} - (?:Present|\d{4})/)) {
        currentItem.period = trimmedLine;
      } else if (currentItem && trimmedLine && !trimmedLine.startsWith('##') && !trimmedLine.startsWith('- **')) {
        if (!currentItem.organization) {
          currentItem.organization = trimmedLine;
        } else {
          descriptionLines.push(trimmedLine);
        }
      }
    }
    
    // Don't forget the last item
    if (currentItem && currentSection) {
      currentItem.description = descriptionLines.join(' ');
      sections[currentSection].push(currentItem);
    }
    
    return sections;
  };

  // Education and Experience component
  const Education = () => {
    interface SectionItem {
      title: string;
      period: string;
      organization: string;
      description: string;
    }

    interface SectionProps {
      title: string;
      items: SectionItem[];
    }

    const ExperienceItem = ({ title, period, organization, description }: SectionItem) => (
      <div className="glass-morphism p-6 border border-border rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-card">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-medium text-foreground">{title}</h4>
          <span className="text-accent">{period}</span>
        </div>
        <p className="text-muted-foreground mb-2">{organization}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );

    const Section = ({ title, items }: SectionProps) => (
      <div>
        <h3 className="text-xl font-display mb-6 text-foreground">{title}</h3>
        <div className="space-y-8">
          {items.map((item, index) => (
            <ExperienceItem
              key={index}
              title={item.title}
              period={item.period}
              organization={item.organization}
              description={item.description}
            />
          ))}
        </div>
      </div>
    );

    // Parse experiences from markdown
    const experiences = parseExperiences(aboutContent.experiences.content);
    const educationItems = experiences.education;
    const professionalItems = experiences.work;
    const researchItems = experiences.research;
    const extracurricularItems = experiences.extracurricular;
    const teachingItems = experiences.teaching;

    return (
      <section ref={educationRef} className="py-16 section-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display mb-10 text-center text-foreground">Education & Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <Section title="Education" items={educationItems} />
            </div>
            
            <Separator className="my-12 bg-border" />
            
            <div>
              <Section title="Work Experience" items={professionalItems} />
            </div>

            <Separator className="my-12 bg-border" />

            <div>
              <Section title="Research Experience" items={researchItems} />
            </div>

            <Separator className="my-12 bg-border" />

            <div>
              <Section title="Extracurricular" items={extracurricularItems} />
            </div>

            <Separator className="my-12 bg-border" />

            <div>
              <Section title="Teaching" items={teachingItems} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Parse skills from markdown content with improved logic
  const parseSkills = (content: string) => {
    const sections: Record<string, string[]> = {
      programming: [],
      tools: [],
      interests: []
    };
    
    const lines = content.split('\n');
    let currentSection = '';
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine === '## Programming Languages') {
        currentSection = 'programming';
        continue;
      } else if (trimmedLine === '## Tools & Frameworks') {
        currentSection = 'tools';
        continue;
      } else if (trimmedLine === '## Research Interests') {
        currentSection = 'interests';
        continue;
      }
      
      if (trimmedLine.startsWith('- ') && currentSection) {
        const skill = trimmedLine.substring(2);
        sections[currentSection].push(skill);
      }
    }
    
    return sections;
  };

  // Skills component
  const Skills = () => {
    interface SkillItem {
      icon: string;
      name?: string;
    }

    interface SkillsGroupProps {
      title: string;
      items: SkillItem[];
      showLabels?: boolean;
    }

    const SkillsGroup = ({ title, items, showLabels = false }: SkillsGroupProps) => (
      <div>
        <h3 className="text-xl font-display mb-6 text-foreground">{title}</h3>
        <div className={`grid grid-cols-4 ${showLabels ? 'sm:grid-cols-6' : ''} gap-4`}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`glass-morphism p-4 rounded-lg flex items-center justify-center ${showLabels ? 'flex-col' : ''} transition-all duration-300 hover:bg-accent/5 hover:scale-105 hover:shadow-lg bg-card border border-border`}
            >
              <img 
                src={item.icon} 
                className={`${showLabels ? 'h-12 w-12 mb-2' : 'h-16 w-16'}`} 
                alt={item.name || "Skill"} 
              />
            </div>
          ))}
        </div>
      </div>
    );

    const ResearchInterests = () => {
      const skills = parseSkills(aboutContent.interests.content);
      const interests = skills.interests;
      
      return (
        <div>
          <h3 className="text-xl font-display mt-12 mb-6 text-foreground">Research Interests</h3>
          <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:bg-accent/5 hover:shadow-lg bg-card border border-border">
            <ul className="space-y-2 text-muted-foreground grid grid-cols-1 sm:grid-cols-1">
              {interests.map((interest, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span> {interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

    const programmingLanguages = [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-plain.svg" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" },
    ];

    const toolsAndFrameworks = [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", name: "Scikit-learn" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", name: "NumPy" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", name: "Matplotlib" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", name: "Git" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreeSQL" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", name: "FastAPI" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg", name: "Plotly" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", name: "OpenCV" },
    ];

    return (
      <section ref={skillsRef} className="py-16 section-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display mb-10 text-center text-foreground">Skills & Interests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-3xl mx-auto">
            <SkillsGroup title="Programming Languages" items={programmingLanguages} />
            
            <div>
              <SkillsGroup title="Tools & Frameworks" items={toolsAndFrameworks} showLabels={true} />
              <ResearchInterests />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20 px-4">
        <Header />
        <Bio />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default About;