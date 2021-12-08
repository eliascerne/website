import React from 'react'

function AboutMe() {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>

            <div className="about_container container grid">
                <img src="" alt="" className="about_img" />

                <div className="about_data">
                    <p className="about_description">Since the last couple of years I developed skills in web development, especially working with Ract and Nodejs but also automating workflows with Python.</p>

                    <div className="about_info">
                        <div>
                            <span className="about_info-title">02+</span>
                            <span className="about_info-name">Years <br /> experience</span>
                        </div>

                        <div>
                            <span class="about_info-title">02+</span>
                            <span class="about_info-name">Completed <br /> Projects</span>
                        </div>

                        <div>
                            <span class="about_info-title">02+</span>
                            <span class="about_info-name">Companies <br /> Worked</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
