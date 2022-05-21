import Link from 'next/link';
import { UilApps, UilSun } from '@iconscout/react-unicons';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReactComponent as Logo } from 'apps/website/public/icons/logo.svg';

import styles from './UtilsHeader.module.css';

/* eslint-disable-next-line */
export interface UtilsHeaderProps {}

export function UtilsHeader(props: UtilsHeaderProps) {
  return (
    <header className="fixed w-full bottom-0 left-0 py-2 z-40 bg-background">
      <nav className="max-w-header ml-6 mr-5 h-header flex justify-between items-center text-white">
        <Link href="/">
          <div className="cursor-pointer flex gap-1.5 items-center">
            <div className="w-7 text-xs text-white">
              <Logo />
            </div>
            <div className="flex gap-1">
              <h1 className="font-extrabold text-lg">Elias Cerne</h1>
              <p className="text-xs text-slate-600 font-medium">AT</p>
            </div>
          </div>
        </Link>
        <div className="flex gap-3 items-center cursor-pointer">
          <Link href="/">
            <div className="px-2.5 py-1 border-[1px] border-white rounded-3xl text-sm font-semibold">
              Open Chat
            </div>
          </Link>
          <div className="flex gap-2">
            <UilSun
              className="w-5"
              // onClick={() => setNavMenuOpen(true)}
            />
            <UilApps
              className="w-5"
              // onClick={() => setNavMenuOpen(true)}
            />
          </div>
        </div>
      </nav>
      {/* <NavMenu
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
      /> */}
    </header>
  );
}

export default UtilsHeader;
