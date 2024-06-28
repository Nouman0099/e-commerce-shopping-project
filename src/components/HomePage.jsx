import React from "react";
import useProducts from "../custom hooks/useProducts";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
function HomePage() {
  const { data, isLoading, isError } = useProducts(
    "https://fakestoreapi.com/products"
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div>
      {/* <h1>Product List</h1>
      <Link to="/create">Create New Product</Link>{" "}
      Link to CreateProductPage */}
      <ProductList data={data} title="Product List" />
    </div>
  );
}

export default HomePage;
