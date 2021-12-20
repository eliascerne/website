import React, { useState, useEffect, useLayoutEffect } from 'react';
import IPGeolocationAPI from 'ip-geolocation-api-javascript-sdk';
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
import BinaryClock from './components/BinaryClock';

function App() {

  

  const [showNavMenu, setShowNavMenu] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const [languageJSON, setLanguageJSON] = useState(0);


  useLayoutEffect(() => {
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
    setLoading(false);

    // var ipgeolocationApi = new IPGeolocationAPI('2c3a4ea379de4c2b8c7e3f23e3d664dd', false);
    // ipgeolocationApi.getGeolocation(handleResponse);
    // function handleResponse(json) {
    //   console.log(json.country_code2);
    //   if (json.country_code2 === 'AT' | 'DE') {
    //     console.log(1);
    //     setLanguage('german');
    //     setLanguageJSON(1);
    //   }
    // }
    setLanguage('de');
    setLanguageJSON(1);

  }, []);

  useEffect(() => {
    }, []);



  // if (language === 'german') {
  //   return null
  // }

  return (
    loading ? 
      <body className="dark-theme">
        <BinaryClock />
      </body>

      :
      <body className={selectedTheme === 'dark' ? 'dark-theme' : undefined}>
      <Header showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} languageJSON={languageJSON} />
      <main className="main" onClick={showNavMenu ? () => setShowNavMenu(false) : undefined}>
        <Home languageJSON={languageJSON} />
        <AboutMe languageJSON={languageJSON} />
        <Skills languageJSON={languageJSON} />
        <Qualification languageJSON={languageJSON} />
        <Services languageJSON={languageJSON} />
        <Portfolio languageJSON={languageJSON} />
        <ProjectInMind languageJSON={languageJSON} />
        <Contact languageJSON={languageJSON} />
        <Terminal />
      </main>
      <Footer languageJSON={languageJSON} />
      <ScrollUp />
    </body>
  );
}

export default App;
