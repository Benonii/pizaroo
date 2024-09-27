import type { Metadata } from "next";
import localFont from "next/font/local";
import { Irish_Grover, Inria_Sans } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-irish-grover',
});

const inriaSans = Inria_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inria-sans',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  headerContent,
}: Readonly<{
  children: React.ReactNode;
  headerContent?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${irishGrover.variable} ${inriaSans.variable}`}>
        <header className="flex items-center justify-between p-5 border">
          <h1 className="font-grover text-2xl text-primaryOrange">Pizaroo</h1>
          <div className="">{headerContent}</div>

        </header>
        {children}
      </body>
    </html>
  );
}
