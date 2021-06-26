import React, { Component } from "react";
import Slider from "react-slick";
import './PrimeCarousel.css';
import {Image} from 'react-bootstrap'
import ImageCard from '../components/ImageCard';


const actualClass1 = require('../assets/images/actual_class_1.jpg');
const actualClass2 = require('../assets/images/actual_class_2.jpg');
const graduation1 = require('../assets/images/graduation_1.jpg');
const demoStudent1 = require('../assets/images/demo_profile_1.jpg');
const demoStudent2 = require('../assets/images/demo_profile_2.jpg');
const demoStudent3 = require('../assets/images/demo_profile_3.jpg');


export default class PrimeCarousel extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    return (
      <div className='carousel-container'>
          <h1> Our Testimonies </h1>
        <Slider {...settings}>
          <div className='carousel-item'>
            <h4>Actual Class</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fuga corrupti fugiat, 
              nisi commodi similique ut modi debitis qui est sint, adipisci pariatur quas quod quidem facilis, 
              quam ea dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis beatae ducimus 
              tempore maxime facere voluptatum porro explicabo qui perferendis dolor possimus provident,
              hic excepturi voluptates corrupti. Quos ratione cum recusandae.
            </p>
            <Image src={actualClass1.default} fluid />
          </div>
          <div className='carousel-item'>
            <h4>Orientation</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fuga corrupti fugiat, 
              nisi commodi similique ut modi debitis qui est sint, adipisci pariatur quas quod quidem facilis, 
              quam ea dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis beatae ducimus 
              tempore maxime facere voluptatum porro explicabo qui perferendis dolor possimus provident,
              hic excepturi voluptates corrupti. Quos ratione cum recusandae.
            </p>
            <Image src={actualClass2.default} fluid />
          </div>
          <div className='carousel-item'>
            <h4>Graduation</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fuga corrupti fugiat, 
              nisi commodi similique ut modi debitis qui est sint, adipisci pariatur quas quod quidem facilis, 
              quam ea dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis beatae ducimus 
              tempore maxime facere voluptatum porro explicabo qui perferendis dolor possimus provident,
              hic excepturi voluptates corrupti. Quos ratione cum recusandae.
            </p>
            <Image src={graduation1.default} fluid />
          </div>
        </Slider>
      </div>
    );
  }
}