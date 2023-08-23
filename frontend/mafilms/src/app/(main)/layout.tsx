import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-40 h-[90vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
