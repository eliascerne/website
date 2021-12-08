import React from 'react'
import { UilInstagram, UilGithubAlt } from '@iconscout/react-unicons'

function Home() {
    return (
        <section className="home section" id="section">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="https://www.instagram.com/eriastheking/" target="_blank" className="home_social-icon">
                            <UilInstagram size="1.25rem" />
                        </a>

                        <a href="https://github.com/erias04/" target="_blank" className="home_social-icon">
                            <UilGithubAlt size="1.25rem" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
