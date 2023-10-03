import { useState } from "react";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import ProductList from "../../components/ProductList";
import { ClockLoader } from "react-spinners";
import { useApi } from "../../hooks/useApi";

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

function Home() {
  const [searchField, setSearchField] = useState("");
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");
  const products = data as IProduct[];

  if (isLoading) {
    return <ClockLoader color="#36d7b7" />;
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
