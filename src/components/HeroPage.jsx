import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./HeroPage.css";

const skills = [
  "FullStack developer",
  "AI/ML engineer",
  "Data scientist/analyst",
  "Philosophy lover",
  "whatever else . . . "
];

function HeroPage() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 50,
    });

    skills.forEach((skill, index) => {
      typewriter
        .typeString(skill)
        .pauseFor(1500)
        .deleteAll();
    });

    typewriter.start();
  }, []);

  return (
    <section id="home" className="hero-page">
      <h1 className="myName">Hi, I'm <b className="bold">BENFATAH Yassine.</b></h1>
      <h4>I'm a <b className="bold typewriter"><span ref={typewriterRef}></span></b>.</h4>
    </section>
  );
}

export default HeroPage;
