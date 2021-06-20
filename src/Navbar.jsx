import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(){
    return(
<>
<nav className="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/Aboutus">About Us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/Contactus">Contact Us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/Wp">What Purpose Do We Serve</NavLink>
    </li>
  </ul>

</nav>
</>
    );
}
export default Navbar;