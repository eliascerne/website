import { motion } from 'framer-motion';

import styles from './menuhover.module.css';

interface ISpring {
  type: string;
  stiffness: number;
  damping: number;
}

const spring: ISpring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

/* eslint-disable-next-line */
export interface MenuHoverProps {}

export function ListHover(props: MenuHoverProps) {
  return (
    <motion.div
      initial={false}
      transition={spring}
      layoutId="hover"
      className="absolute left-0 right-0 rounded-md bg-gray-100 dark:bg-gray-800"
      style={{
        top: -7,
        bottom: -7,
        left: 0,
        right: 0,
      }}
    />
  );
}

export default ListHover;
