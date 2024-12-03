import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ShareComponent/Navbar";
import Footer from "@/components/ShareComponent/Footer";

const Poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins-sans",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="black" lang="en">
      <body
        className={`${Poppins.variable}  antialiased`}
      >
            <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
