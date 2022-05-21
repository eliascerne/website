import styles from './CardsUi.module.css';
import Cards from '@eliascerne/cards/ui';
import { CardsLayout } from '@eliascerne/cards/layout';

/* eslint-disable-next-line */
export interface CardsUiProps {}

export function CardsUi(props: Cards) {
  if (!('type' in props)) return;

  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsUi!</h1>
    </div>
  );
}

export default CardsUi;
