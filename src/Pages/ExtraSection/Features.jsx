import { motion } from "framer-motion";
import {
  FaTrophy,
  FaWallet,
  FaUserShield,
  FaPenFancy,
  FaClock,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTrophy />,
    title: "Easy Contest Join",
    desc: "One-click contest join with smooth and fast experience.",
  },
  {
    icon: <FaWallet />,
    title: "Real Prize Money",
    desc: "Win contests and receive money instantly in your wallet.",
  },
  {
    icon: <FaUserShield />,
    title: "Admin-Controlled Creator",
    desc: "Only admin-approved users can create contests.",
  },
  {
    icon: <FaPenFancy />,
    title: "Smart Contest Creation",
    desc: "Creators can set rules, fees, prizes and duration easily.",
  },
  {
    icon: <FaClock />,
    title: "Live Contest Tracking",
    desc: "Track contest progress and participants in real-time.",
  },
  {
    icon: <FaLock />,
    title: "Secure Wallet System",
    desc: "Safe add money, withdraw and prize distribution system.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-black"
      >
        <span className="text-primary">Powerful</span> Features
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 mb-16"
      >
        Built for winning, creating and controlling contests
      </motion.p>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
