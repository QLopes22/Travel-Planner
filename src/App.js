import React from 'react';
import './App.css';
// import {useState, useEffect} from 'react';
import Navbar from './components/navbar/navbar';
import Home from './routes/home'
import Packages from './routes/packages'
import About from './routes/about'
import Contact from './routes/contactUs'
import Account from './routes/account'
import Footer from './components/footer/footer'


const URL = `"https://test.api.amadeus.com/v1/security/oauth2/token" \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "grant_type=client_credentials&client_id={Z7VUfeLoGorwMOWDCCYJvFXiA1fd68WY}&client_secret={5U9OJRLsPNQhI0tk}"`;



function App() {

//   const [result, setResult] = useState(0);

//   useEffect(() => {
//   const fetchData = async () => {
//     const data = await fetch(URL)
//     data.json().then(json => {
//       console.log(json);
//     })
//   }
//   fetchData();
// }, []);

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
      case "/about":
        Component = About
        break
          case "/packages":
            Component = Packages
           break
            case "/contact-us":
              Component = Contact
              break 
                case "/account":
                  Component = Account
                  break
  }
  return (
    <div className="main-container">
      
      <Navbar />
      {/* <div><p>result = {result}</p></div> */}
      <Component />
      <Footer />
      
    </div>
  );
}

export default App;
