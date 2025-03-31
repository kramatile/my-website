import React, { useEffect, useState } from "react";
import "./Navbar.css";

const sections = ["Home", "Presentation", "Projects", "Certifications"];

function Navbar({mainPageRef}) {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!mainPageRef.current) return; // Exit if ref isn’t ready
  
    const mainPage = mainPageRef.current; // Store ref value in a variable
    const handleScroll = () => {
      const scrollPosition = mainPage.scrollTop + 100; // Offset for navbar height
      sections.forEach((section) => {
        const sectionId = section.toLowerCase();
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };
  
    mainPage.addEventListener("scroll", handleScroll);
    return () => {
      mainPage.removeEventListener("scroll", handleScroll);
    };
  }, [mainPageRef]); // Depend on mainPageRef.current explicitly
  

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./assets/myLogo.png" alt="my Logo"></img>
      </div>
      <div className="nav-core">
      {sections.map((section) => (
        <aside key={section} className={`nav-item ${activeSection === section ? "active" : ""}`}>
          <a
            href={`#${section.toLowerCase()}`}
            className={`section-button ${activeSection === section ? "active" : ""}`}
            onClick={() => handleSectionClick(section)}
            aria-label={` ${section} `}
          >
            {section}
          </a>
        </aside>
      ))}
      </div>
      
    </nav>
  );
}

export default Navbar;