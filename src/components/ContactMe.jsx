import React from "react";
import "./ContactMe.css";

function ContactMe(){
    return (
        <div className="contact-me-element">
          <h1>Let's get in touch</h1> 
          <h4>I am eager to learn new things, and face the unknown here is my <a href="https://www.linkedin.com/in/yassine-ben-fatah/" target="_blank" rel="noreferrer">linkedin</a></h4>
          <a className="mailto" href="mailto:benfatah.yassine04@gmail.com?subject=Collaboration&body=Hi,let's collaborate" target="_blank" rel="noopener noreferrer">Email me !</a>
        </div>
    );
}

export default ContactMe;