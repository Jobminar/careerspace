import React from 'react'
import './about.css'
import aboutus from '../../../assets/images/about-us-image.jpeg'

const About = () => {
  return (
    <>
       <div className='about-us-main'>
            <div className='about-head'>
                <h2>About our company</h2>
            </div>
            <div className='about-sub'>
                <p>
                    we understand that choosing a a career is a significant & lifetime life decision. It can be both exciting and overwhelming in today’s rapidly evolving job market. We’re here to provide guidance and support for all your professional courses and career counselling along with the best institutions to get into.
                </p>
                 <div className='about-image'>
                    <img src={aboutus} alt='aboutus-image'/>
                 </div>
            </div>
       </div>
    </>
  )
}

export default About