import { useState } from "react";
import "./assets/css/index.css";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
