import React, {useState} from 'react';
import './Pretty.css';
import './Animate.css';
import './aos.css';
import './EventreStyle.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.photo} alt="" class="img-fluid"/>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  


const Testimonies = () => {

    
    return (
      <>
        <section class="page-title-section overlay">
            <div class="container">
                <div class="row">
                <div class="col-md-8">
                    <ul class="list-inline custom-breadcrumb">
                    <li class="list-inline-item"><a class="h2 text-primary font-secondary">Our Proof of Gallery</a></li>
                    <li class="list-inline-item text-white h3 font-secondary @@nasted"></li>
                    </ul>
                    <p class='text-white'>
                    Prime KLC students who have gone KOREAN LANGUAGE TRAINING have passed the EPS-TOPIK 
                    exam and got hired by Korean employers.
                     PRIME KLC is assisting Filipinos who are interested to work as factory workers in SOUTH KOREA.
                    </p>
                </div>
                </div>
            </div>
        </section>

        

        <section class="section gallery">
            <div class="container">
           
                <div class="row">
                    <div class="col-12">
                    <Router>
                        <Redirect to="/li-orientaion" />
                        <div class="controls">
                            <Link to='/li-orientaion'>
                                <button type="button" class="control" data-filter="all">Orientation</button>
                            </Link>
                            <Link to='/li-actual-class'>
                                <button type="button" class="control" data-filter=".conference">Actual Class</button>
                            </Link>
                            <Link to='/li-graduation'>
                                <button type="button" class="control" data-filter=".meeting">Graduation</button>
                            </Link>
                            <Link to='/li-skill-test'>
                                <button type="button" class="control" data-filter=".events">Skill Test</button>
                            </Link>
                            <Link to='/li-departure'>
                                <button type="button" class="control" data-filter=".party">Departure in South Korea</button>
                            </Link>
                        </div>
                        <Switch>
                        <Route path='/li-orientaion' exact component={Orientation} />
                        </Switch>
                        <Switch>
                        <Route path='/li-actual-class' exact component={ActualClass} />
                        </Switch>
                        <Switch>
                        <Route path='/li-graduation' exact component={Graduation} />
                        </Switch>
                        <Switch>
                        <Route path='/li-skill-test' exact component={Skilltest} />
                        </Switch>
                        <Switch>
                        <Route path='/li-departure' exact component={Departure} />
                        </Switch>
                    </Router>

                    
                        
                    </div>
                </div>
            </div>
        </section>

      </>
    )
}

