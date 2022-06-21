import React from "react";
import { Helmet } from 'react-helmet';
import './Homepage.css';
import person from "../../assets/person.png";
import file_cv from "../../assets/CV-Aprianto-Halilintar.pdf";



const Homepage = () =>{
  return(    
    <div className="body-home">
	  <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="detail">
		    <p className="title-text">introduction</p>
		    <h1>Hello! I ‘m Apri. I am a <span>Software Engineer</span></h1>
		    <p className="desc-text">This is my official portfolio website to show
			  <br/> my work experience in web development
		    </p>
	    <a href={file_cv} download="CV-Aprianto-Halilintar.pdf">DOWNLOAD CV</a>
	  </div>
	  <div className="images">
		  <img src={person} className="person"/>
	  </div>
      
  </div>
  )
}





export default Homepage;