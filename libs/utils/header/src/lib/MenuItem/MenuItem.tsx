import { motion } from 'framer-motion';
import { ReactChild } from 'react';
import sstyles from './menuitem.module.css';

/* eslint-disable-next-line */
export interface MenuItemProps {
  onHoverStart?: any;
  onHoverEnd?: any;
  onClick?: any;
  active?: any;
  children?: ReactChild;
}

export function Menuitem(props: MenuItemProps) {
  const { onHoverStart, onHoverEnd, onClick, active, children } = props;
  return (
    <motion.li
      className="relative"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
    >
      {children}
      {active && <SharedHover />}
    </motion.li>
  );
}

export default Menuitem;
