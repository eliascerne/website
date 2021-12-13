import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectInMind from './components/ProjectInMind';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import ScrollUp from './components/ScrollUp';

function App() {

  

  const [showNavMenu, setShowNavMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode'));
    window.onload = function () {
      if (localStorage.hasOwnProperty('darkMode')) {
        darkMode ? document.body.classList.add('dark-theme') : document.body.classList.add('undefined')
      } else {
        let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        matched ? setDarkMode(true) : setDarkMode(false);
        localStorage.setItem('darkMode', matched);
        document.body.classList.add('dark-undefined');
      }
      
    }

  })
  console.log(darkMode);
  

  return (
    <>
    <Header showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} darkMode={darkMode} setDarkMode={setDarkMode} />
    <main className="main" onClick={showNavMenu ? () => setShowNavMenu(false) : undefined}>
      <Home />
      <AboutMe />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <ProjectInMind />
      <Contact />
      <Terminal />
    </main>
    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
