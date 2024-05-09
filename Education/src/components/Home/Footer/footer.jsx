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
           <div className='footer-sub'>
                <p>Beside Tata motors , <br/>Panama X roads ,<br/> beneath Bata showroom building , <br/>Vanasthalipuram, 500070</p>
           </div>
           <div className='footer-sub2'>
               <p className='getintouch'>Get In Touch</p>
               <div className='call-mail'>
                <img src={call} alt='call'/>
                <p>9703156666</p>
               </div>
               <div className='call-mail'>
                <img src={mail} alt='mail'/>
                <p>Thecareerspace1@gmail.com</p>
               </div>
               <div className='s-icons'>
                 <img src={facebook} alt='facebook'/>
                 <img src={linkedin} alt='linkedin'/>
                 <img src={twitter} alt='x'/>
                 <img src={instagram} alt='insta' />
               </div>
           </div>
       </div>
    </>
  )
}

export default Footer