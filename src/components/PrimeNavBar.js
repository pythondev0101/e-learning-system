import './PrimeNavBar.css';
import { Row, Col, Image, Container, Nav, Navbar } from 'react-bootstrap';
import TransparentButton from './TransparentButton';
import { Link } from 'react-router-dom';
import AppDrawer from '../components/AppDrawer';
import { useState } from 'react';


const primeLogo = require('../assets/icons/prime_logo.png');


const PrimeNavBar = () => {

    const [[homeTab, ServicesTab, TestimoniesTab, BranchesTab], changeTab] = useState([false,false,false,false]);



    return (
    <>
        <div data-aos="fade-down" data-aos-duration="1500">
            <div className='navbar-container'>
                <Row>

                    <Col lg='fluid' md='fluid' xs='fluid'>
                        <img src={primeLogo.default} alt="" />
                    </Col>
                    <Col lg='fluid' md='fluid' xs='fluid'>
                        <h3>Prime Language Tech. Center Inc.</h3>
                    </Col>
                    
                

                    <Col lg='fluid' md='fluid' xs='fluid'>
                        <Link>
                            <TransparentButton text='Home' borderRadius={20} onTap={()=>{
                                changeTab([true,false,false,false])
                            }} isOnClick={homeTab} />
                        </Link>
                    </Col>
                    <Col lg='fluid' md='fluid' xs='fluid'>
                        <Link>
                            <TransparentButton text='Services' borderRadius={20} onTap={()=>{
                                changeTab([false,true,false,false])
                            }} isOnClick={ServicesTab} />
                        </Link>
                    </Col>
                    <Col lg='fluid' md='fluid' xs='fluid'>
                        <Link>
                            <TransparentButton text='Testimonies' borderRadius={20} onTap={()=>{
                                changeTab([false,false,true,false])
                            }} isOnClick={TestimoniesTab} />
                        </Link>
                    </Col>
                    <Col lg='fluid' md='fluid' xs='fluid'>
                        <Link>
                            <TransparentButton text='Branches' borderRadius={20} onTap={()=>{
                                changeTab([false,false,false,true])
                            }} isOnClick={BranchesTab} />
                        </Link>
                    </Col>
                </Row> 
                  
            </div>
        </div>    
    </>
    )
}

export default PrimeNavBar
