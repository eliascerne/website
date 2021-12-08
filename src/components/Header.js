import React from 'react'
import {UilEstate, UilUser, UilFileAlt, UilBag, UilTimes, UilMoon, UilSun, UilApps} from '@iconscout/react-unicons'

function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav_logo">Elias Cerne <p className="country_code">AT</p></a>

                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <UilEstate size="1.2rem" className="nav_icon" /> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <UilUser size="1.2rem" className="nav_icon" /> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <UilFileAlt size="1.2rem" className="nav_icon" /> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <UilBag size="1.2rem" className="nav_icon" /> Qualification
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <UilBag size="1.2rem" className="nav_icon" /> Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <UilUser size="1.2rem" className="nav_icon" /> Contact me
                            </a>
                        </li>
                    </ul>
                    <UilTimes size="1.5rem" className="nav_close" id="nav-close" />
                </div>

                <div className="nav_btns">
                    <UilMoon size="1.25rem" className="change-theme" id="theme-button" />

                    <div className="nav_toggle" id="nav-toggle">
                        <UilApps size="1.1rem" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
