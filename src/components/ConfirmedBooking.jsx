import React from "react";
import footerLogo from '../assets/logo-footer.png';
import { Link } from 'react-router-dom';

function ConfirmedBooking(){
  return (
    <div className="confirmation-container">
        <div className="confirmation-content">
            <h1>Booking Confirmed!</h1>
            <p>Your booking has been successfully confirmed. We look forward to seeing you!</p>
        </div>

        <footer className="booking-footer">
          <div>
            <Link to="/">
            <img src={footerLogo} alt="footer logo" className="footer-image" />
          </Link>
          <p>&copy; {new Date().getFullYear()} Little Lemon Website</p>
          </div>

        </footer>
    </div>
);
}

export default ConfirmedBooking;