import styles from './LayoutEditor.module.css';

/* eslint-disable-next-line */
export interface LayoutEditorProps {}

export function LayoutEditor(props: LayoutEditorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutEditor!</h1>
    </div>
  );
}

export default LayoutEditor;
