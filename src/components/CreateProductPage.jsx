import React from "react";
import ProductForm from "./ProductForm";

const CreateProductPage = () => {
  return (
    <div className="bg-slate-200">
      <h1 className="text-center font-bold text-3xl py-5">Create Product</h1>
      <div className="flex justify-center">
        <ProductForm />
      </div>
    </div>
  );
};

export default CreateProductPage;
