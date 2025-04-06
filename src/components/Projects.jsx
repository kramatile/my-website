import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

// Sample project data (you can move this to a separate file or pass as props)
const projects = [
  {
    imageUrl: "./assets/portfolio.webp",
    title: "Portfolio Website",
    description:
      "A responsive portfolio built with React. This is a static website designed to display my projects and achievements in a fun and creative way !",
    links: [
      { url: "https://github.com/user/repo1", label: "GitHub", icon: "./assets/github-logo.png" },
      { url: "https://benfatahyassine.netlify.app/", label: "Live Demo" },
    ],
  },
  {
    imageUrl: "./assets/kidney.webp",
    title: "Kidney tumor detection",
    description:
      "This is a website desgined with react and flask to display the results of CNN that detects tumors and stones in kidney images (tensorflow).",
    links: [
      { url: "https://github.com/kramatile/kidney-tumor-prediction-app", label: "GitHub", icon: "./assets/github-logo.png" }
    ],
  },
  {
    imageUrl: "./assets/descent.webp", 
    title: "Deep Learning Library",
    description:
      "I have developped deep neural and cnn's from scratch using maths and numpy",
    links: [
      { url: "https://github.com/kramatile/Deep-Learning-from-Scratch", label: "GitHub", icon: "./assets/github-logo.png" },
    ],
  },
  {
    imageUrl: null, 
    title: "Tweets sentiment analysis",
    description:
      "I have developped a tweets sentiment analysis plateform using spacy",
    links: [
      { url: "https://github.com/user/repo3", label: "GitHub", icon: "./assets/github-logo.png" },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <Header text="Projects" />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;