import React, {useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CustomLeftTile from '../components/CustomLeftTile';
import CustomRightTile from '../components/CustomRightTile';


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
          <Redirect to="learn-korea" />
        </Route>
        <Route path="*">
          <ServicesPage />
        </Route>
      </Switch>
    </Router>
  );
}


const koreanLang1 = require('../assets/images/korean_lang.png');
const koreanLang2 = require('../assets/images/korean_lang2.jpg');
const workKorea1 = require('../assets/images/work1.jpg');
const workKore2 = require('../assets/images/work2.jpg')

const ServicesPage = () => {
    let location = useLocation();

    
    const linkControllers = {
        learnKoreaLink: true,
        workKoreaLink: false,
    }

    const[pageController, navigate] = useState(linkControllers);

    

    return (
        <Container>
            <Row lg={12} style={{marginLeft: 50}}>
                <Col lg={1}></Col>
                <Col lg={5}>
                    <Link to='/learn-korea'>
                        <h3 className='font-face' style={{
                            fontWeight: 'bold',
                            textDecoration: pageController.learnKoreaLink ?  'underline' : '',
                            fontSize: 30,
                            color: pageController.learnKoreaLink ? 'rgb(41, 120, 181)' : 'rgba(41, 120, 181, 0.4)',
                            cursor: 'pointer',
                        }}

                        onClick={()=>{
                            navigate({
                            learnKoreaLink: true,
                            workKoreaLink: false,
                            })
                        }}

                        >Learn Korea</h3>
                    </Link>
                </Col>
                <Col lg={5}>
                    <Link to='/work-korea'>
                        <h3 className='font-face' style={{
                            fontWeight: 'bold',
                            textDecoration: pageController.workKoreaLink ?  'underline' : '',
                            fontSize: 30,
                            color: pageController.workKoreaLink ? 'rgb(41, 120, 181)' : 'rgba(41, 120, 181, 0.4)',
                            cursor: 'pointer',
                        }}

                        onClick={()=>{
                            navigate({
                            learnKoreaLink: false,
                            workKoreaLink: true,
                            })
                        }}

                        >Work in South korea</h3>
                    </Link>
                </Col>
                <Col lg={1}></Col>
            </Row>

            <Container style={{height: 50}}></Container>

            <div>
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Switch location={location}>
                    <Route path="/learn-korea" children={<LearnKorea />} />
                    <Route path="/work-korea" children={<WorkOnKore />} />

                    </Switch>
                </CSSTransition>
                </TransitionGroup>
            </div>
            


        </Container>
    )
}

//export default ServicesPage


function LearnKorea(){
    return(
      <div>
        <Container style={{height: 100}}></Container>
        <CustomLeftTile title='Language' picture={koreanLang1.default}/>
        <CustomRightTile title='Culture' piture={koreanLang2.default} />
        <Container style={{height: 100}}></Container>
      </div>
    )
}


function WorkOnKore(){
    return(
      <div>
          <Container style={{height: 100}}></Container>
          <CustomLeftTile title='Operator' picture={workKorea1.default}/>
          <CustomRightTile title='Technician' picture={workKore2.default} />
          <Container style={{height: 100}}></Container>
      </div>
    )
}

