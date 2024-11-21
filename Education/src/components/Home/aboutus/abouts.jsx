import React from 'react'
import './about.css';
import aboutcompany from '../../../assets/images/aboutcompany.png';

const About = () => {
  return (
    <>
      <div className='px-4'>
        <div className='text-center mt-3 py-2'>
          <h2>About Our Company</h2>
        </div>
        <div>
          <img src={aboutcompany} width='100%'/>
        </div>
      </div>
    </>
  )
}

export default About