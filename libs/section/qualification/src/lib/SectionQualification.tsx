import styles from './SectionQualification.module.css';

/* eslint-disable-next-line */
export interface SectionQualificationProps {}

export function SectionQualification(props: SectionQualificationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionQualification!</h1>
    </div>
  );
}

export default SectionQualification;
