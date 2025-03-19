
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Papers from "./pages/Papers";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

// Layout component to handle conditional sidebar rendering
const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <>
      {!isHome && <Sidebar />}
      <main className={!isHome ? "pl-16 md:pl-60" : ""}>
        {children}
      </main>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/papers" element={<Layout><Papers /></Layout>} />
          <Route path="/art" element={<Layout><Art /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
