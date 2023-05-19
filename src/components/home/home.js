import React from 'react';
import './home.css';

const home = () => {
    return (
        <div className='home'>
           <h1>home</h1>
            <div className='overlay'>
                <img src='https://i0.wp.com/media4.giphy.com/media/l41lQJIpc7GHzWlry/giphy.gif' muted autoPlay loop type="video/mp4"></img>
            </div>

            <div className= "homeContent-container">
                <p>Package Deals</p>
                <h2>Search Excursions</h2>
            </div>

            <div className="destination">
                <form>
                    <input type="text" name="name" placeholder="Full Name..."></input>
                    <input type="text" name="name" placeholder="Email..."></input>
                    <input type="text" name="name" placeholder="Mobile..."></input>
                    <h2>Trip Details</h2>
                    <p>Select Destination:</p>
                    <input type="text" name="name" placeholder="Destination of Interest..."></input>
                    {/* calendar */}
                    <p>Select Date:</p>
                    <input type="date" name="date"></input>
                    <input type="number" name="name" placeholder="how many adults?"></input>
                    <input type="number" name="name" placeholder="how many kids?"></input>
                    <input type="number" name="name" placeholder="how many seniors?"></input>
                    <input type="number" name="name" placeholder="Additional Notes..."></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
    )
}

export default home;