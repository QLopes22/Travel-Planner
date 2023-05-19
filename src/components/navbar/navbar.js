import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
// import {NavItems} from './components/NavItems'
import {FaFly} from 'react-icons/fa';

function Navbar() {
    return(
        <div className= 'navbar-container'>
            <div className= "icon">
              <FaFly className= "icon" />
            </div>

            <div className="nav-items">
              <ul>
                  <li><a href='/'>home</a> </li>
              </ul>
            </div>
        </div>
    )
}

export default Navbar;