import React from "react";
import './Homepage.css';
import person from "../../assets/person.png";



const Homepage = () =>{
  return(    
    <div className="body-home">
      <div className="detail">
		    <p className="title-text">introduction</p>
		    <h1>Hello! I ‘m Apri. I am a <span>Software Engineer</span></h1>
		    <p className="desc-text">This is my official portfolio website to show
			  <br/> my work experience in web development
		    </p>
	    <a href="#">DOWNLOAD CV</a>
	  </div>
	  <div className="images">
		  <img src={person} className="person"/>
	  </div>
      
  </div>
  )
}





export default Homepage;