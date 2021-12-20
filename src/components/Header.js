import React, { useState, useEffect } from 'react'
import { UilEstate, UilUser, UilFileAlt, UilBag, UilTimes, UilMoon, UilSun, UilApps } from '@iconscout/react-unicons'
import Data from '../Data.json'

function Header({ showNavMenu, setShowNavMenu, selectedTheme, setSelectedTheme, languageJSON, setLanguageJSON, language, setLanguage }) {

    const [darkerHeader, setDarkerHeader] = useState(false);
    const [languageSwitch, setLanguageSwitch] = useState(false);

    function toggleMenu() {
        setShowNavMenu(!showNavMenu);
    }

    useEffect (() => {
        document.addEventListener('scroll', () => {
            var scroll = window.scrollY;

            if (scroll >= 80) {
                setDarkerHeader(true);
            } else {
                setDarkerHeader(false);
            }
        })
    }, [])

    

    function toggleTheme() {
        if (selectedTheme === 'dark') {
            setSelectedTheme('')
            localStorage.setItem('selectedTheme', 'white');
        } else {
            setSelectedTheme('dark')
            localStorage.setItem('selectedTheme', 'dark');
        }
    }

    function showLanguageSwitch() {
        setLanguageSwitch(true);
    }

    function hideLanguageSwitch() {
        setLanguageSwitch(false);
    }

    function changeLanguageToEN() {
        setLanguageSwitch(false);
        setLanguage('en')
        setLanguageJSON(0);
        localStorage.setItem('selectedLanguage', 'en')
    }

    function changeLanguageToDE() {
        setLanguageSwitch(false);
        setLanguage('at')
        setLanguageJSON(1);
        localStorage.setItem('selectedLanguage', 'de')
    }

    return (
        <header className={"header " + (darkerHeader ? 'scroll-header' : undefined)} id="header">
            <nav className="nav container">
                <a href="#home" className="nav_logo" onMouseOver={() => showLanguageSwitch()}>{Data.language[languageJSON].header.heading} <p className="country_code">{language}</p></a>
                <div className={"language_switch_container " + (languageSwitch ? undefined : "hide")} onMouseLeave={() => hideLanguageSwitch()}>
                    <div className="language_switch_box">
                        <div className="language_switch_content">
                            <div className="language_en" onClick={() => changeLanguageToEN()}>
                                <img src="/images/FlagEngland.png" width="50px" height="50px" alt="" className="language_flag"></img>
                                <div className="language_title">English</div>
                            </div>
                            <div className="language_de" onClick={() => changeLanguageToDE()}>
                                <img src="/images/FlagAustria.png" width="50px" height="50px" alt="" className="language_flag"></img>
                                <div className="language_title">German</div>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"nav_menu " + (showNavMenu ? "show-menu" : "")} id="nav-menu">
                    <ul className="nav_list grid" onClick={toggleMenu}>
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <UilEstate size="19.2" className="nav_icon" /> {Data.language[languageJSON].header.navLink1}
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <UilUser size="19.2" className="nav_icon" /> {Data.language[languageJSON].header.navLink2}
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <UilFileAlt size="19.2" className="nav_icon" /> {Data.language[languageJSON].header.navLink3}
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#qualification" className="nav_link">
                                <UilBag size="19.2" className="nav_icon" /> {Data.language[languageJSON].header.navLink4}
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <UilBag size="19.2" className="nav_icon" /> {Data.language[languageJSON].header.navLink5}
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <UilUser size="19.2" className="nav_icon" /> {Data.language[languageJSON].header.navLink6}
                            </a>
                        </li>
                    </ul>
                    <UilTimes size="24" className="nav_close" id="nav-close" onClick={toggleMenu} />
                    {/* <div className="nav_close-area"></div> */}
                </div>

                <div className="nav_btns">
                    {selectedTheme === 'dark' ? <UilSun size="20" className="change-theme" id="theme-button" onClick={toggleTheme} /> : <UilMoon size="20" className="change-theme" id="theme-button" onClick={toggleTheme} />}
                    

                    <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
                        <UilApps size="17.6" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
