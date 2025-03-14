import React from "react";
import "./Header.css";

function  Header({text}){
    return(
        <div className="header">
            <h2>{text}</h2>
            <hr/>
        </div>
    )
}

export default Header;