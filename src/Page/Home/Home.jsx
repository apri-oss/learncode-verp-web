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
            <img src={logo} alt="" class="logo"/>
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><Link to="#">my work</Link></li>

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