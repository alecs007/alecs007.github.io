import "./App.css";
import React, { useState } from "react";
import Header from "./sections/Header/Header";
import Sidebar from "./sections/Sidebar/Sidebar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar onToggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
