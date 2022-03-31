import styles from './SectionHeader.module.css';

/* eslint-disable-next-line */
export interface SectionHeaderProps {}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionHeader!</h1>
    </div>
  );
}

export default SectionHeader;
