import Logo from '@/components/Logo';
import Link from 'next/link';

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
      <div
        className='after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0'
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center opacity-20'>
          <span className='flex max-h-full max-w-full items-center justify-center'></span>
          <span className='absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black'></span>
        </div>
        {showLogo && <Logo />}
        <h1 className='mb-4 mt-8 text-base font-bold uppercase tracking-widest'>
          {title}
        </h1>
        <p className='max-w-[40ch] text-white/75 sm:max-w-[32ch]'>
          {description}
        </p>
      </div>
    </Link>
  );
}
