import { Product } from "../types/Products";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { queryClient } from "../services/queryClient";
import { api } from "../services/api";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState("");

  const handleChange = (event: any) => {
    return setData(event.target.value);
  };

  const { search } = useLocation();

  const dataFetch = async () => {
    const response = await queryClient.fetchQuery(search, async () => {
      const response = await api.get(search);

      return response.data;
    });

    setProducts(response);
  };

  const filteredProductsByName = useMemo(
    () =>
      products.filter((product) =>
        product.product_type.toLowerCase().includes(data.toLowerCase())
      ),
    [products, data]
  );

  const brandName = useMemo(() => search.split("brand=")[1], [search]);

  const productsName = products.filter((product) =>
    product.brand.toLowerCase()
  );

  brandName.replace(/[^a-zA-Z\s]/g, "");

  useEffect(() => {
    dataFetch();
    setLoading(false);
  }, [search]);

  return (
    <main className="bg-slate-100">
      <section className="w-full min-h-screen text-black">
        <h1 className="text-3xl text-center py-10">
          Produtos{" "}
          {
            productsName.map(
              (product) =>
                product.brand[0].toUpperCase() + product.brand.substring(1)
            )[0]
          }
        </h1>
        <div className="m-auto">
          <div className="flex ml-10 p-5 items-center">
            <p className="mr-3 text-bold text-lg">Filter:</p>
            <select
              name=""
              id=""
              onChange={handleChange}
              className="p-1 border-2"
            >
              <option value="">All</option>
              <option value="bronzer">Bronzer</option>
              <option value="lipstick">Lipstick</option>
              <option value="mascara">Mascara</option>
              <option value="eyeliner">Eyeliner</option>
              <option value="eyebrow">Eyebrow</option>
              <option value="foundation">Foundation</option>
              <option value="blush">Blush</option>
              <option value="lip_liner">Lipliner</option>
            </select>
          </div>
        </div>
        {loading && (
          <div className="w-full flex items-center justify-center m-auto">
            <h1>Loading...</h1>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 px-7">
          {filteredProductsByName.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
