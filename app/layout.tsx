import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Cookies in Next.js",
  description:
    "Tiny app that is a trial and example of using Cookies in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className="p-4 text-2xl">Test Cookies in Next.js</p>
        {children}
      </body>
    </html>
  );
}
