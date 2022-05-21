import styles from './CardsLink.module.css';

/* eslint-disable-next-line */
export interface CardsLinkProps {}

export function CardsLink(props: CardsLinkProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsLink!</h1>
    </div>
  );
}

export default CardsLink;
