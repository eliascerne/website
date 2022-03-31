import styles from './SectionHome.module.css';

/* eslint-disable-next-line */
export interface SectionHomeProps {}

export function SectionHome(props: SectionHomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionHome!</h1>
    </div>
  );
}

export default SectionHome;
