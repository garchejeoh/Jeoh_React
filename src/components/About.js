import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about" class="about">
        <div class="about-me container">
          <div class="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
          </div>
          <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src={process.env.PUBLIC_URL+"img/itsme.jpg"} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Jeoh Garche | Amateur Graphic Artist</h3>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>July 29, 2002</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.garchejeoh.me</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>09394311243</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Las Pinas, Metro Manila</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Course:</strong> <span>BSIT</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jeohgarche@gmail.com</span></li>
                  <li><i class="bi-facebook"></i><a href="https://www.facebook.com/gjeoh"><strong>Facebook/gjeoh</strong></a></li>
                </ul>
              </div>
            </div>
            <p align>
              As an amateur Graphic Artist, I have experienced handling several food, dental, and clothing businesses, managing their social media advertisments, product poster, and other layout designs. Samples of my previous design are displayed in my portfolio tab.
            </p>
          </div>
          
          </div>
      </div>
      </section>
    );
  }
}
export default About;