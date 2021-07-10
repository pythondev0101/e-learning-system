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
                        <Link to='/services'>
                            <a class="nav-link px-lg-3 py-lg-4">Services</a>     
                        </Link>                 
                    </li>
                    <li class="nav-item"> 
                        <Link to='/testimonies'>
                            <a class="nav-link px-lg-3 py-lg-4">Testimonies</a>
                        </Link>                          
                    </li>
                    <li class="nav-item dropdown"> 
                        <Link to='/contact-us'>
                            <a class="nav-link px-lg-3 py-lg-4" href="#" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded="false">Contact Us</a>
                        </Link>
                                                  
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link px-lg-3 py-lg-4 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Branches</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/branches-cebu'>
                                <a class="dropdown-item" href="#">Cebu</a>
                            </Link>
                            <Link to='branches-tacloban'>
                                <a class="dropdown-item" href="#">Tacloban</a>
                            </Link>
                            <Link to='branches-calbayog'>
                                <a class="dropdown-item" href="#">Calbayog</a>
                            </Link>
                            <Link to='branches-bohol'>
                                <a class="dropdown-item" href="#">Bohol</a>
                            </Link>
                            <Link to='branches-palawan'>
                                <a class="dropdown-item" href="#">Palawan</a>
                            </Link>
                            <Link to='branches-butuan'>
                                <a class="dropdown-item" href="#">Butuan</a>
                            </Link>
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
