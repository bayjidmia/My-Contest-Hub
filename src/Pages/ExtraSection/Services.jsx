// import { motion } from "framer-motion";
// import {
//   FaServer,
//   FaUserCheck,
//   FaMoneyCheckAlt,
//   FaChartLine,
//   FaHeadset,
//   FaShieldAlt,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaServer />,
//     title: "Contest Hosting",
//     desc: "We provide a stable and scalable contest hosting platform for users and creators.",
//   },
//   {
//     icon: <FaUserCheck />,
//     title: "Creator Management",
//     desc: "Admin-approved creator system to ensure trust and platform quality.",
//   },
//   {
//     icon: <FaMoneyCheckAlt />,
//     title: "Secure Prize Distribution",
//     desc: "Automated and secure prize money distribution to winners.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "User Verification & Safety",
//     desc: "Advanced verification and fraud prevention system.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Analytics & Reports",
//     desc: "Detailed contest performance and user activity analytics.",
//   },
//   {
//     icon: <FaHeadset />,
//     title: "Customer Support",
//     desc: "Fast and friendly support for users and creators.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-24 px-6 container mx-auto">
//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-3xl md:text-4xl font-bold text-center mb-4 text-black"
//       >
//         <span className="text-primary">Our</span> Services
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-center text-gray-400 mb-16"
//       >
//         Everything you need to run and win contests smoothly
//       </motion.p>

//       {/* Service Cards */}
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -8 }}
//             className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
//           >
//             {/* Icon */}
//             <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl mb-6">
//               {item.icon}
//             </div>

//             <h3 className="text-xl font-semibold mb-3 text-gray-900">
//               {item.title}
//             </h3>

//             <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  FaServer,
  FaUserCheck,
  FaMoneyCheckAlt,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaServer />,
    title: "Contest Hosting",
    desc: "We provide a stable and scalable contest hosting platform for users and creators.",
  },
  {
    icon: <FaUserCheck />,
    title: "Creator Management",
    desc: "Admin-approved creator system to ensure trust and platform quality.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Secure Prize Distribution",
    desc: "Automated and secure prize money distribution to winners.",
  },
  {
    icon: <FaShieldAlt />,
    title: "User Verification & Safety",
    desc: "Advanced verification and fraud prevention system.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reports",
    desc: "Detailed contest performance and user activity analytics.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    desc: "Fast and friendly support for users and creators.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 container mx-auto">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white"
      >
        <span className="text-primary">Our</span> Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 dark:text-gray-400 mb-16"
      >
        Everything you need to run and win contests smoothly
      </motion.p>

      {/* Service Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-gray-700"
          >
            {/* Icon - Styled for Dark Mode */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-2xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
