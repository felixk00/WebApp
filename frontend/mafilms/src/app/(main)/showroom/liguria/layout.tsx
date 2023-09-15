export const metadata = {
  title: 'Liguria',
  description: 'Photos from a trip to liguria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
