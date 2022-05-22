type cardSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface baseCard {
  size: cardSize;
  background?: string;
  borderColor?: string;
  borderThic?: string | number;
}

export interface aboutCard extends baseCard {
  type: 'about';
  image: any;
  description: string;
}

export interface linkCard extends baseCard {
  type: 'link';
  image: string;
  link: string;
  description: string;
  buttonIcon?: boolean;
  buttonText?: string;
}

export interface blogCards extends baseCard {
  type: 'blog';
  image: string;
  link: string;
  title: string;
  description: string;
  buttonIcon?: boolean;
  buttonText?: string;
}

type Cards = linkCard | aboutCard;

export default Cards;

export * from './lib/CardsUi';
