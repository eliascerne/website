import styles from './SectionContact.module.css';

/* eslint-disable-next-line */
export interface SectionContactProps {}

export function SectionContact(props: SectionContactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionContact!</h1>
    </div>
  );
}

export default SectionContact;
