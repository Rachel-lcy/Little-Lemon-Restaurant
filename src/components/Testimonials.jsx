import React from 'react';
import user from '../assets/user.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';

function Testimonials(){
  return(
    <>
      <h2 className='testimonial-heading'>Testimonials</h2>
      <div className='testimonials'>
        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user} alt="user picture" />
              <p>Alexander Hipp </p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user2} alt="user picture" />
              <p>Gabriel Silvério</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user3} alt="user picture" />
              <p>Jack Finnigan</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user4} alt="user picture" />
              <p>Armen Poghosn</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Testimonials;
