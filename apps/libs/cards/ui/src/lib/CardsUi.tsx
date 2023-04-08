import styles from './CardsUi.module.css';
import Cards from '@eliascerne/cards/ui';
import { CardsAbout } from '@eliascerne/cards/about';
import { CardsLink } from 'libs/cards/link/src';
import { CardsBlog } from 'libs/cards/blog/src';

/* eslint-disable-next-line */
// export interface CardsUiProps {}

export function CardsUi(props: any) {
  const {
    size,
    description,
    image,
    buttonIcon,
    buttonText,
    link,
    title,
    author,
  } = props;
  if (!('type' in props)) return;

  if (props.type === 'about')
    return <CardsAbout size={size} description={description} image={image} />;

  if (props.type === 'link')
    return (
      <CardsLink
        size={size}
        image={image}
        description={description}
        buttonIcon={buttonIcon}
        link={link}
        buttonText={buttonText}
      />
    );

  if (props.type === 'blog')
    return (
      <CardsBlog
        size={size}
        image={image}
        link={link}
        title={title}
        author={author}
        description={description}
        buttonIcon={buttonIcon}
        buttonText={buttonText}
      />
    );
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsUi!</h1>
    </div>
  );
}

export default CardsUi;
