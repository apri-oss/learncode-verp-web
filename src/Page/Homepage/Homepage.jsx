import React from "react";
import './Homepage.css';
import shape from "../../assets/shape.png";
import person from "../../assets/person.png";



const Homepage = () =>{
  return(    
    <div className="body-home">
      <div className="detail">
        <h1>I'm <span>Apri</span></h1>
        <p>This is my official portfolio website to show
            <br /> my work experience in web development
        </p>
      <a href="#">DOWNLOAD CV</a>
      </div>

      <div className="images">
        <img src={shape} className="shape" alt=""/>
        <img src={person} className="person" alt=""/>
      </div>
      
    </div>
  )
}





export default Homepage;