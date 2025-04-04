import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import BookingForm from './components/BookingForm.jsx';
import { submitAPI, fetchAPI } from './Api.jsx';
import { useNavigate } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}
console.log("✅ App loaded from Vite!"); //
ReactDOM.createRoot(document.getElementById('app'))
.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </React.StrictMode>,);


function initializeTimes() {
  const today= new Date();
  return fetchAPI(today);

}

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.payload);
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
