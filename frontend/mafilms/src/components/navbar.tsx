"use client";

import { mainLinks } from "../links/links";
import Link from "next/link";
import Logo from "./logo";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/utils.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [border, setBorder] = useState("");

  const mobileMenuClassName = `${styles.colors} sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen text-center ease-in duration-300`;
  const mobileMenuVisibleClassName = `${mobileMenuClassName} opacity-100 transform translate-x-0`;
  const mobileMenuHiddenClassName = `${mobileMenuClassName} opacity-0 transform -translate-x-full`;

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const applyBorder = () => {
      if (window.scrollY >= 30) {
        setBorder("border-b border-neutral-400");
      } else {
        setBorder("");
      }
    };
    window.addEventListener("scroll", applyBorder);
  }, []);

  useEffect(() => {
    if (nav) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [nav]);

  return (
    <div
      className={`${border} ${styles.navbar} transition-all fixed left-0 top-0 w-full z-10 ease-in duration-300 text-neutral-600 dark:text-neutral-300`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Logo width={65} height={20} glow={false} />

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex">
          {mainLinks.map((link) => (
            <li className="p-4" key={link.label}>
              <Link className="hover:underline" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav ? mobileMenuVisibleClassName : mobileMenuHiddenClassName
          }
        >
          <ul>
            {mainLinks.map((link) => (
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
                key={link.label}
              >
                <Link className="hover:underline" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
