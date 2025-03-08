import React, { useState, useEffect } from "react";
import "./SectionScroller.css";

const sections = [
  { id: 1, content: "Welcome to Section 1", bgColor: "#FF5733" },
  { id: 2, content: "Explore Section 2", bgColor: "#33FF57" },
  { id: 3, content: "Discover Section 3", bgColor: "#3357FF" },
  { id: 4, content: "Enjoy Section 4", bgColor: "#FF33A1" }
];

const ImageScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX;
      const newIndex = Math.min(Math.floor(scrollX / window.innerWidth), sections.length - 1);
      setCurrentIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroller-container">
      <div className="scroller">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section ${index === currentIndex ? "visible" : "hidden"}`}
            style={{ backgroundColor: section.bgColor }}
          >
            <h1>{section.content}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
