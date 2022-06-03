import React from "react";
import './About.css';
import person from "../../assets/person.png";


const About = () =>{
  return(
    <div className="full-body">
      <div className="header">
        <div className="header-left">
            <div className="header-left-profile-picture">
                <img src={person} alt=""/>
            </div>
        </div>
        <div className="header-right">
            <div className="header-profile">
                <p>ABOUT ME.</p>
            </div>
            <div className="header-text-profile">
              <p>I am a software engineer with a demonstrated history of working in the computer
                  software industry and I have proven experience in developing web-based
                  application for procurement system. I skilled using Ruby on Rails, React JS, CSS and
                  HTML to develop web-based application</p>
            </div>
        </div>
      </div>

      <div className="content-body">
        <div className="content">
          <p className="title-text-desc">E X P E R I E N C E</p>
          <br />

          <div className="content-left">
            <p lass="p-title"> Backend Web Developer</p>
            <p className="p-desc"> PT Virkea Empresa Sistema</p>
          </div>
          <div className="content-center">
            <p lass="p-title"> Part Time Backend Web Developer</p>
            <p className="p-desc"> PT Pendar Sinergi Utama</p>
          </div>
          <div className="content-right">
            <div className="content-text-experience">
              <p lass="p-title"> ICT Department Support</p>
              <p className="p-desc"> Assosiasi Perikanan Pole & Line dan
                  Handline Indonesia(AP2HI)</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="title-text-desc">S K I L L    &    E X P E R T I S E</p>
          <div className="footer-content">

            <div className="footer-content-left">
              <p lass="p-title"> Programming</p>
              <p className="p-desc"> 
                <br/>Ruby on Rails (RoR), React JS
                CSS, HTML, MVC,
                Database Management System
                (Postgresql, Mysql)
                <br/>
              </p>
            </div>

            <div className="footer-content-center">
              <p lass="p-title"> Software/Tools</p>
              <p className="p-desc"> Microsoft Office,Adobe Photoshop,
                  Bitbucket, Jira,Github, Postman API</p>
            </div>

            <div className="footer-content-right">
              <div className="content-text-experience">
                <p lass="p-title"> Communication</p>
                <p className="p-desc"> Bahasa Indonesia, English</p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
       
    </div>
  )
}

export default About;