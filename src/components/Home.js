import React from 'react'
import { UilInstagram, UilGithubAlt } from '@iconscout/react-unicons'

function Home() {
    return (
        <section className="home section" id="section">
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
                        <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>

                                <image className="home_blob-img" x='12' y='18' xlinkHref="" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
