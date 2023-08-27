"use client";

import { mainLinks } from "../links/links";
import Link from "next/link";
import Logo from "./logo";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/utils.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const routeDisplayNames: Record<string, string> = {
    "/": "Home",
    "/showroom": "Showroom",
    "/blog": "Blog",
    "/about": "About",
    "/contact": "Contact",
    "/legalnotes/imprint": "Imprint",
    "/legalnotes/privacy": "Privacy",
  };

  const [nav, setNav] = useState(false);
  const [border, setBorder] = useState("");
  const currentRoute = usePathname();

  const mobileMenuClassName = `${styles.colors} sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen text-center ease-in duration-300`;
  const mobileMenuVisibleClassName = `${mobileMenuClassName} opacity-100 translate-x-0`;
  const mobileMenuHiddenClassName = `${mobileMenuClassName} opacity-0 -translate-x-full`;

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const applyBorder = () => {
      if (window.scrollY >= 50) {
        setBorder("border-b border-neutral-400 dark:border-neutral-300");
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
      className={`${border} ${styles.navbar} transition-all fixed left-0 top-0 w-full z-10 text-neutral-600 dark:text-neutral-300`}
    >
      <div className="max-w-7xl m-auto flex justify-between items-center px-4 py-1">
        <Link href="/">
          <Logo />
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex">
          {mainLinks.map((link) => (
            <li
              className={`px-4 text-lg ${
                currentRoute === link.href ? "text-red-700" : ""
              }`}
              key={link.label}
            >
              <Link className="hover:text-gray-500" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {currentRoute && (
          <span className="block sm:hidden text-2xl text-red-700">
            {routeDisplayNames[currentRoute] || "Unknown"}
          </span>
        )}

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav ? mobileMenuVisibleClassName : mobileMenuHiddenClassName
          }
        >
          <Link href="/" className="mb-8" onClick={handleNav}>
            <Logo />
          </Link>
          <ul className="mb-14">
            {mainLinks.map((link) => (
              <li
                onClick={handleNav}
                className={`p-4 text-4xl ${
                  currentRoute === link.href ? "text-red-700" : ""
                }`}
                key={link.label}
              >
                <Link className="hover:text-gray-500" href={link.href}>
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
