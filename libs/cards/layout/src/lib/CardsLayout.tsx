import styles from './CardsLayout.module.css';

/* eslint-disable-next-line */
export interface CardsLayoutProps {}

export function CardsLayout(props: CardsLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsLayout!</h1>
    </div>
  );
}

export default CardsLayout;
