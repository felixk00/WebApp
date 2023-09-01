import type { ImageProps } from './types';
import sharp from 'sharp';

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(
  image: ImageProps
): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }

  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
  );

  const buffer = await response.arrayBuffer();

  const optimizedBuffer = await sharp(buffer).jpeg({ quality: 50 }).toBuffer();

  url = `data:image/jpeg;base64,${Buffer.from(optimizedBuffer).toString(
    'base64'
  )}`;
  cache.set(image, url);
  return url;
}
