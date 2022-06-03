import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import logo from "../../assets/logo.png";
import './Home.css';
import About from "../About/About";


class Home extends Component{
  render(){
    return(
      <Router>
        <Fragment>
          <nav>
            <img src={logo} alt="sdfsdf" class="logo"/>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="#">MY BLOG</Link></li>
              <li><Link to="#">BLOG</Link></li>

            </ul>
          </nav>

          <br />
          <br />
          <Routes>
            <Route path="/" exact element={<Homepage/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            {/* <Route path="/user/register" element={<Register/>}></Route>
            <Route path="/blog/post" element={<Post/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route> */}

          </Routes>
      </Fragment>
      </Router>

    )
  }
}

export default Home;