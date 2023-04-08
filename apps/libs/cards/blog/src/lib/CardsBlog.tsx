import Image from 'next/image';
import Link from 'next/link';
import { CardsLayout } from '@eliascerne/cards/layout';
import { UilExternalLinkAlt } from '@iconscout/react-unicons';

import styles from './CardsBlog.module.css';

/* eslint-disable-next-line */
export interface CardsBlogProps {
  size: string;
  image: string;
  link: string;
  title: string;
  author: string;
  description: string;
  buttonIcon: boolean;
  buttonText: string;
}

const imageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export function CardsBlog(props: CardsBlogProps) {
  const {
    size,
    image,
    link,
    title,
    description,
    buttonIcon,
    buttonText,
    author,
  } = props;
  return (
    <CardsLayout size={size}>
      <Link href={link} passHref>
        <div className="flex h-full justify-between overflow-hidden cursor-pointer">
          <div className="flex w-full flex-col justify-between pt-6">
            <div className="px-5">
              <h2 className="text-2xl font-bold pt-2">{title}</h2>
              <p className="text-lg pt-6">{description}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs self-end pr-1">Blog by {author}</p>
              <button className="flex gap-3 p-2 justify-center w-full bg-cardBorder rounded-b-2xl">
                {buttonIcon && <UilExternalLinkAlt />}{' '}
                <p className="">{buttonText}</p>
              </button>
            </div>
          </div>
          {/* <div className="bg-cover w-[70%] relative">
            <Image
              loader={imageLoader}
              src={image}
              className="rounded-r-3xl"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div> */}
        </div>
      </Link>
    </CardsLayout>
  );
}

export default CardsBlog;
