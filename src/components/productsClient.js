"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";
import { useCartStore } from "@/store/cartStore";
export default function ProductsClient() {
  const addToCart = useCartStore((state) => state.addToCart);
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {data.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <h3>{product.title}</h3>
          <p>{product.price} ₺</p>
          <button
            className="bg-blue-500 text-white px-3 py-1 mt-2"
            onClick={() => addToCart(product)}
          >
            Sepete ekle
          </button>
        </div>
      ))}
    </div>
  );
}
