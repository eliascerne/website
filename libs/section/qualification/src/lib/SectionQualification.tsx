import React, { useState } from 'react';
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilWebGrid,
} from '@iconscout/react-unicons';
import Data from '@eliascerne/data';

import styles from './SectionQualification.module.css';

/* eslint-disable-next-line */
export interface SectionQualificationProps {
  languageJSON: any;
}

export function SectionQualification(props: SectionQualificationProps) {
  const { languageJSON } = props;
  const [showQualification1, setShowQualification1] = useState(true);
  const [showQualification2, setShowQualification2] = useState(false);
  const [showQualification3, setShowQualification3] = useState(false);

  function toggleQualification1() {
    if (!showQualification1) {
      setShowQualification1(true);
    }

    setShowQualification2(false);
    setShowQualification3(false);
  }

  function toggleQualification2() {
    if (!showQualification2) {
      setShowQualification2(true);
    }

    setShowQualification1(false);
    setShowQualification3(false);
  }

  function toggleQualification3() {
    if (!showQualification3) {
      setShowQualification3(true);
    }

    setShowQualification1(false);
    setShowQualification2(false);
  }
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">
        {Data.language[languageJSON].qualification.heading}
      </h2>
      <span className="section_subtitle">
        {Data.language[languageJSON].qualification.subheading}
      </span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              'qualification_button button--flex ' +
              (showQualification1 ? 'qualification_active' : undefined)
            }
            onClick={toggleQualification1}
            data-target="#education"
          >
            <UilGraduationCap className="qualification_icon" size="28.8" />
            {Data.language[languageJSON].qualification.tabs[0].heading}
          </div>

          <div
            className={
              'qualification_button button--flex ' +
              (showQualification2 ? 'qualification_active' : undefined)
            }
            onClick={toggleQualification2}
            data-target="#work"
          >
            <UilBriefcaseAlt className="qualification_icon" size="28.8" />
            {Data.language[languageJSON].qualification.tabs[1].heading}
          </div>

          <div
            className={
              'qualification_button button--flex ' +
              (showQualification3 ? 'qualification_active' : undefined)
            }
            onClick={toggleQualification3}
            data-target="#fun"
          >
            <UilWebGrid className="qualification_icon" size="28.8" />
            {Data.language[languageJSON].qualification.tabs[2].heading}
          </div>
        </div>

        <div className="qualification_sections">
          {/* QUALIFICATION CONTENT Education */}
          <div
            className={
              'qualification_content ' +
              (showQualification1 ? 'qualification_active' : undefined)
            }
            data-content
            id="education"
          >
            {/* QUALIFICATION 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[0].title1}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[0]
                      .subheading1
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[0].date1}
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
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[0].title2}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[0]
                      .subheading2
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[0].date2}
                </div>
              </div>
            </div>

            {/* QUALIFICATION 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[0].title3}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[0]
                      .subheading3
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[0].date3}
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                {/*<span className="qualification_line"></span>*/}
              </div>
            </div>
          </div>

          {/* QUALIFICATION CONTENT Work */}
          <div
            className={
              'qualification_content ' +
              (showQualification2 ? 'qualification_active' : undefined)
            }
            data-content
            id="work"
          >
            {/* QUALIFICATION 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[1].title1}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[1]
                      .subheading1
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[1].date1}
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
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[1].title2}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[1]
                      .subheading2
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[1].date2}
                </div>
              </div>

              {/* <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div> */}
            </div>
          </div>

          {/* QUALIFICATION CONTENT Fun */}
          <div
            className={
              'qualification_content ' +
              (showQualification3 ? 'qualification_active' : undefined)
            }
            data-content
            id="fun"
          >
            {/* QUALIFICATION 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[2].title1}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[2]
                      .subheading1
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[2].date1}
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
                <h3 className="qualification_title">
                  {Data.language[languageJSON].qualification.tabs[2].title2}
                </h3>
                <span className="qualification_subtitle">
                  {
                    Data.language[languageJSON].qualification.tabs[2]
                      .subheading2
                  }
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calender"></i>
                  {Data.language[languageJSON].qualification.tabs[2].date2}
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
  );
}

export default SectionQualification;
