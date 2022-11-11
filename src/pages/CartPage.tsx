import { useQuery } from "react-query";
import { ProductCard } from "../components/ProductCard";
import { api } from "../services/api";
import { queryClient } from "../services/queryClient";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/Products";
import { useSelector } from "react-redux";

export function CartPage() {
  const cart = useSelector((state: any) => state.cart);
  const [products, setProducts] = useState<Product[]>([]);

  const cartId = cart.map((product: any) => product.id);

  const getProductsCart = async () => {
    const { data } = await axios.get(
      `http://makeup-api.herokuapp.com/api/v1/products/${cartId}.json`
    );
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProductsCart();
  }, [cart]);

  console.log(cart);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center my-10">Carrinho</h1>
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </>
  );
}
