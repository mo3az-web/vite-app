import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {

 



  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Let's get in touch. Send me a message!</p>
        </div>
        <h1 className='logos'>feel free to contact me</h1>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="info-text">
                
                <h5>Location</h5>
                <p>Aldakahlya, MANS, EGY</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="info-text">
                <h5>Email</h5>
                <p>mo3az13579@gmail.com@example.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="info-text">
                <h5>Call Me</h5>
                <p>+20 01080357224</p>
              </div>
            </div>

          </div>

         
          </div>
        </div>
    </section>
  );
};

export default ContactSection;