import styles from './SectionSkills.module.css';

/* eslint-disable-next-line */
export interface SectionSkillsProps {}

export function SectionSkills(props: SectionSkillsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionSkills!</h1>
    </div>
  );
}

export default SectionSkills;
