
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { useCallback, useState } from "react";
import TransparentButton from './components/TransparentButton';
import ServicesPage from './pages/ServicesPage';
import PrimeNavBar from './components/PrimeNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import MenuIcon from '@material-ui/icons/Menu';
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
    </>
  );
}

export default App;