
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { useCallback, useState } from "react";
import TransparentButton from './components/TransparentButton';
import ServicesPage from './pages/ServicesPage';


import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  NavLink
} from "react-router-dom";

export default function AnimationRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="home" />
        </Route>
        <Route path="*">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

const underMaintenance = require('./assets/images/under_maintenance.png');

function App() {
  let location = useLocation();

  const buttonControllers = {
    homeBtn: true,
    serviceBtn: false,
    testimoniesBtn: false,
    branchesBtn: false,
  }

  const[pageController, navigate] = useState(buttonControllers);

  return (
    <div>
        <Header />

        <Container style={{position: 'absolute', top: 85, left: 300}}>
          <Row lg={12}>
            <Col lg={6}>
            </Col>
            <Col lg={6}>
              <Row>
                <Col>
                  <NavLink to="/home">
                    <TransparentButton text='Home' borderRadius={20} isOnClick={pageController.homeBtn} onTap={()=>{
                      navigate({
                        homeBtn: true,
                        serviceBtn: false,
                        testimoniesBtn: false,
                        branchesBtn: false,
                      })
                    }} />
                  </NavLink>
                </Col>
                <Col>
                  <Link to="/services">
                    <TransparentButton text='Services' borderRadius={20} isOnClick={pageController.serviceBtn} onTap={()=>{
                      navigate({
                        homeBtn: false,
                        serviceBtn: true,
                        testimoniesBtn: false,
                        branchesBtn: false,
                      })
                    }} />
                  </Link>
                </Col>
                <Col>
                  <Link to='/testimonies'>
                    <TransparentButton text='Testimonies' borderRadius={20} isOnClick={pageController.testimoniesBtn} onTap={()=>{
                      navigate({
                        homeBtn: false,
                        serviceBtn: false,
                        testimoniesBtn: true,
                        branchesBtn: false,
                      })
                    }} />
                  </Link>
                </Col>
                <Col>
                  <Link to='branches'>
                    <TransparentButton text='Branches' borderRadius={20} isOnClick={pageController.branchesBtn} onTap={()=>{
                      navigate({
                        homeBtn: false,
                        serviceBtn: false,
                        testimoniesBtn: false,
                        branchesBtn: true,
                      })
                    }} />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
      </Container>

      <Container style={{height: 100}}></Container>
      

      <div>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              <Route path="/home" children={<Home />} />
              <Route path="/services" children={<Services />} />
              <Route path="/testimonies" children={<UnderConstruct title ='TESTIMONIES Page'/>} />
              <Route path="/branches" children={<UnderConstruct title ='Branches Page'/>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <Footer />
    </div>
  );
}



function Home() {
return (
  <HomePage />
);
}

function Services(){
  return(
    <ServicesPage />
  )
}



function UnderConstruct({title}){
  return(
    <Container>
      <Row style={{marginLeft: 150}}>
        <Image src={underMaintenance.default} />
      </Row>
      <Row>
        <h1 className='font-face' style={{
          fontWeight: 'bold',
          fontSize: 100,
          color: 'rgb(41, 120, 181)',
        }}
        > {title} is Under Maintenance
        </h1>
      </Row>
      <Container style={{height: 100}}></Container>
    </Container>
  )
}
