import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Certifications.css";

// Sample certification data (you can replace with your own)
const certifications = [
  {
    title: "Introduction to artificial intelligence with python",
    issuer: "Harvard university",
    date: "2023",
    imageUrl: "/assets/certifications/CS50AI.webp",
  },
  {
    title: "CCNAv7 : introduction aux réseaux",
    issuer: "Cisco",
    date: "2023",
    imageUrl: "/assets/certifications/CCNA-1.webp",
  },
  {
    title: "Introduction to neural networks with pytorch",
    issuer: "Coursera",
    date: "2023",
    imageUrl: "/assets/certifications/pytorch-intro.jpg", // Replace with real image URLs
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "2024",
    imageUrl: "/assets/certifications/machine-learning.jpg",
  },
  {
    title: "Introduction to docker",
    issuer: "Coursera",
    date: "2024",
    imageUrl: "/assets/certifications/intro-docker.jpg",
  },
  
];

function Certifications() {
  const [isHovering, setIsHovering] = useState(false); // Track hover state
  const [currentImage, setCurrentImage] = useState(""); // Store the current image URL
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Track cursor position

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle hover events
  const handleMouseEnter = (imageUrl) => {
    setIsHovering(true);
    setCurrentImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImage("");
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <Header text="Certifications" />
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="certification-item"
              onMouseEnter={() => handleMouseEnter(cert.imageUrl)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
            </li>
          ))}
        </ul>
        {/* Floating image that follows the cursor */}
        {isHovering && currentImage && (
          <div
            className="floating-image"
            style={{
              left: cursorPosition.x + 10, // Offset from cursor
              top: cursorPosition.y + 10,
            }}
          >
            <img src={currentImage} alt="Certification Preview" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;