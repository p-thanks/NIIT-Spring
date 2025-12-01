import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <motion.div
      key={product.id}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl bg-white p-6 shadow-lg"
    >
      <div className="h-80 w-full overflow-hidden rounded-xl bg-gray-300">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
      <p className="mt-2 text-gray-600">{product.description}</p>

      <button onClick={() => navigate(`${product.id}`)} className="mt-4 w-full rounded-xl bg-gray-900 py-2 text-white transition hover:bg-gray-700">
        View Details
      </button>
    </motion.div>
  );
}
