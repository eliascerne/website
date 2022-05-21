import { ReactChild } from 'react';
import styles from './CardsLayout.module.css';

const sizeMap: any = {
  small: 1,
  medium: 2,
  large: 3,
  xlarge: 4,
};

/* eslint-disable-next-line */
export interface CardsLayoutProps {
  size: string;
  children: ReactChild;
}

export function CardsLayout(props: CardsLayoutProps) {
  const { size, children } = props;

  return (
    <div
      className={
        'bg-card border-4 border-cardBorder rounded-3xl text-white h-full min-h-[278px] w-full hover:border-cardBorderHover transition-all duration-300 ease-in-out row-span-1' +
        ' ' +
        'col-span-' +
        sizeMap[size]
      }
    >
      {children}
      <div className="col-span-1 col-span-2 col-span-3 col-span-4"></div>
    </div>
  );
}

export default CardsLayout;
