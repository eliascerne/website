import React, { useEffect, useState } from 'react';
import { UilAngleUp } from '@iconscout/react-unicons';

import styles from './SectionScrollUp.module.css';

/* eslint-disable-next-line */
export interface SectionScrollUpProps {}

export function SectionScrollUp(props: SectionScrollUpProps) {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll >= 560) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    });
  }, []);
  return (
    <a
      href="#"
      className={'scrollup ' + (showScrollUp ? 'show-scroll' : undefined)}
      id="scroll-up"
    >
      <UilAngleUp className="scrollup_icon" size="24" />
    </a>
  );
}

export default SectionScrollUp;
