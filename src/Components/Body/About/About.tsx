import React from 'react';
import './About.css';
import '../../Common/Social-Contact/SocialContact';
import SocialContact from '../../Common/Social-Contact/SocialContact';

function About() {
  return <div className='about'>
    <div className='about-top'>
      <div className='about-info'>
        Hello There👋, I am<br /> <span className='info-name'>Balakrishna</span>. <br />I love experimenting with web. 
      </div>
      <div className='about-photo'>
        <img src={require('../../../Assets/coding.png').default} className='picture' alt=''/>
      </div>
    </div>
    <div className='about-bottom'>
      <SocialContact />
    </div>
  </div>;
}

export default About;
