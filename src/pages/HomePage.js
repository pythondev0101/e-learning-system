import React from 'react'
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import RightTitleBar from '../components/RightTitleBar';
import LeftTitleBar from '../components/LeftTitleBar';
import StudentTestimonies from '../components/StudentTestimonies';
import CustomLeftTile from '../components/CustomLeftTile';
import CustomRightTile from '../components/CustomRightTile';
import BranchCard from '../components/BranchCard';

const ceoPhoto = require('../assets/images/ceo_photo_2.png');
const actualClass1 = require('../assets/images/actual_class_1.jpg');
const actualClass2 = require('../assets/images/actual_class_2.jpg');
const graduation1 = require('../assets/images/graduation_1.jpg');
const demoStudent1 = require('../assets/images/demo_profile_1.jpg');
const demoStudent2 = require('../assets/images/demo_profile_2.jpg');
const demoStudent3 = require('../assets/images/demo_profile_3.jpg');
const hanguel = require('../assets/images/hangeul.png');
const korea = require('../assets/images/korea.jpg');
const lorem = require('../assets/images/lorem_logo.png');
const underMaintenance = require('../assets/images/under_maintenance.png');

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
                        <Row style={{ paddingTop: 40}}>
                            <p className='font-face' style={{
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
            
            <RightTitleBar title='Testimonies'/>
    

            {/* Testimonies Carousel*/}
            <Carousel style={{
                width:'100%',
                height:'600px',
                marginTop: 100,      
            }}>
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

            {/* Student Testimonies */}

            <Container style={{marginTop: 100}}>
                <h1 className='font-face' style={{
                    fontWeight: 'bold',
                    fontSize: 50,
                    color: 'rgb(41, 120, 181)',
                }}
                >What our Student's Say
                </h1>
            </Container>
            

            <Container style={{marginTop: 50}}>
                <Carousel>
                        <Carousel.Item interval={1000} style={{padding: 40}}>
                            <StudentTestimonies fullName='Demo Mark' picture={demoStudent1.default}/>
                        </Carousel.Item>
                            
                        <Carousel.Item interval={500} style={{padding: 40}}>
                            <StudentTestimonies fullName='Demo Jhon' picture={demoStudent2.default}/>
                        </Carousel.Item>

                        <Carousel.Item style={{padding: 40}}>
                            <StudentTestimonies fullName='Demo Kathy' picture={demoStudent3.default}/>
                        </Carousel.Item>
                </Carousel>
            </Container>
            <Container style={{height: 100}}></Container>

            {/* Title Bar For Services */}

        <LeftTitleBar title='Services'/>
          
          <Container style={{height: 50}}></Container>

           <Container>
               <CustomLeftTile title='Learn Korea' picture={hanguel.default} />
           </Container>
           
           <Container style={{height: 100}}></Container>

           <Container>
               <CustomRightTile title='Work at Korea' picture={korea.default} />
           </Container>
           
           <Container style={{height: 100}}></Container>

           <Container>
               <CustomLeftTile title='Lorem Ipsum' picture={lorem.default} />
           </Container>

           <Container style={{height: 100}}></Container>


            {/* Title Bar For Brabches */}

            <Container style={{marginTop: -1}}>
                <RightTitleBar title='Branches'/>
            </Container>
            
            <Container style={{height: 50}}></Container>

            <Container style={{textAlign: 'center'}}>
                <h1>Some Of Our Branches</h1>
            </Container>
            <Container style={{textAlign: 'center', marginLeft: 15, marginRight: 50}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur provident quidem dolor deleniti reiciendis. Rem assumenda dolor, 
                    voluptates inventore laboriosam fugiat voluptatem nesciunt suscipit quae. 
                    Repellendus sequi cumque beatae laudantium.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perferendis nihil
                    veniam voluptatum maiores praesentium fugit. Esse, fuga nemo, aspernatur unde perferendis 
                    itaque veritatis voluptatum consequatur hic et commodi similique.
                </p>
            </Container>

            <Container style={{height: 50}}></Container>

           
            <Image src={underMaintenance.default} style={{marginLeft: 150}} />
           
        </Container>
    )
}

export default HomePage
