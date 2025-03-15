import React from 'react';
import heroPicture from '../assets/hero.jpg';

function Hero(){
  return(
    <div className='hero-section'>
      <div className='hero-container'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. </p>
        <button className='button'>Reserve a Table</button>
      </div>
      <div className='hero-image'>
        <img src={heroPicture} alt="hero picture" />
      </div>
    </div>
  );
}

export default Hero