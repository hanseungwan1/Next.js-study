type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

export function generateStaticParams() {
  const products = ["pants", "skirk"];
  return products.map((product) => ({
    slug: product,
  }));
}
