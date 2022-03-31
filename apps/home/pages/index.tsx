import React, { useState, useEffect, useLayoutEffect } from 'react';
// import IPGeolocationAPI from 'ip-geolocation-api-javascript-sdk';
// import './App.css';
// import Header from './components/Header';
import { SectionHome } from '@eliascerne/section/home';
import { SectionAboutMe } from '@eliascerne/section/about-me';
// import AboutMe from './components/AboutMe';
// import Skills from './components/Skills';
// import Qualification from './components/Qualification';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import ProjectInMind from './components/ProjectInMind';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Terminal from './components/Terminal';
// import ScrollUp from './components/ScrollUp';
// import BinaryClock from './components/BinaryClock';

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const [languageJSON, setLanguageJSON] = useState(0);
  const [terminalShow, setTerminalShow] = useState(false);

  useLayoutEffect(() => {
    // Get local Theme from user
    const selectedTheme = localStorage.getItem('selectedTheme');

    // Set dark mode if it has been set already
    if (selectedTheme) {
      selectedTheme === 'dark'
        ? setSelectedTheme('dark')
        : setSelectedTheme('white');
    }
    // change theme with the local Theme preset (user)
    else {
      const matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (matched) {
        setSelectedTheme('dark');
        localStorage.setItem('selectedTheme', 'dark');
      }
    }
    setLoading(false);

    // get Language and the API
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    // const ipgeolocationApi = new IPGeolocationAPI(
    //   '2c3a4ea379de4c2b8c7e3f23e3d664dd',
    //   false
    // );
    const lang = navigator.language;

    // If the user switched the Language already
    if (selectedLanguage && selectedLanguage === 'de') {
      setLanguage('at');
      setLanguageJSON(1);
      console.log(1);
    } else if (selectedLanguage && selectedLanguage === 'en') {
      setLanguage('en');
      setLanguageJSON(0);
      console.log(2);
    }

    // If we get the local Preset of the user
    if (
      (!selectedLanguage && lang === 'de-AT') ||
      (!selectedLanguage && lang === 'de-DE') ||
      (!selectedLanguage && lang === 'de-LI') ||
      (!selectedLanguage && lang === 'de-CH')
    ) {
      setLanguage('at');
      setLanguageJSON(1);
      console.log(3);
    } else if (!selectedLanguage && lang) {
      setLanguage('en');
      setLanguageJSON(0);
      console.log(6);
    }
    // If everything goes wrong (fail-save methode) get the language from the ipaddress
    // else if (!selectedLanguage && !lang) {
    //   console.log(4);
    //   ipgeolocationApi.getGeolocation(handleResponse);
    //   const handleResponse = (json: any) => {
    //     console.log(json.country_code2);
    //     if (json.country_code2 === 'AT' | 'DE') {
    //       console.log(5);
    //       setLanguage('at');
    //       setLanguageJSON(1);
    //     }
    //   }
    // }
  }, []);

  // return (
  //   <body className="dark-theme">
  //     <BinaryClock />
  //   </body>
  // );

  return (
    <main className={selectedTheme === 'dark' ? 'dark-theme' : undefined}>
      {/* <Header
        showNavMenu={showNavMenu}
        setShowNavMenu={setShowNavMenu}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        languageJSON={languageJSON}
        setLanguageJSON={setLanguageJSON}
        language={language}
        setLanguage={setLanguage}
      /> */}
      <main
        className="main"
        onClick={showNavMenu ? () => setShowNavMenu(false) : undefined}
      >
        <SectionHome languageJSON={languageJSON} />
        <SectionAboutMe languageJSON={languageJSON} />
        {/* <Skills languageJSON={languageJSON} />
        <Qualification languageJSON={languageJSON} />
        <Services languageJSON={languageJSON} />
        <Portfolio languageJSON={languageJSON} />
        <ProjectInMind languageJSON={languageJSON} />
        <Contact languageJSON={languageJSON} />
        <Terminal
          terminalShow={terminalShow}
          setTerminalShow={setTerminalShow}
        /> */}
      </main>
      {/* <Footer languageJSON={languageJSON} setTerminalShow={setTerminalShow} />
      <ScrollUp /> */}
    </main>
  );
}

export default App;
