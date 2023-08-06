import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full selection:py-3 px-6 flex">
      <div
        className="flex items-center justify-center w-full"
        style={{ marginTop: "3%" }}
      >
        <Logo />
      </div>
      <nav
        className="flex space-x-6"
        style={{ marginTop: "3%", marginRight: "1%" }}
      >
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
