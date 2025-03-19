import { useEffect, useState, useRef } from "react"; // Import useState
import Footer from "@/components/Footer";
import PaperCard from "@/components/PaperCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Thumb } from "@radix-ui/react-scroll-area";

const Papers = () => {
  const [activeTab, setActiveTab] = useState("papers"); // Track active tab
  const papersRef = useRef<HTMLDivElement>(null);
  const talksRef = useRef<HTMLDivElement>(null);
  
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

    const sections = [papersRef.current, talksRef.current];
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

  const papers = [
    {
      id: 1,
      title: "A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism",
      authors: "Danilo Monteiro Ribeiro, Felipe de Vasconcelos Melo, Vitor Cabral de Oliveira, Celeste Pereira, Ana Paula Chaves Steinmacher, Kiev Gama",
      conference: "Brazilian Symposium on Information Systems (SBSI)",
      year: "2025",
      abstract: "Addressing the need for more accessible applications for autistic adults, this mapping study reviews existing guidelines, frameworks, and evaluation instruments for mobile and web development.",
      tags: ["Software Engineering", "Accessibility"],
      pdfUrl: "https://www.researchgate.net/publication/384968223_A_Mapping_Review_to_Understand_Web_and_Mobile_Apps_Accessibility_for_Adults_with_Autism"
    },
    {
      id: 2,
      title: "A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps",
      authors: "Danilo M. Ribeiro, Felipe V. Melo, Vitor Negromonte, Gabriel W. Matias, Adna Farias, Celeste Azul, Ana Paula Chaves, Kiev Gama.",
      conference: "Brazilian Symposium on Human Factors in Computing Systems (IHC)",
      year: "2024",
      abstract: "This study investigates urban mobility app accessibility for autistic individuals. Using the GAIA framework, we analyze apps to identify design shortcomings related to visual and auditory experience, specifically the lack of customizable interface options (beyond visual impairment features) to reduce cognitive load.",
      tags: ["Software Engineering", "Accessibility"],
      pdfUrl: "https://sol.sbc.org.br/index.php/ihc/article/view/32895"
    }
  ];

  const talks = [
    {
      id: 1,
      title: "Parkinson Diagnosis using Computer Vision",
      event: "Campus Party",
      location: "Recife, Brazil",
      date: "Sep 2024",
      description: "Explored the current state and future directions of AI in Parkinson Diagnosys.",
      slidesUrl: "/cp_keynote.pdf",
      thumbnail: "/cp_thumbnail.jpg"
    }
  ];

 
  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">
            Research
          </span>
          <h1 className="font-display mb-6">Papers & Talks</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My published research papers, along with presentations and invited
            talks at conferences, events and seminars.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-4 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="papers" className="w-full" onValueChange={setActiveTab}>
            {/* Tab List */}
            <div className="flex justify-center mb-8">
              <TabsList className="glass-morphism p-1">
                <TabsTrigger
                  value="papers"
                  className="data-[state=active]:bg-accent/20 "
                >
                  Academic Papers
                </TabsTrigger>

                <TabsTrigger
                  value="talks"
                  className="data-[state=active]:bg-accent/20"
                >
                  Talks & Presentations
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Papers Tab */}
            <TabsContent value="papers" key="papers" className="mt-0">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-500 ease-in-out opacity-100 ">
                  {papers.length > 0 ? (
                    papers.map((paper) => (
                      <PaperCard
                        key={paper.id}
                        title={paper.title}
                        authors={paper.authors}
                        conference={paper.conference}
                        year={paper.year}
                        abstract={paper.abstract}
                        tags={paper.tags}
                        pdfUrl={paper.pdfUrl}
                      />
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center">
                      No academic papers found.
                    </p>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Talks Tab */}
            <TabsContent value="talks" key="talks" className="mt-0">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 transition-opacity duration-500 ease-in-out opacity-100">
                  {talks.length > 0 ? (
                    talks.map((talk) => (
                      <div
                        key={talk.id}
                        className="glass-morphism p-6 rounded-xl hover-card"
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/4">
                            <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
                              {talk.thumbnail ? (
                                <img 
                                  src={talk.thumbnail} 
                                  alt={`${talk.title} presentation thumbnail`}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <svg
                                    className="w-12 h-12 text-accent/60"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M14.752 11.168l-6.304-3.704a1 1 0 00-1.448.89v7.272a1 1 0 001.448.89l6.304-3.704a1 1 0 000-1.78z"
                                    ></path>
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">
                              {talk.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {talk.event} - {talk.date}
                            </p>
                            <p className="mt-2 text-muted-foreground">
                              {talk.description}
                            </p>
                            <div className="mt-4 flex space-x-4">
                              {talk.videoUrl && (
                                <a 
                                  href={talk.videoUrl} 
                                  className="text-accent hover:underline flex items-center gap-1"
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M14.752 11.168l-6.304-3.704a1 1 0 00-1.448.89v7.272a1 1 0 001.448.89l6.304-3.704a1 1 0 000-1.78z"
                                    ></path>
                                  </svg>
                                  Watch
                                </a>
                              )}
                              {talk.slidesUrl && (
                                <a 
                                  href={talk.slidesUrl} 
                                  className="text-accent hover:underline flex items-center gap-1"
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                  Slides
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center">
                      No talks available.
                    </p>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Papers;