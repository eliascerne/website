import React from 'react'
import { UilMessage } from '@iconscout/react-unicons'
import Data from '@eliascerne/data'

import styles from './SectionProjectInMind.module.css';

/* eslint-disable-next-line */
export interface SectionProjectInMindProps {
  languageJSON: any;
}

export function SectionProjectInMind(props: SectionProjectInMindProps) {
  const { languageJSON } = props;
  return (
    <section className="project section" id="project-in-mind">
      <div className="project_bg">
        <div className="project_container container grid">
          <div className="project_data">
            <h2 className="project_title">
              {Data.language[languageJSON].projectInMind.heading}
            </h2>
            <p className="project_description">
              {Data.language[languageJSON].projectInMind.description}
            </p>
            <a href="#contact" className="button button--flex button--white">
              {Data.language[languageJSON].projectInMind.button}
              <UilMessage className="project_icon button_icon" size="20" />
            </a>
          </div>

          <img src="/images/portfolio1.jpg" alt="" className="project_img" />
        </div>
      </div>
    </section>
  );
}

export default SectionProjectInMind;
