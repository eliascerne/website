import { ReactChild } from 'react';
import styles from './LayoutHome.module.css';

/* eslint-disable-next-line */
export interface LayoutHomeProps {
  children: ReactChild;
}

export function LayoutHome(props: LayoutHomeProps) {
  return (
    <div className='container bg-background'>
      <h1>Welcome to LayoutHome!</h1>
      {props.children}
    </div>
  );
}

export default LayoutHome;
