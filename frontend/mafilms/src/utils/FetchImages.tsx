import cloudinary from './cloudinary';
import type { ImageProps } from './types';
import getBase64ImageUrl from './generateBlurPlaceholder';

export async function FetchImages(folder: string) {
  const results = await cloudinary.v2.search
    .expression(`folder:${folder}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute();
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

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return reducedResults;
}
