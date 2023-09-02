import { FetchImages } from '../../../../utils/FetchImages';
import Client from './Client';

export default async function Page() {

  const images = await FetchImages();

  return (
    <Client images={images} />
  );
}
