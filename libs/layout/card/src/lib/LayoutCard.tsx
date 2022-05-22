import styles from './LayoutCard.module.css';

/* eslint-disable-next-line */
export interface LayoutCardProps {}

export function LayoutCard(props: LayoutCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutCard!</h1>
    </div>
  );
}

export default LayoutCard;
