import React, { useRef } from 'react';
import './header.css';
import logo from '../../../assets/images/logo.jpeg'

const Header = () => {
 

  const scrollToAboutUs = () => {
    window.scrollTo({ top: 1400, behavior: 'smooth' });
  };

  const scrollToServices = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };
  

  const scrollToCareer = () => {
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 900, behavior: 'smooth' });
  };

  return (
    <>
     
      <div className="header-con">
      <div className='header-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='main-header'>
        <p onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</p>
        <p onClick={scrollToAboutUs}>About Us</p>
        <p onClick={scrollToServices}>Services</p>
        <p onClick={scrollToCareer}>Career</p>
        <p onClick={scrollToContact}>Contact</p>
      </div>
      
      </div>
    
    </>
  );
};

export default Header;
