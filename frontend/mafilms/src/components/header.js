import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div>
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
