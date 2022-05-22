import styles from './CardsBlog.module.css';

/* eslint-disable-next-line */
export interface CardsBlogProps {}

export function CardsBlog(props: CardsBlogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsBlog!</h1>
    </div>
  );
}

export default CardsBlog;
