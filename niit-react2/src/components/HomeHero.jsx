import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 px-6 py-24 text-center text-white md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold tracking-wide md:text-6xl"
      >
        Discover Quality Products
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-gray-300 md:text-xl"
      >
        Shop the latest trends with unbeatable prices and fast delivery.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 rounded-2xl bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-lg transition hover:bg-gray-200"
      >
        Shop Now
      </motion.button>
    </section>
  );
}
