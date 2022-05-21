import { useRouter } from 'next/router';
import { useState, useRef } from 'react';

import styles from './list.module.css';

/* eslint-disable-next-line */
export interface ListProps {}

const menuItems = [
  {
    index: 0,
    to: '/',
    name: 'Home',
  },
  {
    index: 1,
    to: '/about',
    name: 'About',
  },
  {
    index: 2,
    to: '/work',
    name: 'Work',
  },
  {
    index: 3,
    to: '/blog',
    name: 'Blog',
  },
];

function getActiveIndex(pathname: any) {
  return menuItems.findIndex((item) => item.to === pathname);
}

export function List(props: ListProps) {
  const { route } = useRouter();
  const [activeHoverIndex, setActiveHoverIndex] = useState(() =>
    getActiveIndex(route)
  );
  const hasClicked = useRef(false);
  const hasHover = useRef(false);
  return (
    <div className={styles['container']}>
      <h1>Welcome to List!</h1>
    </div>
  );
}

export default List;
