import React from 'react';
import greekSalad from './assets/greek-salad.jpg';
import bruchetta from './assets/bruchetta.jpg';
import lemonDessert from './assets/lemon-dessert.jpg';
import blueberries from './assets/blueberries.jpg'
import order from './assets/order.jpg'


function Specials(){
  return(
    <div>
      <div className='topInformation'>
        <h2>This Weeks Specials!</h2>
        <button className='menuBtn'>Online Menu</button>
      </div>
      <div className='foods'>
        <div className='food-card'>
          <img src={greekSalad} alt="Greek Salad" />
          <div className='food-name'>
            <h3>Greek Salad</h3>
            <h3 className='price'>$12.99</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='order-delivery'>Order & Delivery <img src={order} alt="Order icon" style={{ width: '30px', height: '30px', verticalAlign: 'middle', className:'order-icon'}}/></p>
        </div>

        <div className='food-card'>
          <img src={bruchetta} alt="Bruchetta" />
          <div className='food-name'>
            <h3> Bruchetta</h3>
            <h3 className='price'>$12.99</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='order-delivery'>Order & Delivery <img src={order} alt="Order icon" style={{ width: '30px', height: '30px', verticalAlign: 'middle', className:'order-icon'}}/></p>
        </div>

        <div className='food-card'>
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className='food-name'>
            <h3> Lemon Dessert</h3>
            <h3 className='price'>$5.99</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='order-delivery'>Order & Delivery <img src={order} alt="Order icon" style={{ width: '30px', height: '30px', verticalAlign: 'middle', className:'order-icon' }}/></p>
        </div>

        {/* <div className='food-card'>
          <img src={blueberries} alt="blueberries" />
          <div className='food-name'>
            <h3>Blueberries Cake</h3>
            <h3 className='price'>$5.99</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='order-delivery'>Order & Delivery <img src={order} alt="Order icon" style={{ width: '30px', height: '30px', verticalAlign: 'middle', className:'order-icon' }}/></p>
        </div> */}
      </div>
    </div>
  );
}

export default Specials;