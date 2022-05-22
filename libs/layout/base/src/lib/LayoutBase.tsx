import { ReactChild } from 'react';
import { UtilsHeader } from '@eliascerne/utils/header';

import styles from './LayoutBase.module.css';

/* eslint-disable-next-line */
export interface LayoutBaseProps {
  children: ReactChild;
}

export function LayoutBase(props: LayoutBaseProps) {
  return (
    <div className="md:mt-header px-6 max-w-maxWidth mx-auto xl:px-0 mb-32">
      <UtilsHeader />
      {props.children}
    </div>
  );
}

export default LayoutBase;
