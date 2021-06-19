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
import ImageCard from '../components/ImageCard';

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

            <div div='testimony-div'>
                <div class="custom-shape-divider-bottom-1624052802">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className='carousel-div'>
                    <PrimeCarousel />
                </div>
                <div class="custom-shape-divider-top-1624052858">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className='services-div'>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h1> 
                        Services
                    </h1>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000">
                    <CustomLeftTile title='Learn Korea' picture={hanguel.default} />
                </div>
                <div data-aos="flip-right" data-aos-duration="1000">
                    <CustomRightTile title='Culture' picture={korea.default} />
                </div>  
                <div data-aos="flip-left" data-aos-duration="1000">
                    <CustomLeftTile title='Lorem Ipsum' picture={lorem.default} />
                </div>
            </div>

            <div class="custom-shape-divider-bottom-1624053833">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='braches-div'>
                <h1>
                    Some of Our Branches
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam, 
                    illum dolorum eveniet quasi non praesentium ea ullam asperiores qui autem 
                    sit! Laborum dolorem quis repellat quasi tempore! Odio, minus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa necessitatibus velit 
                    perferendis ab libero nesciunt assumenda, 
                    eaque ipsum esse dolore autem quasi dolor eveniet tenetur tempora laboriosam repudiandae sit.
                </p>
                <Row>
                    <Col lg={3}  xs={12} data-aos="flip-left" data-aos-duration="1500">
                        <ImageCard image={underMaintenance.default} title='Bohol' about='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam, 
                    illum dolorum eveniet quasi non praesentium ea ullam asperiores qui autem 
                    sit! Laborum dolorem quis repellat quasi tempore! Odio, minus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa necessitatibus velit 
                    perferendis ab libero nesciunt assumenda, 
                    eaque ipsum esse dolore autem quasi dolor eveniet tenetur tempora laboriosam repudiandae sit.' />
                    </Col>
                    <Col lg={3} xs={12} data-aos="flip-left" data-aos-duration="1500">
                    <ImageCard image={underMaintenance.default} title='Bohol' about='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam, 
                    illum dolorum eveniet quasi non praesentium ea ullam asperiores qui autem 
                    sit! Laborum dolorem quis repellat quasi tempore! Odio, minus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa necessitatibus velit 
                    perferendis ab libero nesciunt assumenda, 
                    eaque ipsum esse dolore autem quasi dolor eveniet tenetur tempora laboriosam repudiandae sit.' />
                    </Col>
                    <Col lg={3} xs={12} data-aos="flip-left" data-aos-duration="1500">
                    <ImageCard image={underMaintenance.default} title='Bohol' about='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam, 
                    illum dolorum eveniet quasi non praesentium ea ullam asperiores qui autem 
                    sit! Laborum dolorem quis repellat quasi tempore! Odio, minus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa necessitatibus velit 
                    perferendis ab libero nesciunt assumenda, 
                    eaque ipsum esse dolore autem quasi dolor eveniet tenetur tempora laboriosam repudiandae sit.' />
                    </Col>
                    <Col lg={3} xs={12} data-aos="flip-left" data-aos-duration="1500">
                    <ImageCard image={underMaintenance.default} title='Bohol' about='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam, 
                    illum dolorum eveniet quasi non praesentium ea ullam asperiores qui autem 
                    sit! Laborum dolorem quis repellat quasi tempore! Odio, minus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa necessitatibus velit 
                    perferendis ab libero nesciunt assumenda, 
                    eaque ipsum esse dolore autem quasi dolor eveniet tenetur tempora laboriosam repudiandae sit.' />
                    </Col>
                </Row>
            </div>
            <div class="custom-shape-divider-top-1624055584">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
        </>
    )
}

export default HomePage
