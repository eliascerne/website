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
  image: any;
  description: string;
  buttonIcon: any;
  buttonText: string;
}

type Cards = aboutCard | linkCard;

export default Cards;

export * from './lib/CardsUi';
