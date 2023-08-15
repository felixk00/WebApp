import "../styles/globals.css"
import type { Metadata } from "next";
import Gruppo from "next/font/local";

const gruppo = Gruppo({
  src: "./Gruppo-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MA Films",
  description: "Melih Dihya Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gruppo.className}>
      <body>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
