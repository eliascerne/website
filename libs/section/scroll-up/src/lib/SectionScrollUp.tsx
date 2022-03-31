import styles from './SectionScrollUp.module.css';

/* eslint-disable-next-line */
export interface SectionScrollUpProps {}

export function SectionScrollUp(props: SectionScrollUpProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionScrollUp!</h1>
    </div>
  );
}

export default SectionScrollUp;
