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
  const [selectedTheme, setSelectedTheme] = useState('');

  
  useEffect(() => {
    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme) {
      selectedTheme === 'dark' ? setSelectedTheme('dark') : setSelectedTheme('white')
    } 
    else {
      let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (matched) {
        setSelectedTheme('dark')
        localStorage.setItem('selectedTheme', 'dark')
      }
    }
  }, []);


  return (
    <body className={selectedTheme === 'dark' ? 'dark-theme' : undefined}>
      <Header showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
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
    </body>
  );
}

export default App;
