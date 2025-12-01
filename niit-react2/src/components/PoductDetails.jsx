import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/apiProducts";

export default function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function getProducts() {
            try{
                const data = await getProductById(id);
                setProduct(data)
                setLoading(false);
            }
            catch (error) {
                console.log("Error fetching product:", error);
            }
        }
        getProducts();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-20 text-gray-500">Loading...</div>;
    }

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-8 shadow-lg max-w-3xl mx-auto"
    >
      {/* Product Image */}
      <div className="h-80 w-full overflow-hidden rounded-xl bg-gray-300">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title & Price */}
      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

      {/* Additional Details */}
      {product.features && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {product.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <button className="mt-8 w-full rounded-xl bg-gray-900 py-3 text-white text-lg transition hover:bg-gray-700">
        Add to Cart
      </button>
    </motion.div>
  );
}