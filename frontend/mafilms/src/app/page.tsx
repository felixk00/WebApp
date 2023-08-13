import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <body>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <section>
          <h2></h2>
          <p></p>
        </section>
      </main>
      <Footer />
    </body>
  );
}
