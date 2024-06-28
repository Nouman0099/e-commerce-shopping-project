import React from "react";
import { Link } from "react-router-dom";

function ProductList({ data, title }) {
  return (
    <>
      <div>
        <h1 className="font-bold text-center text-2xl m-3 pt-5">{title}</h1>
        <div className="flex flex-wrap m-5 p3">
          {data &&
            data.map((products) => {
              return (
                <div
                  className="w-[280px] border-2 border-gray rounded-lg m-3 p-2 hover:bg-slate-300 hover:border-slate-500 shadow-md"
                  key={products.id}
                >
                  <Link to={`/products/${products.id}`}>
                    <img
                      src={products.image}
                      className="w-32 h-32 m-auto my-3 transition ease-in-out duration-300 hover:scale-110"
                    ></img>
                    <div className="mt-4">
                      <p>
                        <strong className="text-lg font-semibold">
                          Title:{" "}
                        </strong>
                        {products.title
                          ? products.title.slice(0, 22) + "...."
                          : products.title}
                      </p>
                      <p className="text-gray-600 text-sm leading-6">
                        <strong className="text-lg text-black font-semibold">
                          Category:{" "}
                        </strong>
                        {products.category}
                      </p>
                      <p>
                        <strong className="text-lg text-black font-semibold">
                          Description:{" "}
                        </strong>
                        {products.description
                          ? products.description.slice(0, 90) + "....."
                          : products.description}
                      </p>
                      <p className="text-xl leading-10">
                        <strong className="text-lg font-semibold">
                          Price:{" "}
                        </strong>
                        ${products.price}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
