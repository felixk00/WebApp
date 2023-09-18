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
            backgroundImage='https://res.cloudinary.com/dmkjivzhf/image/upload/c_scale,w_720/v1693296275/Liguria/fjv0nnrdxjn9qyhk0urp.jpg'
          />
          <ProjectCard
            href='/showroom'
            title='Placeholder'
            description='Soon this will be the way to another project'
            showLogo={false}
          />
          <ProjectCard
            href='/showroom'
            title='Placeholder'
            description='Soon this will be the way to another project'
            showLogo={false}
          />
          <ProjectCard
            href='/showroom'
            title='Placeholder'
            description='Soon this will be the way to another project'
            showLogo={false}
          />
        </div>
      </div>
      <footer className='p-6 text-center text-white/80 sm:p-12'>
        "Inside ~ Outside"
      </footer>
    </>
  );
}
