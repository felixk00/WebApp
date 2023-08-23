import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width?: number;
  height?: number;
  glow?: boolean;
};

const LogoRaw = ({ width = 80, height = 20, glow = false }: LogoProps) => {
  const logoClass = glow
    ? "dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    : "relative dark:invert";

  return (
      <Image
        className={logoClass}
        src="/assets/logos/MA_FILMS_Logo_2.2_Raw.svg"
        alt="MA Films Logo"
        width={width}
        height={height}
        priority
      />
  );
};

export default LogoRaw;