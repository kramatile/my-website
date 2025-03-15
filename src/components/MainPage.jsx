import React, { useRef } from "react";
import ContactMeBar from "./ContactMeBar";
import "./MainPage.css"
import HeroPage from "./HeroPage";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Certifications from "./Certifications";
import ContactMe from "./ContactMe";

function MainPage(){
    const mainPageRef = useRef(null);
    
    return (
        <div className="main-page" ref={mainPageRef}>
            <ContactMeBar mainPageRef={mainPageRef}/>
            <div className="main-main-page" >
                <HeroPage></HeroPage>
            </div>
            <div className="present">
                <Presentation></Presentation>
            </div>
            <div className="Prjct">
                <Projects/>
            </div>
            <div className="certifications">
                <Certifications/>
            </div>
            <div id="contact-me"className="contact-me">
                <ContactMe></ContactMe>
            </div>
        </div>
    
    );

}

export default MainPage;