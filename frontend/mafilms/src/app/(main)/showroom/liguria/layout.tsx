export const metadata = {
  title: 'Liguria',
  description: 'Photos from a trip to liguria',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
