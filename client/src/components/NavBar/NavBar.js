import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {

  
  render(){

    return(
      <div>
        <nav style={{'backgroundColor': 'black'}}>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="brand-logo center customNav">New York Times Article Search</li>
              <li><a onClick={()=>window.location.replace("/")} style={{"textDecoration": "none"}}>Home</a></li>
              {/* <li><NavLink to="/" style={{"textDecoration": "none"}}>Home</NavLink></li> */}
              <li><NavLink to="/saved" style={{"textDecoration": "none"}}>Saved Articles</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
  )} // End of Render
} // End of Class


export default NavBar;
