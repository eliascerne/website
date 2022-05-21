import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  UilTimes,
  UilUser,
  UilBag,
  UilFileAlt,
} from '@iconscout/react-unicons';

import styles from './menu.module.css';

/* eslint-disable-next-line */
export interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: any;
}

export function Menu(props: MenuProps) {
  const { menuOpen, setMenuOpen } = props;
  return (
    <Transition appear show={menuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed bottom-0 left-0 w-full z-50"
        onClose={() => setMenuOpen(false)}
      >
        {/* <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="" />
        </Transition.Child> */}

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="-bottom-40"
          enterTo="bottom-0"
          leave="ease-in duration-200"
          leaveFrom="bottom-0"
          leaveTo="-bottom-40"
        >
          <div className="fixed bottom-0 left-0 w-full bg-card pt-8 border-4 border-cardBorder px-6 pb-5 drop-shadow-3xl rounded-2xl z-50">
            <div className="grid gap-6">
              <ul className="grid gap-8 grid-cols-3 text-white">
                <li className="cursor-pointer">
                  <Link href="/link">
                    <div className="flex flex-col items-center text-sm font-medium">
                      <UilUser className="w-5" />
                      <p className="">About</p>
                    </div>
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/link">
                    <div className="flex flex-col items-center text-sm font-medium">
                      <UilBag className="w-5" />
                      <p className="">Work</p>
                    </div>
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/link">
                    <div className="flex flex-col items-center text-sm font-medium">
                      <UilFileAlt className="w-5" />
                      <p className="">Blog</p>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <div className="w-[80%] ml-3">
                  {/* <SharedSearchButton
                  setIsSearchOpen={setIsSearchOpen}
                  setNavMenuOpen={setNavMenuOpen}
                /> */}
                </div>
                <UilTimes
                  className="text-2xl cursor-pointer text-white mr-1"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Menu;
