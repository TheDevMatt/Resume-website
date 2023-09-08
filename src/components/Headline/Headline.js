import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Headline.css';

const Headline = () => {
    return(
        <div className="headline-container">
        <h1 className="headline-welcome">Hello, I'm Mateusz, <br/>frontend developer</h1>
        <p className="headline-description">Computer Science Engineer, seeking to apply development <br/> and design skills to develop high-end web applications.</p>
        <button className="headline-button"><Link to="/ContactMe" style={{textDecoration:'none', color:'white'}}>Contact me</Link></button>
        </div>
    )
}

export default Headline;