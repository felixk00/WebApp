import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow pb-10 pt-28'>{children}</main>
      <Footer />
    </div>
  );
}
