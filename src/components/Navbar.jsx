import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../custom hooks/useCart";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Navbar() {
  const itemCount = useCart((state) => state.cart.length);
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="flex justify-around bg-slate-900 text-white py-3">
        <h1 className="font-semibold text-xl text-gray-300 items-center flex">
          E-Commerce Shopping Website
        </h1>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown}>Categories</button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <li>
            <Link to="/create" className="hover:text-gray-400">
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact us
            </Link>
          </li>
        </ul>
        <Link to="/cartpage">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="bg-red-500 border rounded-full px-[6px] text-sm absolute -top-1 right-0">
                {itemCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
