import axios from "axios";
import { toast } from "react-toastify";

// Function to fetch data (used by SWR)
export const fetcher = (url) => axios.get(url).then((res) => res.data);

// Function to create a new product
export const createProduct = async (product) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      product
    );
    toast.success("Product added successfully!");
    return response.data; // Return the newly created product data
  } catch (error) {
    throw new Error("Failed to create product");
  }
};
