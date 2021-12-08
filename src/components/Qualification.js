import React from 'react'

function Qualification() {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button button--flex qualification_active" data-target='#education'>
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div className="qualification_button button--flex" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Work
                    </div>

                    <div className="qualification_button button--flex" data-target="#fun">
                        <i className="uil uil-web-grid qualification_icon"></i>
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

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>

                    {/* QUALIFICATION CONTENT Fun */}
                    <div className="qualification_content" data-content id="fun">
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

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
