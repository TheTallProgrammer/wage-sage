import React from 'react';
import '../styles/Navbar.css';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='local-navbar-container'>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
