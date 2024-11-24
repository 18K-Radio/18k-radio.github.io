import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Kanit } from 'next/font/google'

export const metadata: Metadata = {
  title: "18K",
  description: "About 18K Radio and its history.",
  icons: {
    icon: "/images/apple-touch-icon.png",
  }
};

const kanit = Kanit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={kanit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
