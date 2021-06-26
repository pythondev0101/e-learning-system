import React from 'react'
import './Banner.css';
import {Image} from 'react-bootstrap'
import TransparentButton from './TransparentButton';
import AppDrawer from '../components/AppDrawer';

const primeBanner = require('../assets/images/prime_banner.png');

const Banner = () => {
    return (
        <>
            
                <div className='banner-container'>
                <Image src={primeBanner.default} style={{
                    width: 2000
                }} fluid /> 
                </div>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <div className='banner-content'>
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis debitis 
                                minus distinctio provident blanditiis deleniti nesciunt? Adipisci 
                                quas sed laudantium, totam dolorem inventore culpa accusamus vitae 
                                obcaecati repellendus necessitatibus?
                            </p>
                            <TransparentButton text='Pre Register' borderRadius={10} onTap={()=>{}} isOnClick={false} />
                    </div>
                </div>
                <div className='drawer'>
                        <AppDrawer />
                </div>
            

       </>
    )
}

export default Banner
