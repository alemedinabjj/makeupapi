import { Link } from "react-router-dom";
import { Product } from "../types/Products";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../reducers/Cart";
import { useState } from "react";

interface IProductCardProps {
  product: Product;
}

export function ProductCard({ product }: IProductCardProps) {
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    if (product.id) {
      dispatch(addProductToCart(product.id));
      console.log("Product added to cart", product.id);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-slate-50  w-72 max-h-[600px] ">
        <div className=" flex flex-col items-center bg-white   mb-5 w-full px-2 py-1">
          <img
            src={product.image_link}
            alt={product.name}
            className="rounded-xl text-gray-500 hover:rotate-12 transition-transform m-3 hover:-translate-y-3"
          />
          <h1 className="text-center h-20 pb-3 text-xl text-gray-900">
            {product.name}
          </h1>
        </div>

        <div className="text-start self-start pl-5">
          <p>
            Marca:{" "}
            <span className="font-bold">
              {product.brand[0].toUpperCase() + product.brand.substring(1)}
            </span>{" "}
          </p>
          <p>
            Tipo: <span className="font-bold">{product.product_type}</span>{" "}
          </p>
          <p className="text-green-600">${product.price}</p>
        </div>
        <div>
          <Link to={`/details/${product.id}`}>
            <button className="p-3 bg-pink-400 text-white rounded-md m-5 hover:brightness-125 transition">
              Mais informações
            </button>
          </Link>
          <button
            className="p-3 bg-pink-400 text-white rounded-md m-5 hover:brightness-125 transition"
            onClick={handleAddProductToCart}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
