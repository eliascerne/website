import styles from './CardsUi.module.css';
import Cards from '@eliascerne/cards/ui';
import { CardsAbout } from '@eliascerne/cards/about';

/* eslint-disable-next-line */
// export interface CardsUiProps {}

export function CardsUi(props: Cards) {
  const { size, description, image } = props;
  if (!('type' in props)) return;

  if (props.type === 'about') return <CardsAbout size={size} description={description} image={image} />;

  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsUi!</h1>
    </div>
  );
}

export default CardsUi;
