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
    <Link href={href}>
      <div className='after:content shadow-highlight after:shadow-highlight relative mb-5 flex aspect-[2/3] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white brightness-90 transition after:pointer-events-none after:absolute after:inset-0 after:rounded-lg hover:brightness-110 lg:pt-0'>
        <Image
          alt='A Shot by Melih Dihya'
          className='z-0'
          style={{ transform: 'translate3d(0, 0, 0)' }}
          src={`${backgroundImage}`}
          fill
        />
        <div className='absolute inset-0 z-20 flex items-center justify-center opacity-20'>
          <span className='absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black'></span>
        </div>
        <div className='z-30'>{showLogo && <Logo />}</div>
        <h1 className='z-10 mb-4 mt-8 text-base font-bold uppercase tracking-widest'>
          {title}
        </h1>
        <p className='z-10 max-w-[40ch] text-white/75 sm:max-w-[32ch]'>
          {description}
        </p>
      </div>
    </Link>
  );
}
