import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";


const inter = Inter({
  weight: ["400", "600", "700", "900"],
  fallback: ["Geist", "Sans-serif"],
  style: "normal"
});


export const metadata = {
  title: "Qurbani Hat",
  description: "Qurbani Hat - Your one-stop shop for all your qurbani needs",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <head>
        <ThemeModeScript/>
      </head>

      <body className="min-h-full flex flex-col bg-white dark:bg-black">


        {children}


      </body>

    </html>
  );
}
