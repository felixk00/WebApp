import getResults from './cachedImages';
import getBase64ImageUrl from './generateBlurPlaceholder';
import type { ImageProps } from './types';

export const getCurrentPhoto = async (photoId: string, folder: string): Promise<ImageProps> => {
  const results = await getResults(folder);

  let reducedResults: ImageProps[] = [];
  let i = 0;

  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const currentPhoto = reducedResults.find((img) => img.id === Number(photoId));

  if (!currentPhoto) {
    throw new Error('Photo not found');
  }

  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return currentPhoto;
};
