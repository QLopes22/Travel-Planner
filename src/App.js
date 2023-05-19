import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Home from './components/home/home'
import Destination from './routes/destination'
import Tours from './routes/tours'
import ContactUs from './routes/contactUs'
import Account from './routes/account'

// import Map from './components/map/map';
// import List from './components/list/list';
// import placeDetails from './components/placeDetails/placeDetails';
// import Footer from './components/footer/footer';


function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Navbar />
      <Header />
      {/* <Map /> */}
      {/* <List /> */}
      {/* <PlaceDetails />  */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
