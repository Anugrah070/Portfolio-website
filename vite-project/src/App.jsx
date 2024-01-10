import React from 'react';
import './App.css';
import '../public/styles.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/Index';
import AboutPage from './Pages/AboutPage';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        {/* ^ This is the main (top-level) Router */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
