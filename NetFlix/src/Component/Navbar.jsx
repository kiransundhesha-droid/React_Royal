import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav style={{backgroundColor:"red"}} class="navbar navbar-expand-lg navbar-dark bg-">
        <Link class="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Home 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshow">
                Show
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="ContactUs">
               ContactUs
              </Link>
               </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Watch/:Name">
               Whatching
              </Link>
              </li>

              <li class="nav-item">
              <Link class="nav-link" to="/Movies">
                  movies
              </Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="UseState">
                 UseState
              </Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Employee">
                 Employee
              </Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Form">
                Form
              </Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Dropdown">
              Dropdown
              </Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="/FullValidationForm">
             FullValidationForm
              </Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="/FormValidation1">
             FormValidation
              </Link>
            </li> 
              <li class="nav-item">
              <Link class="nav-link" to="/FormValidation2">
             FormValidation2
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
