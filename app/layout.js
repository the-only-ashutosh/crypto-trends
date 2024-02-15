import { Inter } from "next/font/google";

import Appbar from '@/components/UI/Appbar';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Trends",
  description: "Created by ASHUTOSH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script 
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1449994421659188" 
      crossOrigin="anonymous"
      />
      <body className={inter.className}>
        <Appbar/>
        {children}
      </body>
    </html>
  );
}
