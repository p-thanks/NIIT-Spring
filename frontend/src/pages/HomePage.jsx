import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import CustomerService from "../components/CustomerService";
import FeatureProducts from "../components/FeatureProducts";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900">
      <Navbar />
      <HomeHero />
      <CustomerService />
      <FeatureProducts />
    </div>
  );
}
