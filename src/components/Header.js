import React, { useState, useEffect } from 'react'
import { UilEstate, UilUser, UilFileAlt, UilBag, UilTimes, UilMoon, UilSun, UilApps } from '@iconscout/react-unicons'
import Data from '../Data.json'

function Header({ showNavMenu, setShowNavMenu, selectedTheme, setSelectedTheme, languageJSON }) {

    const [darkerHeader, setDarkerHeader] = useState(false);
    // const [IconTheme, setIconTheme] = useState('UilSun');

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

    return (
        <header className={"header " + (darkerHeader ? 'scroll-header' : undefined)} id="header">
            <nav className="nav container">
                <a href="/" className="nav_logo">{Data.language[languageJSON].header.heading} <p className="country_code">AT</p></a>

                <div className={"nav_menu " + (showNavMenu ? "show-menu" : "")} id="nav-menu">
                    <ul className="nav_list grid" onClick={toggleMenu}>
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
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
