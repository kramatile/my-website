import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./HeroPage.css";

const skills = [
  "FullStack developper",
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

  const birth_date = new Date("2004-02-24");
  const today = new Date();
  var diff = Math.floor((today - birth_date) / (1000 * 60 * 60 * 24 * 365));
  return (
    <section id="home" className="hero-page">
      <div className="pres">
        <h1 className="myName">Hi, I'm <b className="bold">BENFATAH Yassine.</b></h1>
        <h4>I'm a <b className="bold typewriter"><span ref={typewriterRef}></span></b>.</h4>
        <p>Hi, i'm a {diff} years old engineering student in data science and AI, i'm passionate about software developpement 
          and eager to learn more about the world of tech.
          I moreover believe that a man is only alive by action, discovery and mystery so dont hesitate to hit me up if you have a mystery to solve. 
        </p>
        <a className="contact-button" href="#contact-me">Contact me</a>
      </div>
      
    </section>
  );
}

export default HeroPage;
