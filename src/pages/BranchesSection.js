import React from 'react';
import './Pretty.css';
import './Animate.css';
import './Pretty.css';
import './aos.css';
import { Link } from 'react-router-dom';


const BranchesSection = () => {

    const underMaintenance = require('../assets/images/under_maintenance.png')

    return (
      <>

      
<section class="section">
  <div class="container">

        <div class="row justify-content-center">
            <h1 data-aos="zoom-in">Some of our Branches</h1>
        </div>
  
  

<div class="row justify-content-center">

  <div data-aos="flip-left" data-aos-duration="2000" class="col-lg-4 col-sm-6 mb-5">
    <div class="card-branch p-0 border-primary rounded-0 hover-shadow">
      <img class="card-img-top rounded-0" src='https://assets2.rappler.com/2021/01/Cebu-city-skyline-may-10-2018-1622443368874-546.jpg' alt="course thumb"/>
      <div class="card-body">
        <ul class="list-inline mb-2">
        <h4 class="card-title text-white">Cebu</h4>
          <li class="list-inline-item"><a class="text-color" href="#">Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City</a></li>
        </ul>
        <p class="card-text mb-4 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <Link to='/branches-cebu'>
            <a  class="btn btn-danger btn-sm text-white">Read more</a>
        </Link>
      </div>
    </div>
  </div>

  <div data-aos="flip-right" data-aos-duration="2000" class="col-lg-4 col-sm-6 mb-5">
    <div class="card-branch p-0 border-primary rounded-0 hover-shadow">
      <img class="card-img-top rounded-0" src='https://pix10.agoda.net/geo/city/181894/317d9608ed084bfb080b1aa7906b9913.jpg?s=1920x822' alt="course thumb"/>
      <div class="card-body">
        <ul class="list-inline mb-2">
        <h4 class="card-title text-white">Tacloban</h4>
          <li class="list-inline-item"><a class="text-color" href="#">Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City</a></li>
        </ul>
        <p class="card-text mb-4 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <Link to='/branches-tacloban'>
            <a  class="btn btn-danger btn-sm text-white">Read more</a>
        </Link>
      </div>
    </div>
  </div>
  
  <div data-aos="flip-left" data-aos-duration="2000" class="col-lg-4 col-sm-6 mb-5">
    <div class="card-branch p-0 border-primary rounded-0 hover-shadow">
      <img class="card-img-top rounded-0" src='https://calbayogjournal.com/assets/uploads/2017/Sep/09122017_1648020000001.jpg' alt="course thumb"/>
      <div class="card-body">
        <ul class="list-inline mb-2">
        <h4 class="card-title text-white">Calbayog</h4>
          <li class="list-inline-item"><a class="text-color" href="#">Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City</a></li>
        </ul>
        <p class="card-text mb-4 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <Link to='/branches-calbayog'>
            <a  class="btn btn-danger btn-sm text-white">Read more</a>
        </Link>
      </div>
    </div>
  </div>

  <div data-aos="flip-right" data-aos-duration="2000" class="col-lg-4 col-sm-6 mb-5">
    <div class="card-branch p-0 border-primary rounded-0 hover-shadow">
      <img class="card-img-top rounded-0" src='https://www.tripsavvy.com/thmb/XOMN62FAfyWZLa8H_C5FDTQM0Dc=/1916x1078/smart/filters:no_upscale()/GettyImages-135558476-8533a33260d9436c9bc432ce630ec732.jpg' alt="course thumb"/>
      <div class="card-body">
        <ul class="list-inline mb-2">
        <h4 class="card-title text-white">Bohol</h4>
          <li class="list-inline-item"><a class="text-color" href="#">Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City</a></li>
        </ul>
        <p class="card-text mb-4 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <Link to='/branches-bohol'>
            <a  class="btn btn-danger btn-sm text-white">Read more</a>
        </Link>
      </div>
    </div>
  </div>
 
  <div data-aos="flip-left" data-aos-duration="2000" class="col-lg-4 col-sm-6 mb-5">
    <div class="card-branch p-0 border-primary rounded-0 hover-shadow">
      <img class="card-img-top rounded-0" src='https://assets2.rappler.com/2021/01/Cebu-city-skyline-may-10-2018-1622443368874-546.jpg' alt="course thumb"/>
      <div class="card-body">
        <ul class="list-inline mb-2">
        <h4 class="card-title text-white">Palawan</h4>
          <li class="list-inline-item"><a class="text-color" href="#">Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City</a></li>
        </ul>
        <p class="card-text mb-4 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <Link to='/branches-palawan'>
            <a  class="btn btn-danger btn-sm text-white">Read more</a>
        </Link>
      </div>
    </div>
  </div>

   
  <div data-aos="flip-left" data-aos-duration="2000" class="col-lg-4 col-sm-6 mb-5">
    <div class="card-branch p-0 border-primary rounded-0 hover-shadow">
      <img class="card-img-top rounded-0" src='https://i2.wp.com/www.cdodev.com/wp-content/uploads/2020/03/86493806_190260235664556_6278073100948996096_o.jpg?fit=960%2C540' alt="course thumb"/>
      <div class="card-body">
        <ul class="list-inline mb-2">
        <h4 class="card-title text-white">Butuan</h4>
          <li class="list-inline-item"><a class="text-color" href="#">Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City</a></li>
        </ul>
        <p class="card-text mb-4 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <Link to='/branches-butuan'>
            <a  class="btn btn-danger btn-sm text-white">Read more</a>
        </Link>
      </div>
    </div>
  </div>
 
 

 



 

 
   
    </div>
  </div>
</section>

      </>
    )
}

export default BranchesSection
