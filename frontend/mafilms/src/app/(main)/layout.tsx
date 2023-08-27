import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow pb-10 pt-40'>{children}</main>
      <Footer />
    </div>
  );
}
