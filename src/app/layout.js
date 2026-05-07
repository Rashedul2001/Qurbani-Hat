import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import NavbarComponent from "@/components/Navbar/Navbar";
import { FooterComponent } from "@/components/Footer/Footer";
import 'animate.css'


const inter = Inter({
  weight: ["400", "600", "700", "900"],
  fallback: ["Geist", "Sans-serif"],
  style: "normal",
  subsets: ["latin"]
});


export const metadata = {
  title: 'QurbaniHat - Livestock Marketplace',
  description: 'Buy and sell quality livestock for Qurbani. Find premium cattle, goats, sheep, and buffalo at the best prices.'
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.className} h-full antialiased bg-background `}
    >
      <head>
        <ThemeModeScript />
        <link rel="icon" href="/logo.png" />
      </head>

      <body className="min-h-full flex flex-col ">

        <NavbarComponent />
        {children}
        <FooterComponent />


      </body>

    </html>
  );
}
