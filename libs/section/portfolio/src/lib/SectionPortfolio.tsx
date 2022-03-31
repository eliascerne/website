import styles from './SectionPortfolio.module.css';

/* eslint-disable-next-line */
export interface SectionPortfolioProps {}

export function SectionPortfolio(props: SectionPortfolioProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionPortfolio!</h1>
    </div>
  );
}

export default SectionPortfolio;
