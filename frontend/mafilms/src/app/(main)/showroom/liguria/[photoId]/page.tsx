import Carousel from '../../../../../components/gallery/Carousel';
import cloudinary from '../../../../../utils/cloudinary';
import { getCurrentPhoto } from '../../../../../utils/getCurrentPhoto';
import type { NextPage } from 'next';

interface HomeProps {
  params: {
    photoId: string;
  };
}

const Home: NextPage<HomeProps> = async ({ params }) => {
  const photoId = params.photoId;
  let index = Number(photoId);
  const currentPhoto = await getCurrentPhoto(photoId);
  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`;

  return (
    <>
      <main className='mx-auto max-w-[1960px] p-4'>
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Home;

//  export async function generateStaticParams() {
//    const results = await cloudinary.v2.search
//      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//     .sort_by('public_id', 'desc')
//     .max_results(400)
//     .execute()

//   let fullPaths = []
//   for (let i = 0; i < results.resources.length; i++) {
//     fullPaths.push({ params: { photoId: i.toString() } })
//   }

//   return {
//     paths: fullPaths,
//     fallback: false,
//   }
// }
