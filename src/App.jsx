import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// Tailwind CSS is used for all styling
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import TestDrive from './components/TestDrive.jsx';
import WhyOrbit from './components/WhyOrbit.jsx';
import Facilities from './components/Facilities.jsx';
import ProductFeatures from './components/ProductFeatures.jsx';
import EScooters from './components/EScooters.jsx';
import Gallery from './components/Gallery.jsx';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <TestDrive />
            <WhyOrbit />
            <Facilities />
            <ProductFeatures />
            <EScooters />
            <Gallery />
            <Feedback />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
