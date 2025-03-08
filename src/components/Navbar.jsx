import React, { useState } from "react";
import "./Navbar.css";

const sections = ["Home", "Presentation", "Projects", "Certifications"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <aside key={section} className={"nav-item"}>
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
    </nav>
  );
}

export default Navbar;