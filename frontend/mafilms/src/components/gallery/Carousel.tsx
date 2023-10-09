'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import useKeypress from 'react-use-keypress';
import type { ImageProps } from '../../utils/types';
import { useLastViewedPhoto } from '../../utils/useLastViewedPhoto';
import SharedModal from './SharedModal';

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) {
  const router = useRouter();
  const [, setLastViewedPhoto] = useLastViewedPhoto();
  const path = usePathname();
  const parts = path.split('/');
  const project = parts[parts.indexOf('showroom') + 1];

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id);
    router.push('/showroom/liguria');
  }

  function changePhotoId(newVal: number) {
    return newVal;
  }

  useKeypress('Escape', () => {
    closeModal();
  });

  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-2xl'>
      <button
        className='absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl'
        onClick={closeModal}
      >
        <Image
          src={currentPhoto.blurDataUrl}
          className='pointer-events-none h-full w-full'
          alt='blurred background'
          fill
          priority={true}
        />
      </button>
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
        project={project}
      />
    </div>
  );
}
