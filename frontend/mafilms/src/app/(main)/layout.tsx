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
      <div className='flex-grow pb-5 pt-20'>{children}</div>
      <Footer />
    </div>
  );
}
