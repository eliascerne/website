import styles from './CardsUi.module.css';
import Cards from '@eliascerne/cards/ui';
import { CardsAbout } from '@eliascerne/cards/about';
import { CardsLink } from 'libs/cards/link/src';

/* eslint-disable-next-line */
// export interface CardsUiProps {}

export function CardsUi(props: any) {
  const { size, description, image, buttonIcon, buttonText, link } = props;
  if (!('type' in props)) return;

  if (props.type === 'about')
    return <CardsAbout size={size} description={description} image={image} />;

  if (props.type === 'link') return <CardsLink size={size} image={image} description={description} buttonIcon={buttonIcon} link={link} buttonText={buttonText} />;

  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsUi!</h1>
    </div>
  );
}

export default CardsUi;