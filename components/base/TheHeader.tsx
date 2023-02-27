import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "~/store";
import LoginIcon from "@material-ui/icons/AccountCircle";
import { fetchProducts } from "~/store/slices/products";
import { fetchCategories } from "~/store/slices/categories";
import { TheSidebar } from "~/components/base/TheSidebar.jsx";
import {AccountCircle} from "@material-ui/icons";

export const TheHeader = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const headerStyle = active
    ? 'sticky top-0 bg-white text-black-600 backdrop-blur-lg border-b-3 z-50 transition-colors'
    : 'sticky top-0 bg-white-transparent text-black-600 backdrop-blur-lg border-b-3 z-50 transition-colors'

  const closeModals = () => {
    document.querySelector('body')?.classList.remove('ReactModal__Body--open');
    setActive(false);
  }

  return (
    <header className={headerStyle}>
      <div className="custom-container mx-auto py-4 flex justify-between align-center">
        <div className='flex-1'>
          <button
            onClick={() => active ? closeModals() : setActive(true)}
            className={active ? `burger-button active` : `burger-button`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="flex-[3] flex justify-center">
          <Link href='/' className='font-bold text-2xl leading-[inherit] transition-colors hover:text-red'>
            WEAR THIS.
          </Link>
        </div>

        <div className='flex-1 hidden sm:flex justify-end gap-4'>
          <button className='h-10 w-24 border-3 border-black-600 text-lg font-bold transition-colors hover:text-white hover:bg-black-600'>
            Log in
          </button>
          <button className='h-10 w-24 border-3 border-black-600 text-lg font-bold transition-colors hover:text-white hover:bg-black-600'>
            Sign up
          </button>
        </div>
        <div className='flex-1 flex sm:hidden justify-end'>
          <button>
            <LoginIcon fontSize='large'/>
          </button>
        </div>
      </div>
      <TheSidebar
        active={active}
        setActive={setActive}
        closeModals={closeModals}
      />
    </header>
  );
};
