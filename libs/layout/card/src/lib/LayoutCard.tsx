import { ReactChild } from 'react';
import styles from './LayoutCard.module.css';

/* eslint-disable-next-line */
export interface LayoutCardProps {
  children: ReactChild;
}

export function LayoutCard(props: LayoutCardProps) {
  const { children } = props;
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-3 gap-4 pt-6 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

export default LayoutCard;
