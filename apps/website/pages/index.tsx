import type { ReactElement } from 'react';
import Layout from '';
import NestedLayout from '';

import styles from './index.module.css';

export function Home() {
  return <h1 className="">Hello World</h1>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Home;
