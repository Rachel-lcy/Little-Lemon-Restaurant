import React from 'react';
import logo from '../assets/logo-footer.png';

function Footer(){
  return(
  <footer className="footer">
    
      <img src={logo} alt="footer logo" className="footer-image"/>
  
  
    <div className="footer-information">
      <div>
        <h4>Doormat Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
      </div>
      <div>
        <h4>Social Media Links</h4>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
    </div>

    <p>&copy; {new Date().getFullYear()} Little Lemon Website</p>
  </footer>
  );
}
export default Footer;
