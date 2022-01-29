import React from 'react';
import Separator from '../../Common/Seperator/Separator';
import SocialContact from '../../Common/Social-Contact/SocialContact';
import './Contact.css';

function Contact() {
  return <div className='contact'>
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? conatct me on any of the platform.</p>
        <SocialContact />
      </div>
      <div className="download">
        <a download href={require("../../../Assets/BalakrishnaReddy_TirumalaReddy_Resume (2).PDF").default}>
        <i className="fi fi-rr-cloud-download download-icon"></i>Download Resume
        </a>
      </div>
    </div>
  </div>;
}

export default Contact;
