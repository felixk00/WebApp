import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <body>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <section>
          <h2>Example Section.</h2>
          <p>Example text goes here.</p>
        </section>
      </main>
    </body>
  );
}
