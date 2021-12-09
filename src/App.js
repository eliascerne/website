import React, {useState} from 'react';
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

function App() {

  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <>
    <Header showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} />
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
    </>
  );
}

export default App;
