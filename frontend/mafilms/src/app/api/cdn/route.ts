import cloudinary from '@/utils/cloudinary';
import type { ImageProps } from '../../../utils/types';
import getBase64ImageUrl from '../../../utils/generateBlurPlaceholder';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folderName = searchParams.get('folder');
  const photoId = searchParams.get('photoId');

  try {
    const results = await cloudinary.v2.search
      .expression(`folder:${folderName}`)
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

    // If there is a photoId, render the specific photo
    if (photoId) {
      const currentPhoto = reducedResults.find(
        (img) => img.id === Number(photoId)
      );
      if (!currentPhoto) {
        throw new Error('Photo not found');
      }
      currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

      return NextResponse.json(currentPhoto);
    }

    // If not, render all
    const blurImagePromises = results.resources.map((image: ImageProps) => {
      return getBase64ImageUrl(image);
    });
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

    for (let i = 0; i < reducedResults.length; i++) {
      reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
    }
    return NextResponse.json(reducedResults);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.error();
  }
}
