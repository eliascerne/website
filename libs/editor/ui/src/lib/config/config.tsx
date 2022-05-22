import styles from './config.module.css';

/* eslint-disable-next-line */
export interface ConfigProps {}

export function Config(props: ConfigProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Config!</h1>
    </div>
  );
}

export default Config;
