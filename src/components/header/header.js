import React from 'react';
import './header.css';

const header = () => {
    return(
        <div className= 'header'>
          <div className="search-bar">
            <input type="text" placeholder="where would you like to go?" ></input>
            <button>Explore Now</button>
          </div>
        </div>
    )
}

export default header;