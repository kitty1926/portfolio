
import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/hero';
import About from './components/about';
import Skills from './components/skill';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
