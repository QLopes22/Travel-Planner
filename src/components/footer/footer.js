import React from 'react';
import './footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const footer = () => {
    return(
        <div className= 'footer'>
            <div className='logo-side'>
                <h4>Hot Ballon Travel</h4>
                <p>Email: hotballoon@travel.com</p>
                <p>Call Us: +1 (800) 777-2224</p>
                <br />
                <p>49858 purple rd,
                    Random County Old Castle City,
                    Georgia 80001,
                    USA</p>
                    <p>Follow Us</p>
                    
                    <div>
                        <ul className='lil-icons'>
                            <li><a href='/'><FaFacebookSquare/></a></li>
                            <li><a href='/'><FaLinkedin/></a></li>
                            <li><a href='/'><FaTwitterSquare/></a></li>
                            <li><a href='/'><FaYoutube/></a></li>
                        </ul>
                    </div>
                    
            </div>

            <div className='site-middle'>
                <h4>Subscribe to our newsletter!</h4>
                <p>Be the first to receive discounts on new products and know more about our Ready-to-Go Destination by just subscribing.</p>
                <p>Enter your email*</p>  
                <input className='ft-input' type='text' placeholder='Email...'></input>
                <button className='footer-btn'>Subscribe</button>   
            </div>

            <div className='site-map'>
                <ul className='ft-list'>
                    <li><a href='/'></a>Business</li>
                    <li><a href='/'></a>Packages</li>
                    <li><a href='/'></a>Contact</li>
                    <li><a href='/'></a>Account</li>
                    <li><a href='/'></a>Gallery</li>
                    <li><a href='/'></a>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default footer;