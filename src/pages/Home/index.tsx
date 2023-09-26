import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import ProductList from "../../components/ProductList";

interface IProduct {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price:number;
  discountedPrice: number;
}

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const url = "https://api.noroff.dev/api/v1/online-shop";
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <main>Loading posts...</main>;
  }

  if (isError) {
    return <main>Error loading data...</main>;
  }

  return (
    <main>
      <Hero />
      <Search placeholder="Enter product name ..." handleChange={(e) => setSearchField(e.target.value)} />
      <ProductList
        products={products.filter((product) => product.title.toLowerCase().includes(searchField.toLowerCase()))}
      />
    </main>
  );
}
export default Home;
