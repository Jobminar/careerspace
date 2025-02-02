import React, { useState } from 'react';
import './abroad.css';
import StudyAbroadImg from '../../assets/images/abroad-study.png';
import StudyMSImg from '../../assets/images/abroad-study.png';
import StudyMBBSImg from '../../assets/images/abroad-study.png';
import { useNavigate } from 'react-router-dom';

const Abroadmain = () => {
  const frames = [
    {
      image: StudyAbroadImg,
      title: 'Want to Study in India?',
      description: 'We offered admissions for B.TECH , MBBS , M.TECH , BBA , MBA , MCA..'
    },
    {
      image: StudyMSImg,
      title: 'MS in Abroad',
      description: 'Elevate your academic journey and professional aspirations by pursuing a Masters degree abroad.'
    },
    {
      image: StudyMBBSImg,
      title: 'Dreaming of Studying Medicine in Abroad?',
      description: 'Take the first step towards a fulfilling career in medicine by pursuing your MBBS degree abroad.'
    }
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  const nextFrame = () => {
    setCurrentFrame((currentFrame + 1) % frames.length);
  };

  const prevFrame = () => {
    setCurrentFrame((currentFrame + frames.length - 1) % frames.length);
  };

  return (
    <>
      <div className='abroad-main fade-enter m-2 rounded-3'>
        <div className='abroad-relative'>
          <div className='abroadTitle'>{frames[currentFrame].title}</div>
          <p className='abroadscription'>{frames[currentFrame].description}</p>
          <button onClick={()=>window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className='btn btn-warning'>Apply</button>
        </div>
        <div className='carousel-controls'>
          <button className='prev-button' onClick={()=>prevFrame()}>&#10094;</button>
          <button className='next-button' onClick={()=>nextFrame()}>&#10095;</button>
        </div>
      </div>
    </>
  );
};

export default Abroadmain;
