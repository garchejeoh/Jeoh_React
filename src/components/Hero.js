import React, { Component } from 'react';


class Hero extends Component {
  render() {
    return (
      <section id="hero">
          <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Jeoh Garche</h1>
            <h2>A portfolio that showcase my works</h2>
            <a href="#about" class="btn-get-started">Get Started</a>
         </div>
      </section>
    );
  }
}
export default Hero;