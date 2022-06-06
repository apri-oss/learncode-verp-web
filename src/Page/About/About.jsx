import React from "react";
import './About.css';
// import person from "../../assets/person.png";


const About = () =>{
  return(
    <div className="body-content">
        <div className="about-card">
          <p className="title-text">about me</p>
          <br />
          <p className="desc-text">I am a software engineer with a demonstrated history of working in the computer software industry and I have proven experience in developing web-based application for procurement system. I skilled using Ruby on Rails, React JS, CSS and HTML to develop web-based application</p>
          <br />
          <br />
          <p className="title-text">experience</p>
          <br />

        </div>
        <div className="experience-card">

            <div className="column">
                <div className="card">
                  <div className="circle-container-left"></div>
                  <p className="experience-text">Lorem Ipsum is simply dummy 
                    text of the printing and
                    typesetting industry. 
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s</p>
                </div>
              </div>
            
              <div className="column">
                <div className="card">
                    <div className="circle-container-center"></div>
                  <p className="experience-text">Lorem Ipsum is simply dummy 
                    text of the printing and
                    typesetting industry. 
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s</p>
                </div>
              </div>
              
              <div className="column">
                <div className="card">
                    <div className="circle-container-right"> </div>
                  <p className="experience-text">Lorem Ipsum is simply dummy 
                    text of the printing and
                    typesetting industry. 
                    Lorem Ipsum has been the 
                    industry's standard dummy 
                    text ever since the 1500s</p>
                </div>
              </div>


        </div>

    </div>
    
  )
}

export default About;