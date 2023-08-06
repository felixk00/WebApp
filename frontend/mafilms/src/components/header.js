import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 py-3 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Logo />
      </div>
      <nav className="flex space-x-6">
        <Link
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="/"
        >
          Portfolio
        </Link>
        <Link
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="/"
        >
          Blog
        </Link>
        <Link
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="/"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
