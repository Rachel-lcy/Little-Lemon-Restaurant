import React from 'react';
import logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


function Header(){
    return(
      <>
        <header className="header">
          <img src={logo} alt="Little Lemon Logo" className="logo-image"/>
          <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/booking-a-table">Reservation</Link>
            <Link to="/order-online">Order Online</Link>

          </nav>
        </header>
      </>
    );
}
export default Header;