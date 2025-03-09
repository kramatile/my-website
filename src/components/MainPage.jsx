import React from "react";
import ContactMeBar from "./ContactMeBar";
import "./MainPage.css"
import HeroPage from "./HeroPage";

function MainPage(){

return (
    <div className="main-page">
        <ContactMeBar/>
        <div className="main-main-page">
            <HeroPage></HeroPage>
        </div>
    </div>
    
);

}

export default MainPage;