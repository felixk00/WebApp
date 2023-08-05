import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 py-4 px-8 flex items-center justify-between">
      <Logo />
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Melih Dihya
        </Link>
      </h1>
    </div>
  );
};
export default Header;
