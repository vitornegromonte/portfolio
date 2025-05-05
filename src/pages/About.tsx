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
import { title } from "process";

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

    return (
      <section ref={bioRef} className="py-16 section-fade-in">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="aspect-square w-full max-w-md rounded-xl overflow-hidden border border-accent/20 transition-all duration-300 hover:scale-102 hover:shadow-lg">
                  <img 
                    src="crew.jpg" 
                    alt="Vitor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full filter blur-[50px]"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue/20 rounded-full filter blur-[50px]"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-display mb-6">My Journey</h2>
              
              {!showFullBio ? (
                <>
                  <div className="prose text-muted-foreground">
                    <p className="mb-4">
                      Undergraduate Information Systems student at the Federal University of Pernambuco (UFPE), focused on machine learning and AI. Currently working as a researcher at Geraia (Generative AI and LLMs).
                    </p>
                    <p className="mb-4">
                      Co-founded Ligia (AI League at UFPE) and previously co-founded the startup redduo.ai. My research interests include computer vision and energy-efficient machine learning.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setShowFullBio(true)} 
                    variant="ghost"
                    className="text-muted-foreground hover:text-accent-foreground mt-3 transition-colors duration-200"
                  >
                    Long bio...
                  </Button>
                </>
              ) : (
                <div className="prose text-muted-foreground">
                  <p className="text-muted-foreground mb-4">
                  Undergraduate Information Systems student at the Federal University of Pernambuco (UFPE), focused on data science and machine learning. Served as a teaching assistant for Computational Creativity and Introduction to Deep Learning.
                  </p>
                  <p className="text-muted-foreground mb-4">
                  During my sophomore year, I joined the Brazilian National Institute of Software Engineering as a Research Assistant in the Smart Cities and IoT Group, advised by Kiev Gama, Ana Paula Chaves (NAU), and Danilo Ribeiro (Cesar School). I co-authored papers accepted at IHC 2024 and SBSI 2025.
                  </p>
                  <p className="text-muted-foreground mb-4">
                  At the end of that year, I joined the Geraia group, where I research Generative AI — evaluating large language models in Portuguese and other emerging languages. I'm also interested in energy-efficient generative models, with a focus on low-resource deployment scenarios.
                  </p>
                  <p className="text-muted-foreground mb-4">
                  I co-founded Ligia — UFPE’s Artificial Intelligence League, a nonprofit initiative dedicated to AI research, competitions, and education. As Outreach Director, I lead strategic partnerships, organize AI-centered events, and develop educational materials to promote AI understanding and application across disciplines.
                  </p>
                  <p className="text-muted-foreground mb-4">
                  I also co-founded the AI startup redduo.ai, where I briefly served as Chief Data Officer and co-Chief Technology Officer.
                  </p>
                  <p className="text-muted-foreground mb-4">
                  Outside academics, I enjoy photography, reading, sports, and creative coding.
                  </p>
                  <Button 
                    onClick={() => setShowFullBio(false)} 
                    variant="ghost"
                    className="text-muted-foreground hover:text-accent-foreground mt-3 transition-colors duration-200"
                  >
                    Short bio...
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
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">About Me</span>
          <h1 className="font-display mb-6">The Story So Far</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know my background, skills, and the journey that led me to become a data scientist and machine learning engineer.
          </p>
        </div>
      </section>
    );
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
      <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-medium">{title}</h4>
          <span className="text-accent">{period}</span>
        </div>
        <p className="text-muted-foreground mb-2">{organization}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );

    const Section = ({ title, items }: SectionProps) => (
      <div>
        <h3 className="text-xl font-display mb-6">{title}</h3>
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

    const educationItems = [
      {
        title: "B.Sc. in Information Systems",
        period: "2025 - Present",
        organization: "Federal University of Pernambuco",
        description: "After three years majoring in Statistics, transferred to Information Systems/Computer Science.",
      },
      {
        title: "B.Sc. in Statistics",
        period: "2022 - 2024",
        organization: "Federal University of Pernambuco",
        description: "Major in Statistics but with research focus on machine learning and computational intelligence.",
      },
    ];

    const professionalItems = [
      {
        title: "Machine Learning Engineer (Freelancer)",
        period: "2024 - Present",
        organization: "Confidential Client - Under NDA",
        description: "Designed and implemented a complete computer vision pipeline for edge deployment, including dataset creation, image pre-processing, model training, and inference. Managed cluster setup and optimization for efficient large-scale training. Work conducted under NDA, with a focus on scalable, resource-efficient solutions for AI on edge devices.",

      },
      {
        title: "Co-founder and Data Scientist",
        period: "2023 - 2024",
        organization: "redduo.ai",
        description: "Worked as a Data Scientist, conducting data analysis to support business intelligence initiatives and developing software automations. Additionally served as an AI Scientist, contributing to the development of core AI models with a focus on optimization and performance enhancement.",
      },

    ];

    const researchItems = [
      {
        title: "Researcher",
        period: "2023 - Present",
        organization: "Geraia, Federal University of Pernambuco",
        description: "Conducting research in Generative AI, focusing on evaluating Language Models in Portuguese for performance, scalability, and adaptability in emergent languages. Investigating energy-efficient AI for sustainable training and inference, optimizing generative models for deployment on low-resource devices.",
      },
      {
        title: "Research Assistant",
        period: "2023 - 2024",
        organization: "National Institute of Software Engineering (INES)",
        description: "While working at the Brazilian Ministry of Science and Technology - National Institute of Software Engineering I have assisted in developing quantitative tools for analysis and enhancing accessibility techniques for apps designed to support adults on the autism spectrum.",
      },
    ];


    const extracurricularItems = [
      {
        title: "Co-founder and Outreach Director",
        period: "2024 - Present",
        organization: "Ligia",
        description: "Ligia is a nonprofit based at the Federal University of Pernambuco, focused on research, competitions, and education in Artificial Intelligence. We aim to support innovation and develop talent within the university and nearby communities. Our work includes advancing research, building real-world AI solutions, and making AI and Data Science education more accessible through free, high-quality content.",
      },
    ];

    const teachingItems = [
      {
        title: "Introduction to Deep Learning",
        period: "2024 - Present",
        organization: "Federal University of Pernambuco",
        description: "Taught fundamental Deep Learning concepts, covering Recurrent Neural Networks (RNNs), Convolutional Neural Networks (CNNs), and Transformer architectures.",
      },
      {
        title: "Computational Creativity",
        period: "2023 - 2025",
        organization: "Federal University of Pernambuco",
        description: "Assisted in a Computational Creativity course that investigated the use of Generative AI (Diffusion Models, LLMs) in creative applications.",
      },
    ];

    return (
      <section ref={educationRef} className="py-16 bg-dark-accent section-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display mb-10 text-center">Education & Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <Section title="Education" items={educationItems} />
            </div>
            
            <Separator className="my-12 bg-white/10" />
            
            <div>
              <Section title="Work Experience" items={professionalItems} />
            </div>

            <Separator className="my-12 bg-white/10" />

            <div>
              <Section title="Research Experience" items={researchItems} />
            </div>

            <Separator className="my-12 bg-white/10" />

            <div>
              <Section title="Extracurricular" items={extracurricularItems} />
            </div>

            <Separator className="my-12 bg-white/10" />

            <div>
              <Section title="Teaching" items={teachingItems} />
            </div>
          </div>
        </div>
      </section>
    );
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
        <h3 className="text-xl font-display mb-6">{title}</h3>
        <div className={`grid grid-cols-4 ${showLabels ? 'sm:grid-cols-6' : ''} gap-4`}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`glass-morphism p-4 rounded-lg flex items-center justify-center ${showLabels ? 'flex-col' : ''} transition-all duration-300 hover:bg-accent/0 hover:scale-105 hover:shadow-lg`}
            >
              <img 
                src={item.icon} 
                className={`${showLabels ? 'h-12 w-12 mb-2' : 'h-16 w-16'}`} 
                alt={item.name || "Skill"} 
              />
              {showLabels && item.name && <span className="text-xs font-medium">{item.name}</span>}
            </div>
          ))}
        </div>
      </div>
    );

    const ResearchInterests = () => (
      <div>
        <h3 className="text-xl font-display mt-12 mb-6">Research Interests</h3>
        <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:bg-accent/0 hover:shadow-lg">
          <ul className="space-y-2 text-muted-foreground grid grid-cols-2 sm:grid-cols-2">
            {[
              "Bio-inspired computing", 
              "AI for Creative Applications", 
              "Computer Vision & Image Processing", 
              "Spiking Neural Networks", 
              "Energy-based models", 
              "Natural Language Processing"
            ].map((interest, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span> {interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

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
          <h2 className="text-3xl font-display mb-10 text-center">Skills & Interests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl mx-auto">
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
    <div className="bg-dark min-h-screen">
      <Header />
      <Bio />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
};

export default About;
