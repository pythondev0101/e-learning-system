import React from 'react'
import './Animate.css';
import './Pretty.css';
import './aos.css';

const Branches = ({title, photo, address, landmark, maplink, info}) => {




    return (
    <>
  
    <section class="section-sm">
        <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="section-title">{title}</h2>
      </div>
     
      <div data-aos="zoom-in" data-aos-duration="3000" class="col-12 mb-4">
        <img src={photo} alt="event thumb" class="img-fluid w-100"/>
      </div>
    </div>

    <div class="row align-items-center mb-5">
      <div class="col-lg-9">
        <ul class="list-inline">
          <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div class="d-flex align-items-center">
              <i class="ti-location-pin text-primary icon-md mr-2" src='http://cdn.onlinewebfonts.com/svg/img_292414.png'></i>
              <div class="text-left">
                <h6 class="mb-0">Address</h6>
                <p class="mb-0">{address}</p>
              </div>
            </div>
          </li>
          <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div class="d-flex align-items-center">
              <i class="ti-time text-primary icon-md mr-2"></i>
              <div class="text-left">
                <h6 class="mb-0">Landmark</h6>
                <p class="mb-0">{landmark}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 text-lg-right text-left">
        <a href="#" class="btn btn-primary">Pre Refister now</a>
      </div>
      
      <div class="col-12 mt-4 order-4">
        <div class="border-bottom border-primary"></div>
      </div>
    </div>

    
    
    <div class="row">
      <div class="col-12 mb-50">
        <h3>About {title}</h3>
        <p>{info}</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12">
        <h3 class="mb-4">Teacher</h3>
      </div>
      
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="media">
          <img class="mr-3 img-fluid" src="https://img.flaticon.com/icons/png/512/194/194936.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" width='60%' alt="speaker"/>
          <div class="media-body">
            <h4 class="mt-0">Jack Mastio</h4>
            Teacher
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="media">
          <img class="mr-3 img-fluid" src="https://i.pinimg.com/originals/55/69/55/5569554b4d8a9bb11965949e1af08dbf.png" width='60%' alt="speaker"/>
          <div class="media-body">
            <h4 class="mt-0">John Doe</h4>
            Teacher
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="media">
          <img class="mr-3 img-fluid" src="https://cdn.dribbble.com/users/4337081/screenshots/13943678/dribbble_1_4x.png" width='60%' alt="speaker"/>
          <div class="media-body">
            <h4 class="mt-0">Randy Luis</h4>
            Teacher
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="media">
          <img class="mr-3 img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png" width='60%' alt="speaker"/>
          <div class="media-body">
            <h4 class="mt-0">Alfred Jin</h4>
            Teacher
          </div>
        </div>
      </div>
      
      <div class="col-12 mt-4 order-4">
        <div class="border-bottom border-primary"></div>
      </div>
    </div>
  </div>
</section>
    </>
    )
}

export default Branches
