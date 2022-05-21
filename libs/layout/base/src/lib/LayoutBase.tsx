import styles from './LayoutBase.module.css';

/* eslint-disable-next-line */
export interface LayoutBaseProps {}

export function LayoutBase(props: LayoutBaseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutBase!</h1>
    </div>
  );
}

export default LayoutBase;
