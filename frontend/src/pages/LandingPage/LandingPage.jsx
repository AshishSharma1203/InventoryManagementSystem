import React from 'react';
import Navbar from '../../components/Navbars/Navbar'
import AboutUs from '../../components/AboutUs/AboutUs';
import LoginSignup from '../../components/LoginSignUp/LoginSignUp';
import './LandingPage.css';
 
const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <AboutUs />
                <LoginSignup />
            </div>
        </div>
    );
};


 
export default LandingPage;