import { FetchImages } from '../../../../utils/FetchImages';
import Client from './Client';

export const metadata = {
  title: 'Liguria',
  description: 'Trip to Italy',
};

export default async function Page() {
  const images = await FetchImages();

  return <Client images={images} />;
}
