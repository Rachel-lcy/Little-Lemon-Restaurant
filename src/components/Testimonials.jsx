import React from 'react';
import user from '../assets/user.png'

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
              <p>Name</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user} alt="user picture" />
              <p>Name</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user} alt="user picture" />
              <p>Name</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

        <div className='t-card'>
          <div className='center-card'>
            <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
            <div className='right-name'>
              <img src={user} alt="user picture" />
              <p>Name</p>
            </div>
            <p>Review All ...</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Testimonials;
