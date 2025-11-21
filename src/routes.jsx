import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "project", element: <Project /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
