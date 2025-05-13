import React, { useState } from 'react'; import myProfile from '/src/assets/portfoliopic.jpg';
import './about.css' ;

import PopupWindow from './popup';
function About (){

    return(
      
    <>
    <div className="about-section" id="about">
    </div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    
    <section className="hero">
        <div className="container">
            <div className="hero">
                <div className="hero-content">
                    <h1>Hello, I'm Moaz</h1>
                    <h2> web devoloper</h2>
                    <p>Welcome to my portfolio! I'm a passionate web devoloper with expertise in frontend. I'm dedicated to delivering high-quality work and constantly expanding my knowledge and skills.</p>
                   <h2> if you wanna know more about me and get to my social media click the button below </h2>
                    <PopupWindow></PopupWindow>
                   
                </div>
                
                <div className="hero-image">
                    <div className="profile-container">
                        <img src={myProfile} alt="a pic of the greatest web devoloper ever" className="profile-photo" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
);

}
export default About;