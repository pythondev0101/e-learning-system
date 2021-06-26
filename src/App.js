
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;