
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
              
              <h2 className="popup-title"></h2>
              <p className="popup-content">
              <div className="social-links">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fas fa-envelope"></i></a>
                    </div>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
