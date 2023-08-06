import Image from "next/image";
import Link from "next/link";
import styles from "../styles/utils.module.css"; // Import the utils module CSS

const Logo = () => {
  return (
    <Link href="/">
      <div className={`relative flex place-items-center ${styles.glow}`}>
        {/* Use styles.glow to apply the glow effect */}
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/logos/MA_FILMS_Logo_3.1.svg"
          alt="MA Films Logo"
          width={90}
          height={19}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
