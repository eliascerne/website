import styles from './SectionServices.module.css';

/* eslint-disable-next-line */
export interface SectionServicesProps {}

export function SectionServices(props: SectionServicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionServices!</h1>
    </div>
  );
}

export default SectionServices;
