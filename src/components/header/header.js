import React from 'react';
import './header.css';
import {FaSearchLocation} from 'react-icons/fa';
import { Autocomplete } from '@react-google-maps/api';

const header = () => {
    return(
        <div className= 'header'>
          <div className="search-bar">
            <input type="text" placeholder="where would you like to go?" ></input>
            <FaSearchLocation className='icon-search' />
            {/* <Autocomplete> */}
              <div className="search">
                <div className= "searchIcon"></div>
              </div>
            {/* </Autocomplete> */}
            <button>Explore Now</button>
          </div>
        </div>
    )
}

export default header;