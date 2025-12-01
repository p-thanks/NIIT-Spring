import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getAllProduct } from "../services/apiProducts";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const data = await getAllProduct(0, 10);
      console.log(data);
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <section className="px-6 pb-20 md:px-20">
      <h2 className="mb-6 text-3xl font-bold">Featured Products</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {products.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </section>
  );
}