function Orientation(){
    const orientation_1 = require('../assets/compilation/ORIENTATION/or_1.jpg')
    const orientation_2 = require('../assets/compilation/ORIENTATION/or_2.jpg')
    const orientation_3 = require('../assets/compilation/ORIENTATION/or_3.jpg')
    const orientation_4 = require('../assets/compilation/ORIENTATION/or_4.jpg')
    const orientation_5 = require('../assets/compilation/ORIENTATION/or_5.jpg')
    const orientation_6 = require('../assets/compilation/ORIENTATION/or_6.jpg')
    const defaultPhoto = require('../assets/images/under_maintenance.png');
    const [[modalShow, photo], setModalShow] = useState([false, defaultPhoto.default]);

    
    
    return(
        <>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow([false, defaultPhoto.default])}
        photo={photo}
        />  
            <section class="section">
                    <div class="container">
                        <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Orientation</h2>
                            <p>
                            Orientation is conducted as the first step, for those
                             interested applicants they must undergo an orientation to know the step by step
                              process. Schedule of orientation is conducted regularly at least 2 times a week in 
                              different branches. Clients who are interested with this program must send the personal 
                            details Before attending the orientation to know the nearest branch where they can join the said
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>
            <div class="gallery-wrapper">
                            <div  data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, orientation_1.default])} class="image">
                                        <img src={orientation_1.default} class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix party events">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, orientation_2.default])} class="image">
                                        <img src={orientation_2.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, orientation_3.default])} class="image">
                                        <img src={orientation_3.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting concert">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, orientation_4.default])} class="image">
                                        <img src={orientation_4.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix concert party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, orientation_5.default])} class="image">
                                        <img src={orientation_5.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix events conference">
                                <div onClick={() => setModalShow([true, orientation_6.default])} class="image-block">
                                    <div class="image">
                                        <img src={orientation_6.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

function ActualClass(){

    const actual_class1 = require('../assets/compilation/ACTUAL CLASS/ac_1.jpg');
    const actual_class2 = require('../assets/compilation/ACTUAL CLASS/ac_2.jpg');
    const actual_class3 = require('../assets/compilation/ACTUAL CLASS/ac_3.jpg');
    const actual_class4 = require('../assets/compilation/ACTUAL CLASS/ac_4.jpg');
    const actual_class5 = require('../assets/compilation/ACTUAL CLASS/ac_5.jpg');
    const actual_class6 = require('../assets/compilation/ACTUAL CLASS/ac_6.jpg');
    const defaultPhoto = require('../assets/images/under_maintenance.png');
    const [[modalShow, photo], setModalShow] = useState([false, defaultPhoto.default]);
    return(
        <>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow([false, defaultPhoto.default])}
        photo={photo}
        />  

            <section class="section">
                    <div class="container">
                        <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Actual Class</h2>
                            <p>
                            We offer actual classes of KOREAN LANGUAGE Training Schedule of classes for weekdays 17 
                            days Monday to Friday at least 3 hours a day with 3 sessions Morning (9:00am to 12:00nn) 
                            Afternoon class ( 1:00pm to 4:00pm) 
                            Night class ( 6:00pm to 9:00pm) Sunday class 10 consecutive Sundays ( 9:00am to 4:00pm)
                            </p>
                        </div>
                        </div>
                    </div>
                    </section> 
            <div class="gallery-wrapper">
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, actual_class1.default])} class="image">
                                        <img src={actual_class1.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix party events">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, actual_class2.default])} class="image">
                                        <img src={actual_class2.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, actual_class3.default])} class="image">
                                        <img src={actual_class3.default} class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting concert">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, actual_class4.default])} class="image">
                                        <img src={actual_class4.default} class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix concert party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, actual_class5.default])} class="image">
                                        <img src={actual_class5.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix events conference">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, actual_class6.default])} class="image">
                                        <img src={actual_class6.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

function Graduation(){

    const graduation_1 = require('../assets/compilation/GRADUATION/gr_1.jpg')
    const graduation_2 = require('../assets/compilation/GRADUATION/gr_2.jpg')
    const graduation_3 = require('../assets/compilation/GRADUATION/gr_3.jpg')
    const graduation_4 = require('../assets/compilation/GRADUATION/gr_4.jpg')
    const graduation_5 = require('../assets/compilation/GRADUATION/gr_5.jpg')
    const graduation_6 = require('../assets/compilation/GRADUATION/gr_6.jpg')
    const defaultPhoto = require('../assets/images/under_maintenance.png');

    const [[modalShow, photo], setModalShow] = useState([false, defaultPhoto.default]);
    return(
        <>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow([false, defaultPhoto.default])}
        photo={photo}
        />   

            <section class="section">
                    <div class="container">
                        <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Graduation</h2>
                            <p>
                            Giving of Certificates to all the students who have successfully completed 
                            the KOREAN LANGUAGE TRAINING/KOREAN CLASS. Acknowledging those students 
                            who are dedicated on their training, Giving of awards/recognition to those TOP SCORERS
                            </p>
                        </div>
                        </div>
                    </div>
                    </section> 
            <div class="gallery-wrapper">
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, graduation_1.default])} class="image">
                                        <img src={graduation_1.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix party events">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, graduation_2.default])} class="image">
                                        <img  src={graduation_2.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, graduation_3.default])} class="image">
                                        <img src={graduation_3.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting concert">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, graduation_4.default])} class="image">
                                        <img src={graduation_4.default} class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix concert party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, graduation_5.default])} class="image">
                                        <img src={graduation_5.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix events conference">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, graduation_6.default])} class="image">
                                        <img src={graduation_6.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

function Skilltest(){
    const skill_test_1 = require('../assets/compilation/ACTUAL CLASS/ac_1.jpg');
    const skill_test_2  = require('../assets/compilation/ACTUAL CLASS/ac_2.jpg');
    const skill_test_3  = require('../assets/compilation/ACTUAL CLASS/ac_3.jpg');
    const skill_test_4 = require('../assets/compilation/ACTUAL CLASS/ac_4.jpg');
    const skill_test_5  = require('../assets/compilation/ACTUAL CLASS/ac_5.jpg');
    const skill_test_6  = require('../assets/compilation/ACTUAL CLASS/ac_6.jpg');
    const defaultPhoto = require('../assets/images/under_maintenance.png');
    const [[modalShow, photo], setModalShow] = useState([false, defaultPhoto.default]);
    

    return(
        <>
             <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow([false, defaultPhoto.default])}
        photo={photo}
        />    
             <section class="section">
                    <div class="container">
                        <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Skill Test</h2>
                            <p>
                            GPRIME KLC is conducted an actual skill test training before attending the SKILL TEST 
                            under HRD KOREA It is conducted after passing the EPS-TOPIK EXAM, In preparation of the SKILL 
                            TEST in Manila Students will undergo an actual training, There is an actual interview with 
                            the TEACHER/INSTRUCTOR and the STUDENT and practicing different task in just 1 second.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section> 
            <div class="gallery-wrapper">
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, skill_test_1.default])} class="image">
                                        <img  src={skill_test_1.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix party events">
                                <div class="image-block">
                                    <div  onClick={() => setModalShow([true, skill_test_2.default])} class="image">
                                        <img src={skill_test_2.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting party">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, skill_test_3.default])} class="image">
                                        <img src={skill_test_3.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting concert">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, skill_test_4.default])} class="image">
                                        <img src={skill_test_4.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix concert party">
                                <div onClick={() => setModalShow([true, skill_test_5.default])} class="image-block">
                                    <div class="image">
                                        <img src={skill_test_5.default} class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix events conference">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, skill_test_5.default])} class="image">
                                        <img src={skill_test_5.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

function Departure(){

    const departure_1 = require('../assets/compilation/DEPARTURE/de_1.jpg')
    const departure_2 = require('../assets/compilation/DEPARTURE/de_2.jpg')
    const departure_3 = require('../assets/compilation/DEPARTURE/de_3.jpg')
    const departure_4 = require('../assets/compilation/DEPARTURE/de_4.jpg')
    const departure_5 = require('../assets/compilation/DEPARTURE/de_5.jpg')
    const departure_6 = require('../assets/compilation/DEPARTURE/de_6.jpg')
    const defaultPhoto = require('../assets/images/under_maintenance.png');
    const [[modalShow, photo], setModalShow] = useState([false, defaultPhoto.default]);


    return(
        <>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow([false, defaultPhoto.default])}
        photo={photo}
        />   
             <section class="section">
                    <div class="container">
                        <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Departure</h2>
                            <p>
                            After Passing the step by step process, PRIME KLC assisted the students financially until 
                            they reach SOUTH KOREA, We provide a free MALITA with financial assistance up to 50,000.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>  
            <div class="gallery-wrapper">
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, departure_1.default])} class="image">
                                        <img src={departure_1.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix party events">
                                <div class="image-block">
                                    <div onClick={() => setModalShow([true, departure_2.default])} class="image">
                                        <img src={departure_2.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting party">
                                <div class="image-block">
                                <div onClick={() => setModalShow([true, departure_3.default])} class="image">
                                        <img src={departure_3.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix meeting concert">
                                <div class="image-block">
                                <div onClick={() => setModalShow([true, departure_4.default])} class="image">
                                        <img src={departure_4.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix concert party">
                                <div class="image-block">
                                <div onClick={() => setModalShow([true, departure_5.default])} class="image">
                                        <img src={departure_5.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-duration="1000" class="gallery-item mix events conference">
                                <div class="image-block">
                                <div onClick={() => setModalShow([true, departure_6.default])} class="image">
                                        <img src={departure_6.default} alt="gallery-image" class="img-fluid"/>
                                        <div class="primary-overlay">
                                            <a class="image-popup" data-effect="mfp-with-zoom"><i
                                                    class="fa fa-picture-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}


export default Testimonies