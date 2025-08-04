
import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Papers from "./pages/Papers";
import NotFound from "./pages/NotFound";

// Create routes with the correct base name
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/papers",
      element: <Papers />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "" }
);

export default router;
