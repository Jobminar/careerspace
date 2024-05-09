import React from 'react';
import Homeservicesdata from './homeservices';
import './homeservices.css';

const Homeservice = () => {
  return (
    <>
   <div className='services-main'>
  <div className='service-headdings'>
    <h1>Services</h1>
  </div>
  <div className='home-services-main'>
    {Homeservicesdata.map((service, index) => (
      <div key={index} className='home-services-sub'>
        <div className='service-img'> 
          <img src={service.image} alt='service image'/>
        </div>
        <h2>{service.title}</h2>
        <p>{service.desc}</p>
      </div>
    ))}
  </div>
</div>

     
    </>
  );
};

export default Homeservice;
