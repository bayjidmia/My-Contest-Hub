// import React, { useContext, useMemo } from "react";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { NavLink } from "react-router";
// import { IoIosMan } from "react-icons/io";
// import { AuthContext } from "../../Authprovide/Context/Context";

// const AllContest = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useContext(AuthContext);

//   // ✅ contests (unchanged)
//   const { data: contests = [], isLoading } = useQuery({
//     queryKey: ["all-contest"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("all-contest?status=approved");
//       return res.data;
//     },
//   });

//   // 🔥 FIX: remove full /all-payments dependency issue
//   const { data: payments = [] } = useQuery({
//     queryKey: ["payments"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/all-payments");
//       return res.data;
//     },
//     staleTime: 1000 * 60 * 5, // 5 min cache
//   });

//   const paymentCountMap = useMemo(() => {
//     const map = {};

//     payments.forEach((p) => {
//       if (p.status === "paid") {
//         map[p.contestd] = (map[p.contestd] || 0) + 1;
//       }
//     });

//     return map;
//   }, [payments]);

//   const getPaymentCount = (contestId) => {
//     return paymentCountMap[contestId] || 0;
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading loading-spinner text-error"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto  ">
//       <h1 className="text-center font-bold text-3xl text-black my-8 ">
//         <span className="text-primary">All</span> Contest
//       </h1>

//       <div className="grid gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {contests.map((contest) => {
//           const count =
//             contest.paymentStatus == "paid"
//               ? contest.participantsCount + getPaymentCount(contest._id)
//               : contest.participantsCount;

//           return (
//             <div
//               key={contest._id} // ✅ FIXED (no index)
//               className="card bg-white shadow-md rounded-xl p-5
//               transition-transform duration-300
//               hover:-translate-y-2 hover:shadow-xl bg-base-100 shadow-sm"
//             >
//               <figure className="w-full h-60 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={contest.image}
//                   alt="contest"
//                 />
//               </figure>

//               <div className="card-body">
//                 <h2 className="card-title">
//                   {contest.contestName}
//                   <div className="badge badge-secondary">LATEST</div>
//                 </h2>

//                 <div className="px-4 text-gray-600 text-sm mb-2">
//                   <p>{contest.description.slice(0, 100)}</p>

//                   <NavLink
//                     to={user ? `/contest-details/${contest._id}` : "/login"}
//                     className="text-blue-600 font-medium cursor-pointer"
//                   >
//                     read more...
//                   </NavLink>
//                 </div>
//               </div>

//               <div className="flex text-center">
//                 <div className="ml-8 flex gap-1">
//                   <h1 className="text-xl font-bold">
//                     <IoIosMan />
//                   </h1>

//                   <h2 className="font-bold text-gray-500">{count}</h2>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AllContest;
import React, { useContext, useMemo } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import { IoIosMan } from "react-icons/io";
import { AuthContext } from "../../Authprovide/Context/Context";

const AllContest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // ✅ All approved contests
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["all-contest"],
    queryFn: async () => {
      const res = await axiosSecure.get("all-contest?status=approved");
      return res.data;
    },
  });

  // ✅ Payments for participant count logic
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-payments");
      return res.data;
    },
    staleTime: 1000 * 60 * 5, // 5 min cache
  });

  const paymentCountMap = useMemo(() => {
    const map = {};
    payments.forEach((p) => {
      if (p.status === "paid") {
        map[p.contestId] = (map[p.contestId] || 0) + 1;
      }
    });
    return map;
  }, [payments]);

  const getPaymentCount = (contestId) => {
    return paymentCountMap[contestId] || 0;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-[#0F172A]">
        <span className="loading loading-spinner text-error loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 transition-colors duration-300">
      <h1 className="text-center font-bold text-4xl text-black dark:text-white my-12 tracking-tight">
        <span className="text-primary">All</span> Contests
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contests.map((contest) => {
          const totalParticipants =
            contest.paymentStatus === "paid"
              ? (contest.participantsCount || 0) + getPaymentCount(contest._id)
              : contest.participantsCount || 0;

          return (
            <div
              key={contest._id}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-slate-700 flex flex-col h-full"
            >
              {/* Image Container */}
              <figure className="relative w-full h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={contest.image}
                  alt={contest.contestName}
                />
                <div className="absolute top-4 right-4">
                  <div className="badge badge-secondary font-bold px-3 py-3 border-none">
                    NEW
                  </div>
                </div>
              </figure>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-1">
                  {contest.contestName}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {contest.description}
                </p>

                <div className="mt-auto">
                  <NavLink
                    to={user ? `/contest-details/${contest._id}` : "/login"}
                    className="inline-block text-primary dark:text-indigo-400 font-bold text-sm hover:underline"
                  >
                    Details & Joining →
                  </NavLink>
                </div>
              </div>

              {/* Footer / Stats */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <IoIosMan className="text-xl text-primary" />
                  <span className="font-bold text-lg">{totalParticipants}</span>
                  <span className="text-xs uppercase tracking-wider font-medium ml-1">
                    Joined
                  </span>
                </div>

                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Active
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllContest;
