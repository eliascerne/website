import React from 'react'

function Qualification() {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div class="qualification_container container">
                <div class="qualification_tabs">
                    <div class="qualification_button button--flex qualification_active" data-target='#education'>
                        <i class="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div class="qualification_button button--flex" data-target="#work">
                        <i class="uil uil-briefcase-alt qualification_icon"></i>
                        Work
                    </div>

                    <div class="qualification_button button--flex" data-target="#fun">
                        <i class="uil uil-web-grid qualification_icon"></i>
                        Fun
                    </div>
                </div>

                <div class="qualification_sections">
                    {/* QUALIFICATION CONTENT Education */}
                    <div class="qualification_content qualification_active" data-content id="education">
                        {/* QUALIFICATION 1 */}
                        <div class="qualification_data">
                            <div>
                                <h3 class="qualification_title">Elementary Scool</h3>
                                <span class="qualification_subtitle">Volksschule II Neu Guntramsdorf</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2010 - 2014
                                </div>
                            </div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div class="qualification_data">
                            <div></div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>

                            <div>
                                <h3 class="qualification_title">Grammar School</h3>
                                <span class="qualification_subtitle">BG/BRG Frauengasse</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2014- 2018
                                </div>
                            </div>
                        </div>

                        {/* QUALIFICATION 3 */}
                        <div class="qualification_data">
                            <div>
                                <h3 class="qualification_title">ELectrical Engineering School</h3>
                                <span class="qualification_subtitle">HTL-Mödling</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2018 - now
                                </div>
                            </div>

                            <div>
                                <span class="qualification_rounder"></span>
                                {/*<span class="qualification_line"></span>*/}
                            </div>
                        </div>
                    </div>

                    {/* QUALIFICATION CONTENT Work */}
                    <div class="qualification_content" data-content id="work">
                        {/* QUALIFICATION 1 */}
                        <div class="qualification_data">
                            <div>
                                <h3 class="qualification_title">Elementary Scool</h3>
                                <span class="qualification_subtitle">Volksschule II Neu Guntramsdorf</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2010 - 2014
                                </div>
                            </div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div class="qualification_data">
                            <div></div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>

                            <div>
                                <h3 class="qualification_title">Grammar School</h3>
                                <span class="qualification_subtitle">BG/BRG Frauengasse</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2014- 2018
                                </div>
                            </div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>
                        </div>
                    </div>

                    {/* QUALIFICATION CONTENT Fun */}
                    <div class="qualification_content" data-content id="fun">
                        {/* QUALIFICATION 1 */}
                        <div class="qualification_data">
                            <div>
                                <h3 class="qualification_title">Elementary Scool</h3>
                                <span class="qualification_subtitle">Volksschule II Neu Guntramsdorf</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2010 - 2014
                                </div>
                            </div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div class="qualification_data">
                            <div></div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>

                            <div>
                                <h3 class="qualification_title">Grammar School</h3>
                                <span class="qualification_subtitle">BG/BRG Frauengasse</span>
                                <div class="qualification_calendar">
                                    <i class="uil uil-calender"></i>
                                    2014- 2018
                                </div>
                            </div>

                            <div>
                                <span class="qualification_rounder"></span>
                                <span class="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
