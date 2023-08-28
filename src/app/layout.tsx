import "./globals.css";
import styles from './layout.module.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }:
 {
   children: React.ReactNode
 }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className={styles.header}>
          <Link href="/"><h1>Demo Note App</h1></Link>
          <nav className={styles.nav}>
            <Link href="/product">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
      {children}
      </body>
    </html>
  );
}
