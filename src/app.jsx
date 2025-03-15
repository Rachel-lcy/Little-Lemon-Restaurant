import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';
import Main from './main';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                    <>
                        <Header />
                        <Hero />
                        <Specials />
                        <Testimonials />
                        <About />
                        <Footer />
                    </>
                    }
                />
                <Route path="/booking-a-table" element={<Main />} />
                <Route path="/confirmation-page" element={<ConfirmedBooking />} />
            </Routes>
        </Router>
    );
}

export default App;
