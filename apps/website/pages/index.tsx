import type { ReactElement } from 'react';
import { LayoutHome } from '@eliascerne/layout/home';

import styles from './index.module.css';

export function Home() {
  return <h1 className="">Hello World</h1>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default Home;
