import React from 'react';
import './navbar.css';
import {FaFly} from 'react-icons/fa'

const Navbar = () => {
    return(
        <div className= 'navbar-container'>
            <div className= "icon">
              <FaFly className= "icon" />
            </div>

            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>Destinations</li>
                <li>Tours</li>
                <li>Contact Us</li>
                <li>Account</li>
              </ul>
            </div>
        </div>
    )
}

export default Navbar;