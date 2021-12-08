import React from 'react'
import { UilMessage } from '@iconscout/react-unicons'

function ProjectInMind() {
    return (
        <section className="project section" id="project-in-mind">
            <div className="project_bg">
                <div className="project_container container grid">
                    <div className="project_data">
                        <h2 className="project_title">You have a new project</h2>
                        <p className="project_description">Contact Me now!</p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact Me
                            <UilMessage className="project_icon button_icon" size="20" />
                        </a>
                    </div>

                    <img src="/images/portfolio1.jpg" alt="" className="project_img" />
                </div>
            </div>
        </section>
    )
}

export default ProjectInMind
