import Link from "next/link";

const ProductsList = ["shirt", "pants", "skirt", "shoes"];
export default function ProdutsPage() {
  return (
    <>
      <h1>제품 페이지</h1>
      <ul>
        {ProductsList.map((el, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${el}`}>{el}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
