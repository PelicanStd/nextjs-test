import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import clothesImage from "public/images/clothes.jpg";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지.</h1>
      <Image src={clothesImage} alt='clothes' priority />
      <ul className="flex flex-col">
        {products.map(({id,name}, index) =>(
          <li key={index}>
            <Link href={`/product/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
