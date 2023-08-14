import { mainLinks, legalLinks } from "./footerLinks";
import Link from "next/link";
import Logo from "./logo";

const { COMPANY_NAME, SITE_NAME } = process.env;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = COMPANY_NAME ?? SITE_NAME ?? "Melih Dihya";

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="justify-between items-center mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 xl:px-0">
        <div className="flex flex-col items-center md:pl-10">
          <Logo width={60} height={20} glow={true} />
          <h3 className="text-lg py-5">Capturing in a Place of No Mind</h3>
        </div>

        <div className="flex flex-row space-x-10 md:text-lg md:pr-10">
          <div className="flex flex-col text-left tracking-tight md:tracking-tighter">
            <h3 className="mb-2 font-bold ">MA Films</h3>
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                className="hover:underline"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col text-left tracking-tight md:tracking-tighter">
            <h3 className="mb-2 font-bold ">Legal Notices</h3>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                className="hover:underline"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
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
    </footer>
  );
};

export default Footer;
