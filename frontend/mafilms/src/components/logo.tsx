import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  glow?: boolean;
  logoFile?: string;
};

const Logo = ({ width = 70, height = 20, glow = false, logoFile = "MA_FILMS_Logo_2.2_Raw.svg" }: LogoProps) => {
  const logoClass = `dark:invert ${glow ? "dark:drop-shadow-[0_0_0.3rem_#ffffff70]" : ""}`;

  return (
    <Image
      className={logoClass}
      src={`/assets/logos/${logoFile}`}
      alt="MA Films Logo"
      width={width}
      height={height}
      priority
    />
  );
};

export default Logo;

