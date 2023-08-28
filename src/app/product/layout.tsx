import styles from './layout.module.css'
import Link from "next/link";
import type { Metadata } from "next";

export const metadata:Metadata  = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해 보세요',
}

export default function ProductsLayout({
 children,
  }: {
 children: React.ReactNode
 }) {
  return (
   <>
     <nav className={styles.nav}>
       <Link href={'/product/women'}>여성 옷</Link>
       <Link href={'/product/men'}>남성 옷</Link>
     </nav>
     <section className={styles.product}>
       {children}
     </section>
   </>
  );
}
