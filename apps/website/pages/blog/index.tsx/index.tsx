import { Fragment, ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { LayoutCard } from 'libs/layout/card/src';
import { CardsUi } from '@eliascerne/cards/ui';

/* eslint-disable-next-line */
export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
    <Fragment>
      <CardsUi
        size="small"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
      <CardsUi
        size="medium"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
      <CardsUi
        size="medium"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
      <CardsUi
        size="medium"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
      <CardsUi
        size="small"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
      <CardsUi
        size="small"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
    </Fragment>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutBase>
      <LayoutCard>{page}</LayoutCard>
    </LayoutBase>
  );
};

export default Blog;
