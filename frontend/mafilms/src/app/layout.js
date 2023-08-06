import "./globals.css";
import { Gruppo } from "next/font/google";

const font = Gruppo({ weight: ["400"], subsets: ["latin"] });

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
