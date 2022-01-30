import React, { useState, useLayoutEffect } from 'react'
import { UilInstagram, UilGithubAlt, UilMessage, UilAngleDown } from '@iconscout/react-unicons'
import Data from '../Data.json'


function Home({ language, languageJSON }) {
    // const [languageJSON, setLanguageJSON] = useState(0);
    
    // useLayoutEffect(() => {
    //    language === "de" ? setLanguageJSON(1) : setLanguageJSON(0) 
    // })
    

    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="https://www.instagram.com/eriastheking/" target="_blank" className="home_social-icon">
                            <UilInstagram size="20" />
                        </a>

                        <a href="https://github.com/erias04/" target="_blank" className="home_social-icon">
                            <UilGithubAlt size="20" />
                        </a>
                    </div>

                    <div className="home_img">
                        <img className="home_blob-img" src="" alt="Elias Cerne, EliasCerne, eliascerne, elias cerne, cerne, Cerne, Elias, elias" />
                    </div>

                    <div className="home_data">
                        <h1 className="home_title">{Data.language[languageJSON].home.heading}</h1>
                        <h3 className="home_subtitle">{Data.language[languageJSON].home.subheading}</h3>
                        <p className="home_description">{Data.language[languageJSON].home.description}</p>

                        <a href="#contact" className="button button--flex">
                        {Data.language[languageJSON].home.button}
                            <UilMessage className="button_icon" size="20" />
                        </a>
                    </div>
                </div>

                <div className="home_scroll">
                    <a href="#about" className="home_scroll-button button--flex">
                        <UilAngleDown size="20" className="home_scroll-arrow" />
                        <span className="home_scroll-name">{Data.language[languageJSON].home.scrollDown}</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
