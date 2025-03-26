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

    const handleScroll = () => {
      const scrollPosition = mainPageRef.current.scrollTop + 100; // Offset for navbar height
      sections.forEach((section) => {
        const sectionId = section === "Contact Me" ? "contact-me" : section.toLowerCase();
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
    
    mainPageRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (mainPageRef.current) {
        mainPageRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainPageRef]);

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