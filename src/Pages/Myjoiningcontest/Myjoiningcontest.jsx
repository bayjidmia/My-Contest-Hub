// import React, { useContext } from "react";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const Myjoiningcontest = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const {
//     data: contests = [],

//     isLoading,
//   } = useQuery({
//     queryKey: ["payments"],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`payments?email=${user.email}`);
//       return res.data;
//     },
//   });

//   console.log(contests);
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <span className="loading loading-spinner text-primary"></span>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1></h1>

//       <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Contest Name</th>
//               <th>Amount</th>
//               <th>transactionId</th>
//               <th>Payment Status</th>
//               <th>Deadline</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contests.map((contest, index) => (
//               <tr key={index}>
//                 <th>{index + 1}</th>
//                 <td>{contest.contestName}</td>
//                 <td>{contest.amount}$</td>
//                 <td>{contest.transactionId}</td>
//                 <td className="text-green-500">{contest.paymentstatus}</td>
//                 <td>{contest.deadline}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Myjoiningcontest;
import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  FaCrown,
  FaCalendarAlt,
  FaReceipt,
  FaCheckCircle,
} from "react-icons/fa";

const Myjoiningcontest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <span className="loading loading-infinity loading-lg text-primary"></span>
        <p className="text-gray-500 font-bold animate-pulse">
          Syncing your achievements...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          My Participations
        </h1>
        <p className="text-gray-500 font-medium">
          Tracking your journey across {contests.length} contests
        </p>
      </div>

      {/* Stats Overview (Optional but adds quality) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <FaCrown className="text-xl" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">
              Total Joined
            </p>
            <p className="text-2xl font-black text-gray-800">
              {contests.length}
            </p>
          </div>
        </div>
      </div>

      {/* Dashing Table Container */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-separate border-spacing-y-2 px-4">
              {/* head */}
              <thead>
                <tr className="text-gray-400 border-none">
                  <th className="bg-transparent uppercase text-[10px] tracking-widest px-6">
                    #
                  </th>
                  <th className="bg-transparent uppercase text-[10px] tracking-widest">
                    Contest Details
                  </th>
                  <th className="bg-transparent uppercase text-[10px] tracking-widest text-center">
                    Entry Amount
                  </th>
                  <th className="bg-transparent uppercase text-[10px] tracking-widest">
                    Transaction Info
                  </th>
                  <th className="bg-transparent uppercase text-[10px] tracking-widest">
                    Status
                  </th>
                  <th className="bg-transparent uppercase text-[10px] tracking-widest">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                {contests.map((contest, index) => (
                  <tr
                    key={index}
                    className="group transition-all hover:bg-gray-50"
                  >
                    <th className="px-6 text-gray-400 font-medium">
                      {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-900 text-primary flex items-center justify-center font-bold">
                          {contest.contestName?.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 group-hover:text-primary transition-colors">
                            {contest.contestName}
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            Verified Entry
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center font-black text-gray-900">
                      ${contest.amount}
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-gray-500">
                        <FaReceipt className="text-xs opacity-30" />
                        <span className="font-mono text-xs">
                          {contest.transactionId}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100 w-fit">
                        <FaCheckCircle className="text-[10px]" />
                        <span className="text-xs font-black uppercase tracking-widest">
                          {contest.paymentstatus || "Paid"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
                        <FaCalendarAlt className="text-gray-300" />
                        {new Date(contest.deadline).toLocaleDateString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {contests.length === 0 && (
            <div className="p-20 text-center">
              <div className="text-6xl mb-4">💨</div>
              <h3 className="text-xl font-bold text-gray-800">
                No contests found
              </h3>
              <p className="text-gray-500">
                You haven't joined any challenges yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myjoiningcontest;
