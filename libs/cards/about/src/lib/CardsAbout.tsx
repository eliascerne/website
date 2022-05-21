import styles from './CardsAbout.module.css';

/* eslint-disable-next-line */
export interface CardsAboutProps {}

export function CardsAbout(props: CardsAboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsAbout!</h1>
    </div>
  );
}

export default CardsAbout;
