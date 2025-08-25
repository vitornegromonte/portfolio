import { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";
import PaperCard from "@/components/PaperCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { papers, talks } from "@/lib/generatedContentLoader";

const Papers = () => {
  const [activeTab, setActiveTab] = useState("papers");
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

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-accent mb-2 inline-block">
            Research
          </span>
          <h1 className="font-display mb-6 text-foreground">Papers & Talks</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My published research papers, along with presentations and invited
            talks at conferences, events and seminars.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-4 px-4 ">
        <div className="container mx-auto">
          <Tabs defaultValue="papers" className="w-full" onValueChange={setActiveTab}>
            {/* Tab List */}
            <div className="flex justify-center mb-8">
              <TabsList className="glass-morphism p-1 bg-card border border-border">
                <TabsTrigger
                  value="papers"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Academic Papers
                </TabsTrigger>

                <TabsTrigger
                  value="talks"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Talks & Presentations
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Papers Tab */}
            <TabsContent value="papers" key="papers" className="mt-0">
              <div className="container mx-auto max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 transition-opacity duration-500 ease-in-out opacity-100 container mx-auto">
                  {papers.length > 0 ? (
                    papers.map((paper, index) => (
                      <PaperCard
                        key={index}
                        title={paper.title}
                        authors={paper.authors}
                        conference={paper.conference}
                        year={paper.year}
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
              <div className="container mx-auto max-w-3xl">
                <div className="grid grid-cols-1 gap-6 transition-opacity duration-500 ease-in-out opacity-100">
                  {talks.length > 0 ? (
                    talks.map((talk, index) => (
                      <div
                        key={index}
                        className="glass-morphism p-6 rounded-xl hover-card bg-card border border-border"
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
                            <h3 className="text-xl font-semibold text-foreground">
                              {talk.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {talk.event} - {talk.date}
                            </p>
                            <p className="mt-2 text-muted-foreground">
                              {talk.content.split('\n\n')[0].replace('#', '').trim()}
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