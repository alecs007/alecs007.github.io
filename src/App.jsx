import "./App.css";
import React, { useState } from "react";
import languageData from "./lang/languageData";
import Header from "./sections/Header/Header";
import Sidebar from "./sections/Sidebar/Sidebar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ro" : "en");
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar
        onToggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}
        onToggleLanguage={toggleLanguage}
        text={languageData[language].sidebar}
      />
      <Hero text={languageData[language].hero} />
      <Projects text={languageData[language].projects} />
      <Skills text={languageData[language].skills} />
      <Contact text={languageData[language].contact} />
      <Footer text={languageData[language].footer} />
    </>
  );
}

export default App;
