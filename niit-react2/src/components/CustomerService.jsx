import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";

export default function CustomerService() {
  return (
    <section className="grid gap-8 px-6 py-20 md:grid-cols-4 md:px-20">
      {[
        { title: "Fast Delivery", icon: <Truck size={40} /> },
        { title: "Best Quality", icon: <Star size={40} /> },
        { title: "Secure Payments", icon: <ShieldCheck size={40} /> },
        { title: "Wide Variety", icon: <ShoppingBag size={40} /> },
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-md"
        >
          <div className="text-gray-800">{feature.icon}</div>
          <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
        </motion.div>
      ))}
    </section>
  );
}
