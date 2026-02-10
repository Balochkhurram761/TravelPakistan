import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";
import Navbar from "./_components/navbar/navbar";
import MobileNavbar from "./_components/navbar/MobileNavbar";
export const metadata = {
  title: "travel pakstain",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />

          <Navbar />
          <MobileNavbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
