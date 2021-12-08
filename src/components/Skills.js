import React from 'react'
import { UilBracketsCurly, UilAngleDown, UilServer } from '@iconscout/react-unicons'

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My technical level</span>

            <div className="skills_container container grid">
                <div>
                    {/* SKILL 1 */}
                    <div className="skills_content skills_open">
                        <div className="skills_header">
                            <UilBracketsCurly className="skills_icon" size="32" />

                            <div>
                                <h1 className="skills_title">Web Development</h1>
                                <span className="skills_subtitle">More than 2 years</span>
                            </div>

                            <UilAngleDown className="skills_arrow" size="32" />
                        </div>

                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">React</h3>
                                    <span className="skills_number">50%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_sub1Skill1"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Nodejs</h3>
                                    <span className="skills_number">50%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_sub2Skill1"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SKILL 2 */}
                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <UilServer className="skills_icon" size="32" />

                            <div>
                                <h1 className="skills_title">Automating</h1>
                                <span className="skills_subtitle">Workflows</span>
                            </div>

                            <UilAngleDown className="skills_arrow" size="32" />
                        </div>

                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Python</h3>
                                    <span className="skills_number">50%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_sub1Skill2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills