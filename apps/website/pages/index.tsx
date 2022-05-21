import type { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';

import styles from './index.module.css';

export function Home() {
  return <div className=""></div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default Home;
