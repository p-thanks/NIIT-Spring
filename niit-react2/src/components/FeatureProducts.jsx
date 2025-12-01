import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";

export default function FeatureProducts() {
  return (
    <section className="px-6 pb-20 md:px-20">
      <h2 className="mb-6 text-3xl font-bold">Featured Products</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((id) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-white p-6 shadow-lg"
          >
            <div className="h-48 w-full rounded-xl bg-gray-300"></div>
            <h3 className="mt-4 text-xl font-semibold">Product {id}</h3>
            <p className="mt-2 text-gray-600">
              High-quality product description.
            </p>
            <button className="mt-4 w-full rounded-xl bg-gray-900 py-2 text-white transition hover:bg-gray-700">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
