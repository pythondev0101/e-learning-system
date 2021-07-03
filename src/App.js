
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { useEffect } from "react";
import AboutUs2 from './pages/AboutUs2';
import AboutUs from './pages/AboutUs';
import AOS from "aos";
import "aos/dist/aos.css";
import PrimeNavBar2 from './components/PrimeNavBar2';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import Branches from './pages/Branches';


function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

 
  return (

    
    <>
      
      <Router>
        <Redirect to="/home" />
        <PrimeNavBar2 />
        <ScrollToTop />
        <Switch>
          <Route path='/home' exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
        <Switch>
          <Route path='/contact-us' exact component={ContactUs} />
        </Switch>
        <Switch>
          <Route path='/branches' exact component={BranchesPage} />
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}


function BranchesPage() {
  const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';
  return <Branches title='Cebu' photo='https://zenrooms.com/blog/wp-content/uploads/2020/01/shutterstock_1193765152.jpg' location='cebu 1236' schedule='8:00 am - 5:00 pm' info={info}/>;
}

export default App;