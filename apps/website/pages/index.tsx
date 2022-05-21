import type { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { CardsUi } from '@eliascerne/cards/ui';
import { CardsLayout } from '@eliascerne/cards/layout';

import styles from './index.module.css';

export function Home() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-1 gap-4 pt-6 md:grid-cols-3 lg:grid-cols-4">
      <CardsUi size="medium" type="about" image="" description="Hello👋 I'm Elias, an Austrian student and Web Developer. I work with Next.js, Tailwind, Figma and a MacBook. Oh and I can speak JS, TS, JS and more Typescript." />
      <CardsUi size="small" type="about" image="" description="Hello👋 I'm Elias, an Austrian student and Web Developer. I work with Next.js, Tailwind, Figma and a MacBook." />
      <CardsUi size="small" type="about" image="" description="Hello👋 I'm Elias, an Austrian student and Web Developer. I work with Next.js, Tailwind, Figma and a MacBook." />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default Home;
