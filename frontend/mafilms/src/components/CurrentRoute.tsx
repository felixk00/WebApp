import { usePathname } from 'next/navigation';

type RouteProps = {
  className?: string;
};

const CurrentRoute = ({ className = '' }: RouteProps) => {
  const currentRoute = usePathname();
  const routeDisplayNames: Record<string, string> = {
    '/': 'Home',
    '/showroom': 'Showroom',
    '/blog': 'Blog',
    '/about': 'About',
    '/contact': 'Contact',
    '/legalnotes/imprint': 'Imprint',
    '/legalnotes/privacy': 'Privacy',
  };

  return (
    <>
      {currentRoute && (
        <span className={`${className}`}>
          {routeDisplayNames?.[currentRoute] || 'Unknown'}
        </span>
      )}
    </>
  );
};

export default CurrentRoute;
