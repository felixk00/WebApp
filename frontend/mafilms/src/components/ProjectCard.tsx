import Logo from '@/components/Logo';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  href: string;
  title: string;
  description?: string;
  showLogo: boolean;
  backgroundImage?: string;
};

export default function ProjectCard({
  href,
  title,
  description,
  showLogo,
  backgroundImage,
}: CardProps) {
  return (
    <div className='after:content shadow-highlight after:shadow-highlight relative mb-5 items-center justify-end overflow-hidden rounded-lg bg-white/10 brightness-90 transition after:pointer-events-none after:absolute after:inset-0 after:rounded-lg hover:brightness-110'>
      <Link href={href} className='relative block'>
        <Image
          alt='A Shot by Melih Dihya'
          className='z-0'
          style={{ transform: 'translate3d(0, 0, 0)' }}
          src={`${backgroundImage}`}
          width={720}
          height={480}
          sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
        />

        <div className='absolute inset-0 z-10 flex items-center justify-center opacity-20'>
          <span className='absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-black/0 via-black to-black'></span>
        </div>

        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center'>
          <div className='absolute top-[25%]'>{showLogo && <Logo />}</div>
          <h1 className='absolute top-[63%] text-base font-bold uppercase tracking-widest'>
            {title}
          </h1>
          <p className='absolute top-[70%] max-w-[40ch] whitespace-pre-line text-white/75 sm:max-w-[32ch]'>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
