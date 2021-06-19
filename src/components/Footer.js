import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap';
import TransparentButton from './TransparentButton';
import './Footer.css';

const reverseWave = require('../assets/svg/reverse_wave.svg');
const primeLogo = require('../assets/icons/prime_logo.png');
const facebookLogo = require('../assets/icons/facebook_icon.png');
const gmailIcon = require('../assets/icons/gmail_icon.png');
const phoneCallIcon = require('../assets/icons/phone_icon.png');

const Footer = () => {
    return (
        <>
        <div class="custom-shape-divider-bottom-1624057305">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div className='footer-container'> 
                    <Row className='title' lg={12}>
                        <div class='mobile-logo'>
                            <Row xs={12}>
                                <Col xs={6}>
                                    <img src={primeLogo.default} />
                                </Col>
                                <Col xs={6}>
                                    <h1>What Job do you want in Korea ?</h1>
                                </Col>
                            </Row>
                        </div>

                        <div className='desktop-logo'>
                            <h1>What Job do you want in Korea ?</h1>
                        </div>
                        
                    </Row>
                    <Row lg={12}>
                        <Col lg={3}>
                            <div className='desktop-logo'>
                                <Image src={primeLogo.default} fluid/>   
                            </div>
                         
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <h5>Let's Talk</h5>
                            </Row>
                            <Row>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                            </Row>
                            <Row>
                                <input type="text" placeholder='email'/>
                            </Row>
                            <Row>
                                <TransparentButton text='Pre Register' borderRadius={10} />
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <h5>Contact Us</h5>
                            </Row>
                            <Row>
                                <Col lg={1} xl={1}>
                                <h6>Prime_facebook.com</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={1} xl={1}>
                                <h6>+63999123468</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={1} xl={1}>
                                <h6>prime_language@gmail.com</h6>
                                </Col>
                            </Row>  
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <h5>Navigate</h5>
                            </Row>
                            <Row>
                                <a>Home</a>
                            </Row>
                            <Row>
                                <a>Services</a>
                            </Row>
                            <Row>
                                <a>About Us</a>
                            </Row>
                            <Row>
                                <a>Testimonies</a>
                            </Row>
                            <Row>
                                <a>Branches</a>
                            </Row>
                        </Col>
                    </Row>
            </div>
        </>
    )
}



export default Footer
