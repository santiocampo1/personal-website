import React from 'react';
import '../styles/background.css';
import video from '../assets/bg-universe.mp4';
import fallbackImg from '../assets/fallback-image.png';

const Background = () => {
  return (
    <>
    <div className='shadow-overlay'></div>
    <video playsInline autoPlay muted loop preload='auto' id='bg' poster={fallbackImg}><source src={video} type='video/mp4'/></video>
    </>
  )
}

export default Background