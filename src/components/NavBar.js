import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"
function NavBar(){
    
    return<>
      <nav className="navbar">
      <div className="container">
        <h1 className="logo"><span><img src="./logo-1.png" width="30" height="30"/>&nbsp;</span><span style={{fontWeight:'bold',color:'#d62828'}}>R</span>ishus <span style={{fontWeight:'bold',color:'#d62828'}}>I</span>nfotech</h1>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="./about">About Us</Link></li>
          <li><Link to="./services">Services</Link></li>
          <li><Link to="./contact">Contact Us</Link></li>
          <li><Link to="./resource">Resources</Link></li>
        </ul>
      </div>
    </nav>
    </>
}
 export default NavBar