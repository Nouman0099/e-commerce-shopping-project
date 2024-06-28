import React from "react";
import { useParams } from "react-router-dom";
import useProducts from "../custom hooks/useProducts";
import ProductList from "../components/ProductList";

function CategoryPage() {
  const { category } = useParams();
  const { data, isLoading, error } = useProducts(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ProductList data={data} title={`Category: ${category}`} />
    </div>
  );
}

export default CategoryPage;
