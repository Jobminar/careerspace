import React from 'react'
import './home.css'
import mainimg from '../../assets/images/main-img.png'
import Homeservice from './Homeservices/homeservicess'
import About from './aboutus/abouts'
import Abroadmain from '../abroad/abroads'
import Footer from './Footer/footer'
import Contacthome from './Contactus/contact'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleFormClick = () => {
    // Navigate to the form page
    navigate('/form'); // Replace '/form' with the path to your form page
  };

  return (
    <>
      <div className='home-main-con'>
        <div className='main-img-con'>
          <img src={mainimg} alt='mainimg'/>
          <p className='home-relative1'>Best Educational consultant<br/> in India</p>
          <p className='home-relative2'>We are India’s leading educational  consultant providing admission guidance for top courses <br/>in India and abroad</p>
          <div className='home-relativebuttons'>
            <button className='button1'>Home</button>
            <button className='button2' onClick={handleFormClick}>Contact</button>
          </div>
        </div>
        <Homeservice/>
        <Contacthome/>
        <About/>
        <Abroadmain/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
