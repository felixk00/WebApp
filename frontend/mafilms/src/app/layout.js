import "./globals.css";
import { Martel_Sans } from "next/font/google";

const font = Martel_Sans({ weight: ["200"], subsets: ["latin"] });

export const metadata = {
  title: "MA Films",
  description: "Developed by Melih Avci",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
