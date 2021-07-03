import React, {useState} from 'react';
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap';


const underMaintenance = require('../assets/images/under_maintenance.png');

const AboutUs2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (
       <>
        <div classNams='carousel'>
        <Slider {...settings}>
          <div className='carousel-item'>
            <img src={underMaintenance.default} alt="" width='100%' />
          </div>
          <div className='carousel-item'>
            <img src={underMaintenance.default} alt="" width='100%' />
          </div>
          <div className='carousel-item'>
            <img src={underMaintenance.default} alt="" width='100%' />
          </div>
          <div className='carousel-item'>
            <img src={underMaintenance.default} alt=""  width='100%' />
          </div>
          <div className='carousel-item'>
            <img src={underMaintenance.default} alt="" width='100%' />
          </div>
          <div className='carousel-item'>
            <img src={underMaintenance.default} alt=""  width='100%' />
          </div>
        </Slider>
        </div>
         <div className='container'>
            <div className='story-div'>
                <h1 data-aos="zoom-in">
                    CHOGI LANGUAGE AND TECHNOLOGY CENTER INC.
                </h1>
                <h3 data-aos="zoom-in" >COMPANY PROFILE</h3>
                <p data-aos="zoom-in-up" data-aos-duration="3000">
                Chogi language and technology center inc. Is a language training center that provides intensive korean language training to pass the korean language test prescribed by the HRDKOREA (Human Resources Development of Korea) in coordination with POEA (Philippine Overseas Employment Administration). 
                The company has been registered since 2018 under security and exchange commission with registration no. Cs201817522.
                We are helping filipinos to pass the korean language proficiency test with assistance for e registration under poea and eps registration, we assist the students/applicants to pass the step by step requirements to be qualified as a factory worker in south korea.
                Chogi language and technology center inc. Provides excellent korean language training services to help filipino workers pass the eps-topik exam of poea. 
                </p>
                <h3 data-aos="zoom-in">
                    What is eps-topik? 
                </h3>
                <p data-aos="zoom-in-up" data-aos-duration="3000">
                    Eps-topik stands for employment permit system-test of proficiency in korean - simply means pure korean language test. It was implemented by hrd korea & poea to reduce the number of TNT working in south korea. 
                    For common reference, please be aware that there is no more agency if you want to work in south korea. Only poea can give you the employer if you passed their eps-topik. Chogi korean language center services is not agency, we are a korean language training center. 
                    The company is a corporation duly organized and existing by virtue of philippine laws. It is one of the many service provider language company operating in luzon, bisayas, mindanao and presently has around 7 branches actively serving its enrollees at Cebu City, Mandaue City, 
                    Tagbilaran City, Bohol, Tacloban City, Calbayog City, Puerto Princesa City, Palawan and Butuan City.
                </p>
                <Row>
                    <Col  lg={4}>
                        <img data-aos="flip-right" data-aos-duration="3000" src={underMaintenance.default} alt="" width='100%'/>
                    </Col>
                    <Col lg={8}>
                            <h4  data-aos="zoom-in">
                                Brief story
                            </h4>
                            <p data-aos="zoom-in-up" data-aos-duration="3000">
                            Korean language is challenging institutional services for Jonwel Suprecencia, as an EPS worker in South Korea 
                            During his early endeavors , he has foreseen the need of Filipino for working abroad to know the basic language of Korean as part of their requirements for employment in Korea. He has learn the 
                            difference of Filipino and korean culture and understand a lot more about Korean Labor and Immigration Laws.
                            </p>
                    </Col>
                </Row>
                <h3 data-aos="zoom-in">
                    VISION STATEMENT
                </h3>
                <p data-aos="zoom-in-up" data-aos-duration="3000">
                    Our vision is to continue our successful mentorship and providing support and 
                    assistance to those Filipino students to change their life and bringing out a 
                    good and brighter future for them and they may live harmoniously and financially 
                    secured while and after working abroad
                </p>
                <h3 data-aos="zoom-in" >
                    MISSION STATEMENT
                </h3>
                <p data-aos="zoom-in-up" data-aos-duration="3000">
                Provide intensive Korean language training to pass the Korean language proficiency test prescribed by the 
                HRD KOREA in coordination with POEA as the main requirements. Assist the students to reach out their goal, 
                to ensure that each student can learn the four basic skills in learning Korean Language such as Listening, Speaking , Reading and Writing , 
                dedication that together we put our efforts to enable our students fulfil their dreams to work in South Korea.
                </p>
                
                
                
                
            </div>
         </div>
       </>
    )
}

export default AboutUs2
