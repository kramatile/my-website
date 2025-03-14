import React, { useState } from "react";
import Ettiquette from "./Ettiquette";
import "./Skills.css";

function Skills({ skillName, skillList }) {
  const [showEtiquette, setShowEtiquette] = useState(true); // Fixed typo in variable name

  // Prop validation
  if (!Array.isArray(skillList) || skillList.length === 0) {
    return <div className="skills-empty">No skills provided</div>;
  }

  // Toggle visibility of skills
  const handleToggle = () => {
    setShowEtiquette((prev) => !prev);
  };

  return (
    <div className="skill-container">
      <button
        className={`skill-name ${showEtiquette ? "active" : ""}`}
        onClick={handleToggle}
        aria-expanded={showEtiquette}
        aria-controls="skills-list"
      >
        {skillName}
        <span className="toggle-icon">{showEtiquette ? "−" : "+"}</span>
      </button>
      <div
        className={`skills ${showEtiquette ? "visible" : "hidden"}`}
        id="skills-list"
      >
        {skillList.map((skill, index) => (
          <Ettiquette key={`${skill}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;