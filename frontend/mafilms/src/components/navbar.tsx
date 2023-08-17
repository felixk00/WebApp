import { mainLinks } from "../links/navbarLinks";
import Link from "next/link";
import Logo from "./logo";

const { COMPANY_NAME, SITE_NAME } = process.env;

const Navbar = () => {
  return (
    <header className="text-sm text-neutral-600 dark:text-neutral-300">
      <div className="justify-between items-center mx-auto flex w-full flex-row gap-6 border-b border-neutral-400 px-6 py-8 dark:border-neutral-600">
        <div className="flex flex-col items-center md:pl-10 pl-5">
          <Logo width={65} height={20} glow={true} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
