import Client from './Client';

export const metadata = {
  title: 'Liguria',
  description: 'Photos from a trip to liguria',
};

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/cdn');
  const images = await response.json();
  return <Client images={images} />;
}
