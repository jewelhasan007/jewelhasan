import { Geist, Geist_Mono, Noto_Serif, PT_Serif, Roboto, Share, Share_Tech, Share_Tech_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto, Inter, Ubuntu } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jewel Hasan - Developer & Designer",
  description: "Web Developer & UI-UX Designer",
};

const inter = Inter({
  weight: [ "400", "700"],
  subsets: ["latin"],
});

const share_tech = Share({
  weight: [  "400","700"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: [ "300", "400", "500", "700"],
  subsets: ["latin"],
});




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-6xl mx-auto  bg-white text-black dark:bg-black dark:text-white`}
      >
        <Navbar ></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
