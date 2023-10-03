import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductDetails from "../../components/ProductDetails";
import ReviewsList from "../../components/ReviewsList";
import BackButton from "../../components/BackButton";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: [];
}

function Product() {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.noroff.dev/api/v1/online-shop/${id} `;
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (isError || !product) {
    return <main>Error</main>;
  }

  return (
    <main>
      <BackButton />
      <ProductDetails product={product} />
      <ReviewsList product={product} />
    </main>
  );
}

export default Product;
