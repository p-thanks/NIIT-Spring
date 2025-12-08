import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigations = [
    { label: "Home", path: "/" },
    { label: "Admin", path: "/admin" },
    { label: "Products", path: "/products" },
    { label: "Categories", path: "/categories" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative flex w-full items-center justify-between bg-gray-900 px-6 py-4 text-white shadow-xl">
      <motion.div
        className="text-3xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MyShop
      </motion.div>

      <ul className="hidden gap-10 text-lg md:flex">
        {navigations.map((item) => (
          <motion.li
            key={item}
            className="cursor-pointer transition-all hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate(`${item.path}`)}
          >
            {item.label}
          </motion.li>
        ))}
      </ul>

      <div className="hidden items-center gap-6 text-xl md:flex">
        <Search className="cursor-pointer hover:text-gray-300" />
        <Heart className="cursor-pointer hover:text-gray-300" />
        <ShoppingCart className="cursor-pointer hover:text-gray-300" />
      </div>

      <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 flex w-full flex-col gap-6 bg-gray-800 px-6 py-6 text-white shadow-lg md:hidden"
          >
            {navigations.map((item) => (
              <motion.div
                key={item}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer border-b border-gray-700 pb-3 text-lg"
                onClick={() => navigate(`${item.path}`)}
              >
                {item.label}
              </motion.div>
            ))}

            <div className="flex gap-6 pt-2 text-xl">
              <Search className="cursor-pointer" />
              <Heart className="cursor-pointer" />
              <ShoppingCart className="cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
