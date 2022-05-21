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
    index: 0,
    href: '/',
    name: 'Home',
  },
  {
    index: 1,
    href: '/about',
    name: 'About',
  },
  {
    index: 2,
    href: '/work',
    name: 'Work',
  },
  {
    index: 3,
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
    (index) => () => {
      isHover.current = true;
      setActiveHoverIndex(index);
    },
    []
  );

  function handleOnHoverEnd() {
    if (isClicked.current) {
      return;
    }
    const index = getActiveIndex(route);

    if (index < 0) {
      setTimeout(() => {
        if (isHover.current) return;
        setActiveHoverIndex(index);
      }, 500);
    } else {
      setActiveHoverIndex(index);
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
        {menuItems.map(({ href, name, index }) => (
          <ListItem
            key={index}
            active={activeHoverIndex === index}
            onHoverStart={handleOnHoverStart(index)}
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
