import Educations from "./components/Educations";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Root from "./components/Root";
import Resume from "./components/Resume";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "education",
        element: <Educations />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "certification",
        element: <Certification />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
