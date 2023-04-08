import { useRouter } from 'next/router';
import { useState, useRef, useCallback, useEffect } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { ListItem } from '@eliascerne/utils/header';
import Link from 'next/link';

import styles from './list.module.css';

/* eslint-disable-next-line */
export interface ListProps {}

const menuItems = [
  {
    id: 0,
    href: '/',
    name: 'Home',
  },
  {
    id: 1,
    href: '/about',
    name: 'About',
  },
  {
    id: 2,
    href: '/work',
    name: 'Work',
  },
  {
    id: 3,
    href: '/blog',
    name: 'Blog',
  },
];

function getActiveIndex(pathname: any) {
  return menuItems.findIndex((item) => item.href === pathname);
}

export function List(props: ListProps) {
  const { route } = useRouter();
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(() =>
    getActiveIndex(route)
  );
  const isClicked = useRef<boolean>(false);
  const isHover = useRef<boolean>(false);

  const handleOnClicked = () => {
    isClicked.current = true;
  };

  const handleOnHoverStart = useCallback(
    (id) => () => {
      isHover.current = true;
      setActiveHoverIndex(id);
    },
    []
  );

  function handleOnHoverEnd() {
    if (isClicked.current) {
      return;
    }
    const id = getActiveIndex(route);

    if (id < 0) {
      setTimeout(() => {
        if (isHover.current) return;
        setActiveHoverIndex(id);
      }, 500);
    } else {
      setActiveHoverIndex(id);
    }

    isHover.current = false;
  }

  useEffect(() => {
    isClicked.current = false;
    setActiveHoverIndex(getActiveIndex(route));
  }, [route]);

  return (
    <AnimateSharedLayout>
      <ul className="flex items-center justify-center flex-none w-full place-items-center md:w-auto">
        {menuItems.map(({ href, name, id }) => (
          <ListItem
            key={id}
            active={activeHoverIndex === id}
            onHoverStart={handleOnHoverStart(id)}
            onHoverEnd={handleOnHoverEnd}
            onClick={handleOnClicked}
          >
            <Link href={href}>
              <p className="relative z-20 cursor-pointer px-4 lg:px-6">{name}</p>
            </Link>
          </ListItem>
        ))}
      </ul>
    </AnimateSharedLayout>
  );
}

export default List;
