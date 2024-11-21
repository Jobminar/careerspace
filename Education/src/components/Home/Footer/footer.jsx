import React from 'react'
import './footer.css'
import call from '../../../assets/images/call.png'
import mail from '../../../assets/images/mail.png'
import facebook from '../../../assets/images/facebook.png'
import linkedin from '../../../assets/images/linkedin.png'
import twitter from '../../../assets/images/twitter.png'
import instagram from '../../../assets/images/instagram.png'

const Footer = () => {
  return (
    <>
      <div className='footer-main'>
        <div className='d-flex justify-content-center pe-3'>
          <div>
            <li style={{ listStyle: 'none' }}>Beside tata Motots,</li>
            <li style={{ listStyle: 'none' }}>Panama X roads ,</li>
            <li style={{ listStyle: 'none' }}>Beneath Bata showroom building ,</li>
            <li style={{ listStyle: 'none' }}>Vanasthalipuram, 500070</li>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div>
            <div className='fs-5 fw-bold'>
              Get IN Touch
            </div>
            <div className='fw-bold fs-6'>
              <div className='bi-telephone-outbound'> 9703156666</div>
              <div className='bi-envelope'> Thecareerspace1@gmail.com</div>
            </div>
            <div className='d-flex gap-3 socialmedia'>
              <div className='bi-facebook'></div>
              <div className='bi-linkedin'></div>
              <div className='bi-twitter'></div>
              <div className='bi-instagram'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer