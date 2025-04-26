
 import React, { useState } from 'react';
import './about.css' ;


export default function PopupWindow() {
    const [isOpen, setIsOpen] = useState(false);
  
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
  
    return (
      <div className="popup-container">
        <button 
          onClick={openPopup}
          className="cta-button"
  >
         click here 
        </button>
  
        {isOpen && (
          <div className="overlay">
            <div className="popup-window">
              <button 
                onClick={closePopup}
                className="close-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <h2 className="popup-title"> you can find me in </h2>
              <p className="popup-content">
              <div className="social-links">
                        <a href="https://www.linkedin.com/in/moaz-ahmed-12b1a831b/" target='_blank'><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/mo3az-web" target='_blank'><i className="fab fa-github"></i></a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B201080357224&text&type=phone_number&app_absent=0" target='_blank'><i className="fab fa-whatsapp"></i></a>
                    </div>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
