import Container from "./container";
import Link from "next/link";
import Logo from "./logo";

const { COMPANY_NAME, SITE_NAME } = process.env;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = COMPANY_NAME ?? SITE_NAME ?? "Melih Dihya";

  return (
    <footer className="border-t border-black dark:border-white">
      <Container>
        <div className="lg:text-lg py-28 flex flex-col lg:flex-row items-center text-left">
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <Logo width={60} height={20} glow={true} />
          </div>

          <div className="tracking-tight md:tracking-tighter flex flex-col mb-10 lg:mb-0 lg:pr-4 lg:w-1/4">
            <h3 className="mb-2 font-bold ">MA Films</h3>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:underline"
              href="/"
            >
              Showroom
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
              Instagram
            </Link>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:underline"
              href="/"
            >
              Behance
            </Link>
          </div>

          <div className="tracking-tight md:tracking-tighter flex flex-col mb-10 lg:mb-0 lg:pr-4 lg:w-1/4">
            <h3 className="mb-2 font-bold ">Legal Notices</h3>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:underline"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:underline"
              href="/"
            >
              Contact
            </Link>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:underline"
              href="/"
            >
              Imprint
            </Link>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:underline"
              href="/"
            >
              Privacy
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 xl:px-0">
            <p>
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith(".")
                ? "."
                : ""}{" "}
              All rights reserved.
            </p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p>Designed in Karlsruhe</p>
            <p className="md:ml-auto">
              Crafted by{" "}
              <a
                href="https://www.instagram.com/melihdihya_sw/"
                className="text-black dark:text-white"
              >
                Melih Dihya
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
