import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Active Users", value: 50000 },
  { label: "Contests Completed", value: 5000 },
  { label: "Prize Distributed", value: 1000000 }, // assuming currency unit
  { label: "Average Joining Rate (%)", value: 75 },
];

// Counter animation hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30); // update every 30ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function Statistics() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-900 to-[#0b0f1a]">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
      >
        Our Joining Rate & Stats
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 mb-16"
      >
        See how active our users are and how fast contests are joining
      </motion.p>

      {/* Stat Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {stats.map((stat, index) => {
          const count = useCountUp(stat.value);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition text-center"
            >
              <p className="text-4xl font-bold text-gray-900 mb-2">
                {stat.label === "Average Joining Rate (%)"
                  ? count + "%"
                  : count.toLocaleString()}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
