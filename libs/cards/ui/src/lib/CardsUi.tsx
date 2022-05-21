import styles from './CardsUi.module.css';

/* eslint-disable-next-line */
export interface CardsUiProps {}

export function CardsUi(props: CardsUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsUi!</h1>
    </div>
  );
}

export default CardsUi;
