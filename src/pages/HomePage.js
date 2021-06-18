import React from 'react'
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import RightTitleBar from '../components/RightTitleBar';
import LeftTitleBar from '../components/LeftTitleBar';
import StudentTestimonies from '../components/StudentTestimonies';
import CustomLeftTile from '../components/CustomLeftTile';
import CustomRightTile from '../components/CustomRightTile';
import BranchCard from '../components/BranchCard';
import PrimeNavBar from '../components/PrimeNavBar';
import Banner from '../components/Banner';
import './HomePage.css';
import PrimeCarousel from '../components/PrimeCarousel';
import { motion } from "framer-motion"

const ceoPhoto = require('../assets/images/ceo_photo_2.png');
const hanguel = require('../assets/images/hangeul.png');
const korea = require('../assets/images/korea.jpg');
const lorem = require('../assets/images/lorem_logo.png');
const underMaintenance = require('../assets/images/under_maintenance.png');



const HomePage = () => {


    return (
        <>  
            <div className='header-container'>
                <PrimeNavBar />
                <Banner />
            </div>
            <Container className='home-content'>
            <div data-aos="fade-left" data-aos-duration="1000">
                    <div className='welcome-container'>
                        <Row>
                            <Col lg='fluid' md='fluid' xs='fluid'>
                                <h1>Hello There</h1>
                            </Col>
                            <Col className='ceo-mobile-photo' lg='fluid' md='fluid' xs='fluid'>
                                <img src={ceoPhoto.default} alt="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col  lg={8} md={8} xs={12}>
                                <div className='message'>
                                    <p>
                                        We are glad that you want to know us better! 
                                        PRIME KOREAN LANGUAGE AND REVIEW CENTER. would like to welcome you all , in case of queries feel free to ask anything you want. We want to make sure to give you the best service we could offer.
                                        In the meantine to give you a little context about the company and what's important to us.
                                        Our company IS A LANGUAGE TRAINING CENTER THAT PROVIDES INTENSIVE KOREAN LANGUAGE TRAINING TO PASS THE KOREAN LANGUAGE TEST PRESCRIBED BY THE HRD KOREA( HUMAN RESOURCES DEVELOPMENT OF KOREA) IN COORDINATION WITH POEA( PHILIPPINE OVERSEAS EMPLOYMENT ADMINISTRATION),WITH REGISTRATION NO. CS201817522 under Security and exchange commision.The company is a corporation duly organized and existing by virtue of Philippine laws. It is one of the many Service Provider Language Companies operating in Luzon, Visayas, Mindanao and currently has 7 branches actively serving and continually giving assistance to Filipinos.
                                        Again, we welcome you all, If you have questions prior to company's details, kindly send us an email 
                                        WELCOME to our TEAM
                                    </p>
                                </div>
                            </Col>
                            <Col className='ceo-desktop-photo' lg={4} md={4} xs={12}>
                                <img src={ceoPhoto.default} alt="" />
                            </Col>
                        </Row>
                    </div>
            </div>
            </Container>

            <div className='carousel-div'>
                <PrimeCarousel />
            </div>
        </>
    )
}

export default HomePage
