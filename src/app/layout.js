import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400','500','600','700']
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Jemson Sayre - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.className} ${poppins.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
