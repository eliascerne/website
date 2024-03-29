import React, { useState } from 'react';
import { UilInstagram, UilGithubAlt } from '@iconscout/react-unicons';
import Data from '@eliascerne/data';

import styles from './SectionFooter.module.css';

/* eslint-disable-next-line */
export interface SectionFooterProps {
  languageJSON: any;
  setTerminalShow: any;
}

export function SectionFooter(props: SectionFooterProps) {
  const { languageJSON, setTerminalShow } = props;

  const currentYear = new Date().getFullYear();
  const [counter, setCounter] = useState(0);

  function TerminalShow() {
    setCounter(counter + 1);
    if (counter >= 4) {
      setTerminalShow(true);
      setCounter(0);
    }
  }
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">
              {Data.language[languageJSON].footer.heading}
            </h1>
            <span className="footer_subtitle">
              {Data.language[languageJSON].footer.subheading}
            </span>
          </div>

          <ul className="footer_links">
            <li>
              <a href="#services" className="footer_link">
                {Data.language[languageJSON].footer.pinnedLink1}
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer_link">
                {Data.language[languageJSON].footer.pinnedLink2}
              </a>
            </li>

            <li>
              <a href="#contact" className="footer_link">
                {Data.language[languageJSON].footer.pinnedLink3}
              </a>
            </li>
          </ul>

          <div className="footer_socials">
            <a
              href="https://instagram.com/eriastheking/"
              target="_blank"
              className="footer_social"
            >
              <UilInstagram />
            </a>

            <a
              href="https://github.com/erias04/"
              target="_blank"
              className="footer_social"
            >
              <UilGithubAlt />
            </a>
          </div>
        </div>

        <p className="footer_copy">
          <span id="terminal-pop" onClick={() => TerminalShow()}>
            @ 2021
          </span>
          -{currentYear} Elias Cerne. All Rights Reserved!
        </p>
      </div>
    </footer>
  );
}

export default SectionFooter;
