import Image from 'next/image';
import { CardsLayout } from '@eliascerne/cards/layout';
import * as Unicons from '@iconscout/react-unicons';

import styles from './CardsLink.module.css';

/* eslint-disable-next-line */
export interface CardsLinkProps {
  size: string;
  image: string;
  description: string;
  buttonIcon: boolean;
  buttonText: string;
  link: string;
}

const imageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export function CardsLink(props: CardsLinkProps) {
  const { size, image, description, buttonIcon, buttonText, link } = props;
  return (
    <CardsLayout size={size}>
      <a href={link} className="flex flex-col justify-between h-full">
        <div className="flex justify-center mt-4">
          <Image
            loader={imageLoader}
            src={image}
            alt="Picture of the author"
            width={200}
            height={50}
            layout="fixed"
          />
        </div>
        <div className="px-3">
          <p className="text-lg text-center">{description}</p>
        </div>
        <div className="">
          <a
            href={link}
            className="flex p-2 gap-3 rounded-b-2xl justify-center bg-cardBorder"
          >
            {buttonIcon && <Unicons.UilExternalLinkAlt />}
            <p className="text-lg">{buttonText}</p>
          </a>
        </div>
      </a>
    </CardsLayout>
  );
}

export default CardsLink;
