
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect } from "react";
import AboutUs from './pages/AboutUs';
import AOS from "aos";
import "aos/dist/aos.css";
import PrimeNavBar2 from './components/PrimeNavBar2';
import ScrollToTop from './components/ScrollToTop';


function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    
    <>
      
      <Router>
        <PrimeNavBar2 />
        <ScrollToTop />
        <Switch>
          <Route path='/home' exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;