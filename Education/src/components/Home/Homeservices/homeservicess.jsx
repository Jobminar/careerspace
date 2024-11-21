import React from 'react';
import Homeservicesdata from './homeservices';
import './homeservices.css';

const Homeservice = () => {
  return (
    <>
      <div>
        <div className='servicesHeading'>
          <span className='btn fs-1 fw-medium'>Services</span>
        </div>
        <div>
          <div className='d-flex gap-3 mt-3 justify-content-center flex-wrap'>
            {
              Homeservicesdata.map((service, index) => (
                <div className='card p-2'>
                  <div className='text-center card-img-top'>
                    <img src={service.image} alt='service image' className='cardimg' />
                  </div>
                  <div className='card-body align-content-center' >
                    <div className='fw-medium'>{service.title}</div>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeservice;
