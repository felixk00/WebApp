import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full selection:py-3 px-6 grid grid-cols-3">
      <nav className="col-start-1 flex items-center space-x-6">
        <Link
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="/"
        >
          Showroom
        </Link>
      </nav>
      <div className="col-start-2 flex items-center justify-center mt-8">
        <Logo />
      </div>
      <nav className="col-start-3 flex items-center justify-end space-x-6">
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
