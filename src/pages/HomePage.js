import React from 'react'
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import RightTitleBar from '../components/RightTitleBar';
import StudentTestimonies from '../components/StudentTestimonies';

const ceoPhoto = require('../assets/images/ceo_photo_2.png');
const actualClass1 = require('../assets/images/actual_class_1.jpg');
const actualClass2 = require('../assets/images/actual_class_2.jpg');
const graduation1 = require('../assets/images/graduation_1.jpg');
const samplePic = require('../assets/images/ceo_photo.png');

const HomePage = () => {
    return (
        <Container>
            {/* About Section */}
            <Container>
                <Row lg={12}>
                    <Col lg={7}>
                        <Row>
                            <h1 className='font-face' style={{
                                fontWeight: 'bold',
                                fontSize: 50,
                                color: 'rgb(41, 120, 181)',
                            }}
                            >Hello there</h1>
                        </Row>
                        <Row style={{ paddingTop: 50}}>
                            <p className='font-face' style={{
                                fontWeight: 'lighter',
                                fontSize: 16,
                            }}
                            >We are glad that you want to know us better! 
                                PRIME KOREAN LANGUAGE AND REVIEW CENTER. would like to welcome you all , in case of queries feel free to ask anything you want. 
                                We want to make sure to give you the best service we could offer.
                                In the meantine to give you a little context about the company and what's important to us.
                                Our company IS A LANGUAGE TRAINING CENTER THAT PROVIDES INTENSIVE KOREAN LANGUAGE TRAINING TO PASS THE KOREAN LANGUAGE TEST PRESCRIBED 
                                BY THE HRD KOREA( HUMAN RESOURCES DEVELOPMENT OF KOREA) IN COORDINATION WITH POEA( PHILIPPINE OVERSEAS EMPLOYMENT ADMINISTRATION),WITH REGISTRATION NO. 
                                CS201817522 under Security and exchange commision.The company is a corporation duly organized and existing by virtue of Philippine laws. 
                                It is one of the many Service Provider Language Companies operating in Luzon, Visayas, Mindanao and currently has 7 branches actively serving 
                                and continually giving assistance to Filipinos.
                                Again, we welcome you all, If you have questions prior to company's details, kindly send us an email 
                                WELCOME to our TEAM
                            </p>    
                        </Row>
                    </Col>
                    <Col lg={5} style={{paddingLeft: 150}}>
                    <Image src={ceoPhoto.default} />
                    </Col>
                </Row>
            </Container>

            {/* Title Bar For Testimonies */}
            <Container style={{marginTop: -1}}>
                <RightTitleBar title='Testimonies'/>
            </Container>

            {/* Testimonies Carousel*/}
            <Container lg={12} style={{ marginTop: 100}}>
                <Container style={{
                    backgroundColor: 'blue',
                    width: '100%'
                }}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <Image src={actualClass1.default} width ='1150px'height='600px'/>
                            <Carousel.Caption>
                            <h3>Orientation</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <Image src={actualClass2.default} width ='1150px'height='600px'/>
                            <Carousel.Caption>
                            <h3>Actual Class</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={graduation1.default} width ='1150px'height='600px'/>
                            <Carousel.Caption>
                            <h3>Graduation</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Container>

            {/* Student Testimonies */}

            <Container>
            <Carousel>
                    <Carousel.Item interval={1000}>
                        <Row>
                                <Col>
                                        <Row>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Porro accusantium sint delectus beatae commodi modi id tempore cum suscipit sapiente. S
                                                it, aspernatur? Nostrum, aliquid distinctio ea maxime temporibus doloribus hic?
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit minus cum repudiandae commodi 
                                                ab voluptates dolorum, animi saepe mollitia amet dolor facilis ullam sunt consequuntur distinctio! Dolor, eaque id.
                                            </p>
                                        </Row>
                                        <Row>
                                            <h3>Marck Demo</h3>
                                        </Row>
                                </Col>

                                <Col>
                                        <Image src={samplePic.default} roundedCircle  width='50%'/>
                                </Col>
                        </Row>
                    </Carousel.Item>
                        
                    <Carousel.Item interval={500}>
                            <h1>Demo</h1>
                    </Carousel.Item>

                    <Carousel.Item>
                            <h1>World</h1>
                    </Carousel.Item>
            </Carousel>
            </Container>

        </Container>
    )
}

export default HomePage
