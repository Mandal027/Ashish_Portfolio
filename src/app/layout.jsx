// import { Metadata } from "next"; // Not needed in .jsx file, so removed
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Cursor from './components/Cursor'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Askulo | Threejs Developer",
  description: "Generating 3D models and animations with Three.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Cursor/> */}
        {children}
      </body>
    </html>
  );
}
