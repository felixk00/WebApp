import Carousel from '../../../../../components/gallery/Carousel';
import cloudinary from '../../../../../utils/cloudinary';
import type { Metadata, ResolvingMetadata, NextPage } from 'next';

const folderName = process.env.NEXT_PUBLIC_LIGURIA;
const metaDataTitle = 'A Photo from Liguria';

interface PhotoProps {
  params: {
    photoId: string;
  };
}

export async function generateStaticParams() {
  const results = await cloudinary.v2.search
    .expression(`folder:${folderName}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute();

  const staticParams = results.resources.map((resource, index) => ({
    photoId: index.toString(),
  }));

  return staticParams;
}

export async function generateMetadata(
  { params }: PhotoProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const photoId = params.photoId;
  const response = await fetch(
    `http://localhost:3000/api/cdn?folder=${folderName}&photoId=${photoId}`
  );
  const currentPhoto = await response.json();
  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`;

  return {
    title: metaDataTitle,
    openGraph: {
      images: currentPhotoUrl,
    },
  };
}

const Photo: NextPage<PhotoProps> = async ({ params }) => {
  const photoId = params.photoId;
  let index = Number(photoId);
  const response = await fetch(
    `http://localhost:3000/api/cdn?folder=${folderName}&photoId=${photoId}`
  );
  const currentPhoto = await response.json();

  return (
    <>
      <main className='mx-auto max-w-[1960px] p-4'>
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Photo;
