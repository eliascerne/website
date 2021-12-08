import React from 'react'
import { UilInstagram, UilGithubAlt } from '@iconscout/react-unicons'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
        <div className="footer_bg">
            <div className="footer_container container grid">
                <div>
                    <h1 className="footer_title">Elias</h1>
                    <span className="footer_subtitle">Student</span>
                </div>

                <ul className="footer_links">
                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer_link">Contact Me</a>
                    </li>
                </ul>

                <div className="footer_socials">
                    <a href="https://instagram.com/eriastheking/" target="_blank" className="footer_social">
                        <UilInstagram />
                    </a>

                    <a href="https://github.com/erias04/" target="_blank" className="footer_social">
                        <UilGithubAlt />
                    </a>
                </div>
            </div>

            <p className="footer_copy"><span id="terminal-pop">@ 2021</span>-{currentYear} Elias Cerne. All Rights Reserved!</p>
        </div>
    </footer>
    )
}

export default Footer
