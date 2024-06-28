import React, { useState } from "react";
import { createProduct } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(product);
      mutate("https://fakestoreapi.com/products"); // Revalidate the product list after adding a new product
      navigate("/"); // Redirect to the home page after product creation
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-1">
        <label className="font-medium text-xl block">Title</label>
        <input
          type="text"
          name="title"
          className="border border-gray rounded-lg p-1 w-96"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-1">
        <label className="font-medium text-xl block">Category</label>
        <input
          type="text"
          name="category"
          className="border border-gray rounded-lg p-1 w-96"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-1">
        <label className="font-medium text-xl block">Description</label>
        <textarea
          name="description"
          className="border border-gray rounded-lg p-1 w-96"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-1">
        <label className="font-medium text-xl block">Price</label>
        <input
          type="number"
          name="price"
          className="border border-gray rounded-lg p-1 w-96"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 w-44 rounded-lg p-2 text-white font-semibold text-lg my-[22px] m-auto flex justify-center"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
