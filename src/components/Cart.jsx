import React from "react";
import { useCart } from "../custom hooks/useCart";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, addToCart } = useCart();
  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-7 text-gray-900">
        Your Cart Products
      </h1>
      <div className="flex flex-wrap m-5">
        {cart.length === 0 ? (
          <h1 className="m-auto text-3xl mt-10">Your cart is empty.</h1>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="w-[382px] border-2 border-gray rounded-lg m-3 p-2"
            >
              <img
                src={product.image}
                alt="image"
                className="w-20 m-auto my-3"
              />
              <div className="mt-5">
                <p className="text-md">
                  <strong className="text-lg font-semibold">Title: </strong>
                  {product.title}
                </p>
                <p className="text-sm text-gray-500 leading-6">
                  <strong className="text-lg font-semibold text-black">
                    Category:{" "}
                  </strong>
                  {product.category}
                </p>
                <p className="text-md leading-8">
                  <strong className="text-lg font-semibold">Price: </strong>$
                  {product.price}
                </p>
                <p className="text-lg flex">
                  <strong className="text-lg font-semibold">Quantity</strong>

                  <div className="flex justify-evenly w-40 ml-6 mb-2">
                    <button
                      className="bg-blue-700 w-8 rounded-md text-white font-medium"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    {product.quantity}
                    <button
                      className="bg-red-700 w-8 rounded-md text-white font-medium"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                  </div>
                </p>
                <p className="text-lg">
                  <strong className="text-lg font-semibold">
                    Total Price:{" "}
                  </strong>{" "}
                  ${product.totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}
        <div className="w-full text-center mt-10">
          <Link
            to="/checkout"
            className="bg-green-700 text-white font-bold py-2 px-4 rounded-md text-lg"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
