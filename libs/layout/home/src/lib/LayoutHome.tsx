import styles from './LayoutHome.module.css';

/* eslint-disable-next-line */
export interface LayoutHomeProps {}

export function LayoutHome(props: LayoutHomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutHome!</h1>
    </div>
  );
}

export default LayoutHome;
