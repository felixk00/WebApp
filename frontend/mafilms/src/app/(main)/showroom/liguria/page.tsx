'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { ImageProps } from '../../../../utils/types';
import { useLastViewedPhoto } from '../../../../utils/useLastViewedPhoto';
import Modal from '../../../../components/gallery/Modal';

const folderName = process.env.NEXT_PUBLIC_LIGURIA;

export default async function Liguira() {
  const response = await fetch(
    `http://localhost:3000/api/cdn?folder=${folderName}`
  );
  const images = await response.json();
  return <Gallery images={images} />;
}

export function Gallery({ images }: { images: ImageProps[] }) {
  const searchParams = useSearchParams();
  const photoId = searchParams.get('photoId');
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);
  const path = usePathname();
  const previous = path.slice(0, path.lastIndexOf('/'));

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <div className='mx-auto flex items-center justify-center p-4'>
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className='max-w-7xl columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4'>
          <ProjectCard
            href={`${previous}`}
            title='Liguria 2023'
            description='Pictures from a small journey through the villages of Liguria.
                Mountains and coasts full of charm.'
            showLogo={true}
            backgroundImage={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${folderName}/Cover/Cover.jpg`}
          />
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              scroll={false}
              key={id}
              href={`${path}/${id}?photoId=${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              className='after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg'
            >
              <Image
                alt='A Shot by Melih Dihya'
                className='transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110'
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder='blur'
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes='(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw'
              />
            </Link>
          ))}
        </div>
      </div>
      <footer className='p-6 text-center text-white/80 sm:p-12'>
        "Anyone who predicts the weather is a liar"
      </footer>
    </>
  );
}
