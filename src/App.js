import React from 'react';
import LoginPage from './LoginPage'; 
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <Router>
  <Routes>
  <Route path="/" element={<LandingPage/>} />
  <Route path="/about" element={<LoginPage />} />
  </Routes>
</Router>
  );
}

export default App;
