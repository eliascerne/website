import styles from './SectionFooter.module.css';

/* eslint-disable-next-line */
export interface SectionFooterProps {}

export function SectionFooter(props: SectionFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionFooter!</h1>
    </div>
  );
}

export default SectionFooter;
