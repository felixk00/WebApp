import Logo from '@/components/Logo';
import Link from 'next/link';

export const metadata = {
  title: 'Showroom',
  description: 'Projects Overview',
};

export default function Showroom() {
  return (
    <>
      <div className='mx-auto flex items-center justify-center p-4'>
        <div className='max-w-7xl columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4'>
          <Link href='/showroom/liguria'>
            <div className='after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0'>
              <div className='absolute inset-0 flex items-center justify-center opacity-20'>
                <span className='flex max-h-full max-w-full items-center justify-center'></span>
                <span className='absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black'></span>
              </div>
              <Logo />
              <h1 className='mb-4 mt-8 text-base font-bold uppercase tracking-widest'>
                Liguria 2023
              </h1>
              <p className='max-w-[40ch] text-white/75 sm:max-w-[32ch]'>
                Pictures from a small journey through the villages of Liguria.
                Mountains and coasts full of charm.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <footer className='p-6 text-center text-white/80 sm:p-12'>
        "Don't live someone else's life"
      </footer>
    </>
  );
}
