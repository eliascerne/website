import React, {useState} from 'react'
import { UilGraduationCap, UilBriefcaseAlt, UilWebGrid } from '@iconscout/react-unicons'

function Qualification() {
    const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification_active')
            })
            target.classList.add('qualification_active')

            tabs.forEach(tab => {
                tab.classList.remove('qualification_active')
            })
            tab.classList.add('qualification_active')
        })
    })



    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button button--flex qualification_active" data-target='#education'>
                        <UilGraduationCap className="qualification_icon" size="28.8" />
                        Education
                    </div>

                    <div className="qualification_button button--flex" data-target="#work">
                    <UilBriefcaseAlt className="qualification_icon" size="28.8" />
                        Work
                    </div>

                    <div className="qualification_button button--flex" data-target="#fun">
                    <UilWebGrid className="qualification_icon" size="28.8" />
                        Fun
                    </div>
                </div>

                <div className="qualification_sections">
                    {/* QUALIFICATION CONTENT Education */}
                    <div className="qualification_content qualification_active" data-content id="education">
                        {/* QUALIFICATION 1 */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Elementary Scool</h3>
                                <span className="qualification_subtitle">Volksschule II Neu Guntramsdorf</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    2010 - 2014
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Grammar School</h3>
                                <span className="qualification_subtitle">BG/BRG Frauengasse</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    2014- 2018
                                </div>
                            </div>
                        </div>

                        {/* QUALIFICATION 3 */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">ELectrical Engineering School</h3>
                                <span className="qualification_subtitle">HTL-Mödling</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    2018 - now
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                {/*<span className="qualification_line"></span>*/}
                            </div>
                        </div>
                    </div>

                    {/* QUALIFICATION CONTENT Work */}
                    <div className="qualification_content" data-content id="work">
                        {/* QUALIFICATION 1 */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Internship at Elin</h3>
                                <span className="qualification_subtitle">Worked with AutoCad</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    July 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                {/* <span className="qualification_line"></span> */}
                            </div>

                            <div>
                                <h3 className="qualification_title">Internship at Fleck</h3>
                                <span className="qualification_subtitle">Installed photovoltaic modules</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    August 2021
                                </div>
                            </div>

                            {/* <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div> */}
                        </div>
                    </div>

                    {/* QUALIFICATION CONTENT Fun */}
                    <div className="qualification_content" data-content id="fun">
                        {/* QUALIFICATION 1 */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Editing Videos</h3>
                                <span className="qualification_subtitle">Primarily for fun and creating commercials with Davinci Resolve</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    Since 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                {/* <span className="qualification_line"></span> */}
                            </div>

                            <div>
                                <h3 className="qualification_title">Programming</h3>
                                <span className="qualification_subtitle">Web-Development and Automating</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calender"></i>
                                    Since 2021
                                </div>
                            </div>

                            {/* <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
