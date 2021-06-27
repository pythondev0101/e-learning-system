import React from 'react'
import { Link } from 'react-router-dom';

const primeLogo = require('../assets/icons/prime_logo.png');

const PrimeNavBar2 = () => {
    return (
        <nav class="navbar sticky-top nav-background border border-left-0 border-right-0 border-top-0 navbar navbar-dark navbar-expand-lg py-lg-1"> 
        <div class="container"> 
            <a class="navbar-brand" href="#">
                <Link to='/home'>
                    <img src={primeLogo.default} width="50" height="50" />
                </Link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown-4" aria-controls="navbarNavDropdown-4" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span> 
            </button>                 
            <div class="collapse navbar-collapse " id="navbarNavDropdown-4"> 
                <ul class="navbar-nav"> 
                    <li class="nav-item">
                        <Link to='/home'>
                            <a class="nav-link px-lg-3 py-lg-4">Home</a>
                        </Link>
                    </li>                         
                    <li class="nav-item dropdown">
                        <Link to='/about-us'>
                            <a class="nav-link px-lg-3 py-lg-4">About Us</a>     
                        </Link>                 
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link px-lg-3 py-lg-4 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                            <a class="dropdown-item" href="#">LEARN IN KOREA</a> 
                        </div>                             
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link px-lg-3 py-lg-4 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Testimonies</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                            <a class="dropdown-item" href="#">Our Proof of Gallery</a>
                            <a class="dropdown-item" href="#">Orientation</a>
                            <a class="dropdown-item" href="#">Actual Class</a>
                            <a class="dropdown-item" href="#">Graduation</a>
                            <a class="dropdown-item" href="#">Skill test</a>
                            <a class="dropdown-item" href="#">Departure in Sout Korea</a>
                        </div>                             
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link px-lg-3 py-lg-4 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact Us</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                        </div>                             
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link px-lg-3 py-lg-4 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Branches</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Cebu</a>
                            <a class="dropdown-item" href="#">Tacloban</a>
                            <a class="dropdown-item" href="#">Calbayog</a>
                            <a class="dropdown-item" href="#">Bohol</a>
                            <a class="dropdown-item" href="#">Palawan</a>
                        </div>                             
                    </li>
                    
                </ul>                     
                <a class="btn btn-light ml-lg-auto pl-4 pr-4 rounded-pill" href="#">Log In</a>  
            </div>                 
        </div>             
    </nav>
    )
}

export default PrimeNavBar2
