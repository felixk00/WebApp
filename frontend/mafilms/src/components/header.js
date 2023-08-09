import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full selection:py-3 px-6 grid grid-cols-3 border-b border-black dark:border-white">
      <nav className="col-start-1 flex items-center space-x-6">
        <Link
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="/showroom"
        >
          Showroom
        </Link>
      </nav>
      <div className="col-start-2 flex items-center justify-center mt-4 mb-4">
        <Logo />
      </div>
      <nav className="col-start-3 flex items-center justify-end space-x-6">
        <Link
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
