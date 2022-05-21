import styles from './CardsAbout.module.css';
import { CardsLayout } from '@eliascerne/cards/layout';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface CardsAboutProps {
  size: string;
  description: string;
}

const imageLoader = ({ src, width, quality }: any) => {
  return `https://r2.eriascdn.com/${src}?w=${width}&q=${quality || 75}`;
};

export function CardsAbout(props: CardsAboutProps) {
  const { size, description } = props;
  return (
    <CardsLayout size={size}>
      <div className="p-6">
        <div className="flex justify-center">
          <Image
            loader={imageLoader}
            src="erias.png"
            alt="Picture of the author"
            width={112}
            height={112}
            layout="fixed"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg text-center">{description}</p>
        </div>
      </div>
    </CardsLayout>
  );
}

export default CardsAbout;
