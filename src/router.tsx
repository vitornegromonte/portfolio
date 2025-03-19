import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Papers from "./pages/Papers";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

// Create routes with the correct base name
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/about",
      element: (
        <>
          <Sidebar />
          <main className="pl-16 md:pl-60">
            <About />
          </main>
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
          <Sidebar />
          <main className="pl-16 md:pl-60">
            <Projects />
          </main>
        </>
      ),
    },
    {
      path: "/papers",
      element: (
        <>
          <Sidebar />
          <main className="pl-16 md:pl-60">
            <Papers />
          </main>
        </>
      ),
    },
    {
      path: "/art",
      element: (
        <>
          <Sidebar />
          <main className="pl-16 md:pl-60">
            <Art />
          </main>
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Sidebar />
          <main className="pl-16 md:pl-60">
            <Contact />
          </main>
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Sidebar />
          <main className="pl-16 md:pl-60">
            <NotFound />
          </main>
        </>
      ),
    },
  ],
  { basename: "" }
);

export default router;
