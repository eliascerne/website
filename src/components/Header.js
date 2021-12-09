import React, { useState, useEffect } from 'react'
import {UilEstate, UilUser, UilFileAlt, UilBag, UilTimes, UilMoon, UilSun, UilApps} from '@iconscout/react-unicons'

function Header({showNavMenu, setShowNavMenu}) {

    const [darkerHeader, setDarkerHeader] = useState(false);

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

    return (
        <header className={"header " + (darkerHeader ? 'scroll-header' : undefined)} id="header">
            <nav className="nav container">
                <a href="/" className="nav_logo">Elias Cerne <p className="country_code">AT</p></a>

                <div className={"nav_menu " + (showNavMenu ? "show-menu" : "")} id="nav-menu">
                    <ul className="nav_list grid" onClick={toggleMenu}>
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <UilEstate size="19.2" className="nav_icon" /> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <UilUser size="19.2" className="nav_icon" /> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <UilFileAlt size="19.2" className="nav_icon" /> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#qualification" className="nav_link">
                                <UilBag size="19.2" className="nav_icon" /> Qualification
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <UilBag size="19.2" className="nav_icon" /> Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <UilUser size="19.2" className="nav_icon" /> Contact me
                            </a>
                        </li>
                    </ul>
                    <UilTimes size="24" className="nav_close" id="nav-close" onClick={toggleMenu} />
                    {/* <div className="nav_close-area"></div> */}
                </div>

                <div className="nav_btns">
                    <UilMoon size="20" className="change-theme" id="theme-button" />

                    <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
                        <UilApps size="17.6" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
