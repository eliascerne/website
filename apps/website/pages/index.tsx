import type { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';

import styles from './index.module.css';

export function Home() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3">
      <div className="bg-slate-800">01</div>
      <div className="bg-amber-200">02</div>
      <div className="col-span-2 bg-slate-50">03</div>
      <div className="bg-slate-800">04</div>
      <div className="bg-amber-200">05</div>
      <div className="col-span-2 bg-slate-400">06</div>
      <div className="bg-amber-700">07</div>
      <div className="bg-amber-700">08</div>
      <div className="bg-amber-700">09</div>
      <div className="col-span-2 bg-slate-50">10</div>
      <div className="bg-slate-800">11</div>
      <div className="col-span-2 bg-slate-400">12</div>
      <div className="col-span-2 bg-slate-400">12</div>
      <div className="col-span-2 bg-slate-400">12</div>
      <div className="col-span-2 bg-slate-400">12</div>
      <div className="col-span-2 bg-slate-400">12</div>
      <div className="col-span-2 bg-slate-400">12</div>
      <div className="bg-amber-700">13</div>
      <div className="bg-amber-700">14</div>
      <div className="col-span-2 bg-slate-50">15</div>
      <div className="col-span-2 bg-slate-400">16</div>
      <div className="bg-amber-700">17</div>
      <div className="bg-amber-200">18</div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default Home;
