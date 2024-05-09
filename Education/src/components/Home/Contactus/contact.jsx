import React from 'react'
import './contact.css'
import contactmain from '../../../assets/images/contact-home.png'
import { useNavigate } from 'react-router-dom'

const Contacthome = () => {
  const navigate = useNavigate()

const handlecontact=()=>{
  navigate('/form')
}
  return (
     <>
            
                <div className='contact-home'>
                    <img src={contactmain} alt='contact-home-img'/>
                    <p className='relative1'>Confused about career? Let's Discuss</p>
                    <p className='relative2'>Our expert counsellors are available to assist you in college selection <br/>and admission process. Get enrolled in best university</p>
                    <button className='relative-button' onClick={handlecontact}>Contact</button>
                </div>           
            
     </>
  )
}

export default Contacthome