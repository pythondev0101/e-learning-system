import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap';
import TransparentButton from './TransparentButton';

const reverseWave = require('../assets/svg/reverse_wave.svg');
const primeLogo = require('../assets/icons/prime_logo.png');
const facebookLogo = require('../assets/icons/facebook_icon.png');
const gmailIcon = require('../assets/icons/gmail_icon.png');
const phoneCallIcon = require('../assets/icons/phone_icon.png');

const Footer = () => {
    return (
        <div>
            <div style={{ marginBottom: -2.5}}>
                <Image src={reverseWave.default} fluid />
            </div>
            <div style={{
                width: '100%',
                height: 500,
                backgroundImage: 'linear-gradient(0deg, rgba(21, 60, 91, 1), rgba(41, 120, 181, 1))',
                borderColor: 'rgb(41, 120, 181)'
            }}>
                <Container fluid>
                    <Row lg={12} style={{ marginLeft: 50, marginBottom: 40}}>
                        <h1 className='font-face' style={{
                            fontWeight: 'bold',
                            fontSize: 70,
                            color: 'white',
                        }}
                        >What Job do you want in Korea ?</h1>
                    </Row>
                    <Row lg={12}>
                        <Col lg={3} style={{paddingTop: 50, paddingLeft: 100}}>
                            <Image src={primeLogo.default} fluid width='70%' />
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <h5 className='font-face' style={{
                                    textDecoration: 'underline',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}
                                >Let's Talk</h5>
                            </Row>
                            <Row style={{paddingRight: 30}}>
                                <p className='font-face'style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: 'lighter'   
                                }}
                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                            </Row>
                            <Row style={{marginBottom: 20}}>
                                <input type="text" placeholder='email'/>
                            </Row>
                            <Row>
                                <TransparentButton text='Pre Register' borderRadius={10} />
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <h5 className='font-face' style={{
                                    textDecoration: 'underline',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}
                                >Contact Us</h5>
                            </Row>
                            <Row style={{marginBottom: 10}}>
                                <Col lg={1} xl={1} style={{ paddingTop: 5}}>
                                    <Image src={facebookLogo.default} width='2500%' />
                                </Col>
                                <Col lg={2} xl={1} style={{ paddingLeft: 40, paddingTop: 10}}>
                                    <h6 className='font-face' style={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontWeight: 'lighter'  
                                    }}
                                    >Prime_facebook.com</h6>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: 10}}>
                                <Col lg={1} xl={1} style={{ paddingTop: 5}}>
                                    <Image src={phoneCallIcon.default} width='2500%' />
                                </Col>
                                <Col lg={2} xl={1} style={{ paddingLeft: 40, paddingTop: 10}}>
                                    <h6 className='font-face' style={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontWeight: 'lighter'  
                                    }}
                                    >+63999123468</h6>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: 10}}>
                                <Col lg={1} xl={1} style={{ paddingTop: 5}}>
                                    <Image src={gmailIcon.default} width='2500%' />
                                </Col>
                                <Col lg={2} style={{ paddingLeft: 40, paddingTop: 10}}>
                                    <h6 className='font-face' style={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontWeight: 'lighter'  
                                    }}
                                    >prime_language@gmail.com</h6>
                                </Col>
                            </Row>  
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <h5 className='font-face' style={{
                                  textDecoration: 'underline',
                                  fontWeight: 'bold',
                                  color: 'white'
                                }}
                                >Navigate</h5>
                            </Row>
                            <Row>
                                <a className='font-face' href="#" style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: 'lighter' 
                                }}
                                >Home</a>
                            </Row>
                            <Row>
                                <a className='font-face' href="#" style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: 'lighter' 
                                }}
                                >Services</a>
                            </Row>
                            <Row>
                                <a className='font-face' href="#" style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: 'lighter' 
                                }}
                                >About Us</a>
                            </Row>
                            <Row>
                                <a className='font-face' href="#" style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: 'lighter' 
                                }}
                                >Testimonies</a>
                            </Row>
                            <Row>
                                <a className='font-face' href="#" style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: 'lighter' 
                                }}
                                >Branches</a>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}



export default Footer
