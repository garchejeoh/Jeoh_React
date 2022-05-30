import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header id="header" class="fixed-top d-flex align-items-center header-transparent">
        <div class="container d-flex justify-content-between align-items-center">
    
          <div id="logo">
            <h1><a href="index.html">Jeoh Garche</a></h1>
          </div>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;