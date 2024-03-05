import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/home";
import AboutPage from "../views/about";
import ProjectsPage from "../views/projects";

const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
