import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

// Sample project data (you can move this to a separate file or pass as props)
const projects = [
  {
    imageUrl: "https://example.com/project1.jpg",
    title: "Portfolio Website",
    description:
      "A responsive portfolio built with React and CSS. This is a longer description that will be truncated in the preview but fully visible in the modal. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    links: [
      { url: "https://github.com/user/repo1", label: "GitHub", icon: "/github-icon.png" },
      { url: "https://live-demo1.com", label: "Live Demo" },
    ],
  },
  {
    imageUrl: "https://example.com/project2.jpg",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product filtering, and payment integration.",
    links: [
      { url: "https://github.com/user/repo2", label: "GitHub", icon: "/github-icon.png" },
      { url: "https://live-demo2.com", label: "Live Demo" },
    ],
  },
  {
    imageUrl: null, // No image example
    title: "Task Manager",
    description:
      "A simple task management app built with vanilla JavaScript. Helps users organize daily tasks efficiently.",
    links: [
      { url: "https://github.com/user/repo3", label: "GitHub", icon: "/github-icon.png" },
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