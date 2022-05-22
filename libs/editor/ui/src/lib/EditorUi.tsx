import styles from './EditorUi.module.css';

/* eslint-disable-next-line */
export interface EditorUiProps {}

export function EditorUi(props: EditorUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EditorUi!</h1>
    </div>
  );
}

export default EditorUi;
