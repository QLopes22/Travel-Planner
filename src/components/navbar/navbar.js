import React from 'react';
import './navbar.css';
import {FaFly} from 'react-icons/fa';

function Navbar() {
    return(
        <div className= 'navbar-container'>
            <div className= "icon">
              <a href="/"><img src='/images/full-logo.png' className= "icon" /></a>
            </div>
              

            <div className="nav-items">
              <ul className='nav-list'>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/packages'>Packages</a></li>
                  <li><a href='/contact-us'>Contact us</a></li>
                  <li><a href='/account'>Account</a></li>
              </ul>
            </div>
        </div>
    )
}

export default Navbar;