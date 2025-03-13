import React from 'react';
import aboutPicture from './assets/chef.jpg';
import restaurantPicture from './assets/restaurant2.jpg';

function About(){
  return(
    <div className='all-about'>
      <div>
      <div className='about-section'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. </p>
      </div>
      </div>

      <div className='picture-section'>
        <div className='show-pictures'>
          <img src={restaurantPicture} alt="" className="picture"/>
          <img src={aboutPicture} alt="" className="picture-overlapping"/>
        </div>  
      </div>
      
    </div>
    
  );
}

export default About;