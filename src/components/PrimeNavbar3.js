import React from 'react'
import '../pages/Pretty.css'

function PrimeNavbar3() {
    return (
     <>
<div class="navigation w-100">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark p-0">
        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"/></a>
        <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navigation">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active">
              <a class="nav-link">Home</a>
            </li>
            <li class="nav-item @@about">
              <a class="nav-link">About</a>
            </li>
            <li class="nav-item @@courses">
              <a class="nav-link" >COURSES</a>
            </li>
            <li class="nav-item @@events">
              <a class="nav-link">EVENTS</a>
            </li>
            <li class="nav-item @@blog">
              <a class="nav-link">BLOG</a>
            </li>
            <li class="nav-item dropdown view">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">Teacher</a>
                <a class="dropdown-item">Teacher Single</a>
                <a class="dropdown-item">Notice</a>
                <a class="dropdown-item">Notice Details</a>
                <a class="dropdown-item">Research</a>
                <a class="dropdown-item">Scholarship</a>
                <a class="dropdown-item">Course Details</a>
                <a class="dropdown-item">Event Details</a>
                <a class="dropdown-item">Blog Details</a>
              </div>
            </li>
            <li class="nav-item @@contact">
              <a class="nav-link" href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
     </>
    )
}

export default PrimeNavbar3
