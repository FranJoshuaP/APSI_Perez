import React, { useState } from 'react';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
    const navigate = useNavigate()
    const LoginPage = () =>{
        navigate('/about');
    }
 
  return (
    <center><h1>LandingPage</h1><button type='button-19' onClick={LoginPage}>login</button></center>
    
    
    


  );
}

export default LandingPage;
