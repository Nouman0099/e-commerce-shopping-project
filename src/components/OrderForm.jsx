import React, { useState } from "react";
import { useCart } from "../custom hooks/useCart";

function OrderForm() {
  const [name, setName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const { cart, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert(
        "Your cart is empty, Add products to your cart before placing an order!"
      );
      return;
    }
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }
    alert(`Order placed by ${name}!\nShipping to: ${address}`);
    clearCart();
    setName(" ");
    setAddress(" ");
  };

  let totalAmount = 0;
  for (let product of cart) {
    totalAmount = totalAmount + product.totalPrice;
  }

  return (
    <div className="h-full">
      <div className="bg-slate-100 w-full h-full">
        <h1 className="font-bold text-3xl text-center pt-5">Checkout Page</h1>
        <div className="w-full text-center mt-7 mb-7">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="font-semibold text-xl block ">
                Enter Your Name{" "}
              </label>
              <input
                type="text"
                className="border border-gray-400 p-1 rounded-lg w-1/3 mb-4"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl block">
                Enter Your Address{" "}
              </label>
              <input
                type="text"
                className="border border-gray-400 p-1 rounded-lg w-1/3"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className={`text-lg border border-blue-700 bg-blue-600 font-bold text-white w-44 mt-8 rounded-lg p-1 ${
                cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </form>
        </div>
        <h1 className="font-bold text-center text-3xl">Order Summary</h1>
        <div className="flex justify-center flex-wrap">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-md m-5 p-2 w-1/4"
            >
              <h1>
                <strong className="text-lg font-semibold">Title: </strong>{" "}
                {product.title}
              </h1>
              <h1>
                <strong className="text-lg font-semibold">Price: </strong> $
                {product.price}
              </h1>
              <p>
                <strong className="text-lg font-semibold">Quantity: </strong>{" "}
                {product.quantity}
              </p>
              <p>
                <strong className="text-lg font-semibold">Total Price: </strong>
                ${product.totalPrice.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="text-center pb-5">
            <h2 className="text-xl font-semibold">
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderForm;
