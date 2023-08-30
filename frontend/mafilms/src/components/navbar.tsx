'use client';

import styles from '../styles/utils.module.css';
import LinkList from './LinkList';
import CurrentRoute from './CurrentRoute';
import Logo from './Logo';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [border, setBorder] = useState('');
  const mobileMenuClassName = `${styles.colors} absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full flex-col items-center justify-center text-center duration-300 ease-in sm:hidden`;
  const mobileMenuVisibleClassName = `${mobileMenuClassName} translate-x-0 opacity-100`;
  const mobileMenuHiddenClassName = `${mobileMenuClassName} -translate-x-full opacity-0`;

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const applyBorder = () => {
      if (window.scrollY >= 50) {
        setBorder('border-b border-neutral-400 dark:border-neutral-300');
      } else {
        setBorder('');
      }
    };
    window.addEventListener('scroll', applyBorder);
  }, []);

  useEffect(() => {
    if (nav) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [nav]);

  return (
    <div
      className={`${border} ${styles.navbar} fixed left-0 top-0 z-10 w-full text-neutral-600 transition-all dark:text-neutral-300`}
    >
      <div className='m-auto flex max-w-7xl items-center justify-between px-4 py-1'>
        <Link href='/'>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex'>
          <LinkList
            className='px-4 text-lg hover:text-gray-500'
            showRoute={true}
          />
        </ul>

        <CurrentRoute className='absolute left-1/2 block -translate-x-1/2 text-2xl text-red-700 sm:hidden' />

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav ? mobileMenuVisibleClassName : mobileMenuHiddenClassName
          }
        >
          <Link href='/' className='mb-8' onClick={handleNav}>
            <Logo />
          </Link>

          <ul className='mb-14 flex flex-col'>
            <LinkList
              className='p-4 text-4xl hover:text-gray-500 '
              showRoute={true}
              functionData={{ handler: handleNav, state: nav }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
