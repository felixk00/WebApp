import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Showroom',
  description: 'Projects Overview',
};

export default function Showroom() {
  return (
    <>
      <div className='mx-auto flex items-center justify-center p-4'>
        <div className='max-w-7xl columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4'>
          <ProjectCard
            href='/showroom/liguria'
            title='Liguria 2023'
            description='Pictures from a small journey through the villages of Liguria.
                Mountains and coasts full of charm.'
            showLogo={true}
            backgroundImage={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${process.env.NEXT_PUBLIC_LIGURIA}/Cover/Cover.jpg`}
          />

          <ProjectCard
            href='/showroom/roots'
            title='Roots'
            description='Rhythms of Our Lives'
            showLogo={false}
            backgroundImage={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${process.env.NEXT_PUBLIC_ROOTS}/Cover/Cover.jpg`}
          />

          <ProjectCard
            href='/showroom/sunnya-stefan'
            title='Sunnya & Stefan'
            description='2023'
            showLogo={false}
            backgroundImage={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${process.env.NEXT_PUBLIC_SUNNYA_STEFAN}/Cover/Cover.jpg`}
          />

          <ProjectCard
            href='/showroom/semiha-deniz'
            title='Semiha & Deniz'
            description='2023'
            showLogo={false}
            backgroundImage={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${process.env.NEXT_PUBLIC_SEMIHA_DENIZ}/Cover/Cover.jpg`}
          />
        </div>
      </div>
      <footer className='p-6 text-center text-white/80 sm:p-12'>
        "Inside ~ Outside"
      </footer>
    </>
  );
}
