import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Provider from '../components/Provider';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechNoLimits",
  description: "Blog de technologie et de gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Provider session>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      </Provider>
    </html>
  );
}