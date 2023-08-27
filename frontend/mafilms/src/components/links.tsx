'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type linkProps = {
  list?: 'mainLinks' | 'Links';
  className?: string;
  showRoute?: boolean;
  functionData?: {
    handler: () => void;
    state: boolean;
  };
};

type LinkItem = {
  label: string;
  href: string;
};

const LinkList = ({
  list = 'mainLinks',
  className = '',
  showRoute = false,
  functionData,
}: linkProps) => {
  const mainLinks: LinkItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Showroom', href: '/showroom' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const Links: LinkItem[] = [
    { label: 'Instagram', href: 'https://www.instagram.com/melihdihya_sw/' },
    { label: 'YouTube', href: '/' },
    { label: 'Imprint', href: '/legalnotes/imprint' },
    { label: 'Privacy', href: '/legalnotes/privacy' },
  ];

  const currentRoute = usePathname();
  const linksToRender = list === 'mainLinks' ? mainLinks : Links;

  return (
    <>
      {linksToRender.map((link) => (
        <Link
          className={`${className} ${
            showRoute && currentRoute === link.href ? 'text-red-700' : ''
          }`}
          href={link.href}
          key={link.label}
          onClick={() => {
            if (functionData && functionData.handler) {
              functionData.handler();
            }
          }}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default LinkList;
