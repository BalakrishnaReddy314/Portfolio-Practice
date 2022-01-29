import React from 'react';
import './Mobile.css';

export interface IMobileProps {
  isOpen: boolean;
  setIsOpen: any;
}

function Mobile({isOpen, setIsOpen}: IMobileProps) {
  return <div className='mobile'>
    <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
    <i className="fi fi-rr-cross-circle"></i>
    </div>
    <div className="menu-options">
    <div className="mobile-option">
        <a href="#project">
        <i className="fi fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skills">
        <i className="fi fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="mobile-option">
        <a href="#Work">
        <i className="fi fi-rr-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
        <i className="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  </div>;
}

export default Mobile;
