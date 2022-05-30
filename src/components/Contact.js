import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <section id="contact" class="contact header">
        <div class="container">

          <div class="section-title">
            <h1>My Contacts</h1>
          </div>

          <div class="row mt-2">

            <div class="col-md-6 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-map"></i>
                <h3>My Address</h3>
                <p>Almanza Uno, Las Pinas City</p>
              </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bi bi-facebook"></i>
                <h3>Facebook</h3>
                <a href="https://www.facebook.com/gjeoh" class="facebook"><p>Facebook.com/gjeoh</p></a>
              </div>
            </div>

            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>jeohgarche@gmail.com</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>+63 (939) 431 1243</p>
              </div>
            </div>
          </div>
        </div>
  </section>
    );
  }
}
export default Contact;