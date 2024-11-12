import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import { Link } from 'react-router-dom';
import footerLogo from './assets/logo-footer.png';


function BookingForm({ availableTimes, dispatch,submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
    //console.log([date,time,guests,occasion]);
    console.log(submitForm); 
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    //dispatch({ type: 'update', payload: selectedDate });
  };

  return (
    <>
      <div className="booking-header-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="booking-logo" />
        </Link>
        <h1 className="booking-header">Little Lemon Restaurant Reservation</h1>
      </div>

      <form onSubmit={handleSubmit} className="booking-form" style={{ display: 'grid', maxWidth: '800px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button className='submitBtn'>Make Your Reservation</button>

      </form>

      <div className="booking-footer">
        <Link to="/">
          <img src={footerLogo} alt="footer logo" className="footer-image" />
        </Link>
        <p>&copy; {new Date().getFullYear()} Little Lemon Website</p>
      </div>
    </>
  );
}

export default BookingForm;
