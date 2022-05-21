import type { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';

import styles from './index.module.css';

export function Home() {
  return <h1 className="">Hello World</h1>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default Home;
