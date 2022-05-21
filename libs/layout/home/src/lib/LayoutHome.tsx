import { ReactChild } from 'react';
import { UtilsHeader } from '@eliascerne/utils/header';

import styles from './LayoutHome.module.css';

/* eslint-disable-next-line */
export interface LayoutHomeProps {
  children: ReactChild;
}

export function LayoutHome(props: LayoutHomeProps) {
  return (
      <div className="md:mt-header px-6 max-w-maxWidth mx-auto xl:px-0">
        <UtilsHeader />
        <h1 className="text-white">Welcome to LayoutHome!</h1>
        {props.children}
      </div>
  );
}

export default LayoutHome;
