import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "18K",
  description: "About 18K Radio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link href="images/apple-touch-icon.png" rel="icon" type="image/png" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
