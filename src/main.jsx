import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import BookingForm from './components/BookingForm.jsx';
import { submitAPI, fetchAPI } from './Api.jsx';
import { useNavigate } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

function initializeTimes() {
  const today= new Date();
  return fetchAPI(today);

}

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.payload); // 使用用户选择的日期调用 fetchAPI
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  const submitForm = (formData)=> {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted){
      navigate('/confirmation-page')
    }
  };

  return (
    <>
    <BookingForm
    availableTimes={availableTimes}
    submitForm={submitForm}/>
    </>
  );
}

export default Main;
