import React from 'react'
import { UilBrowser } from '@iconscout/react-unicons'

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="portfolio_heading">
                <h2 className="section_title portfolio_title">Portfolio</h2>
                <span className="section_subtitle portfolio_subtitle">Most recent work</span>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card_container">
                        <div className="card_left">
                            <UilBrowser className="card_icon" size="64" />
                            <h1 className="card_header">Website</h1>
                            <p className="card_subheader">Personal Website</p>

                            <p className="card_text">My personal website, I am just adding ore text to see hiow tiumy first and my first and actually contact with HTML, CSS and JS.</p>
                        </div>
                        <div className="card_right">
                            <img className="card_img" src="/images/portfolio1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card_spacer"></div>

                <div className="card">
                    <div className="card_container">
                        <div className="card_left">
                            <UilBrowser className="card_icon" size="64" />
                            <h1 className="card_header">Website</h1>
                            <p className="card_subheader">Personal Website</p>

                            <p className="card_text">My personal website, I am just adding ore text to see hiow tiumy first and my first and actually contact with HTML, CSS and JS.</p>
                        </div>
                        <div className="card_right">
                            <img className="card_img" src="/images/portfolio1.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_container">
                        <div className="card_left">
                            <UilBrowser className="card_icon" size="64" />
                            <h1 className="card_header">Website</h1>
                            <p className="card_subheader">Personal Website</p>

                            <p className="card_text">My personal website, I am just adding ore text to see hiow tiumy first and my first and actually contact with HTML, CSS and JS.</p>
                        </div>
                        <div className="card_right">
                            <img className="card_img" src="/images/portfolio1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
