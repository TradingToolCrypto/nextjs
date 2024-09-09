import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradingToolCrypto: MT5 CryptoBridge",
  description: "MetaTrade5 - MT5 - Custome robots, indicators , charting package for Crypto Currencies on 20+ exchanges, trade directly on exchanges like Binance, Bybit, and Bitmex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header className="bg-gray-dark-3"></header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
