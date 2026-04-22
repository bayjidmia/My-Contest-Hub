// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import Swal from "sweetalert2";

// const Mycreatedcontest = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   console.log(user.email);

//   const {
//     data: contests = [],

//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["myCreateContest", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(
//         `/my-create-contest?email=${user.email}`
//       );
//       return res.data;
//     },
//   });

//   const handledelete = async (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const res = await axiosSecure.delete(`/contest/${id}`);

//         if (res.data.deletedCount > 0) {
//           Swal.fire("Deleted!", "Contest has been deleted.", "success");
//           refetch(); // 🔁 table refresh
//         }
//       }
//     });
//   };

//   console.log(contests);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading loading-spinner text-error"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Creator Name</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {contests.map((contest, index) => (
//             <tr>
//               <th>{index + 1}</th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle h-12 w-12">
//                       <img
//                         src={contest.image}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">{contest.contestName}</div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 {contest.creatorName}
//                 <br />
//                 <span className="badge badge-ghost badge-sm">
//                   {contest.creatorEmail}
//                 </span>
//               </td>
//               <td
//                 className={`
//         font-semibold px-3 py-1 rounded
//         ${contest.status === "approved" ? " text-green-600" : ""}
//         ${contest.status === "pending" ? " text-yellow-600" : ""}
//         ${contest.status === "canceled" ? " text-red-600" : ""}
//       `}
//               >
//                 {contest.status}
//               </td>
//               <th>
//                 <div className="flex gap-2">
//                   <button className="btn btn-xs">
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handledelete(contest._id)}
//                     className="btn btn-xs"
//                   >
//                     <MdDelete />
//                   </button>
//                 </div>
//               </th>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Mycreatedcontest;
import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaEdit, FaEye, FaTrophy, FaUserFriends } from "react-icons/fa";
import {
  MdDelete,
  MdPendingActions,
  MdCheckCircle,
  MdCancel,
} from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Mycreatedcontest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: contests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCreateContest", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-create-contest?email=${user.email}`,
      );
      return res.data;
    },
  });

  const handledelete = async (id) => {
    Swal.fire({
      title: "Remove Contest?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
      background: "#fff",
      customClass: {
        title: "font-black text-gray-800",
        confirmButton: "rounded-xl px-6 py-3",
        cancelButton: "rounded-xl px-6 py-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/contest/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your contest has been removed.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          refetch();
        }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
        <span className="loading loading-bars loading-lg text-primary"></span>
        <p className="text-gray-400 font-bold tracking-widest animate-pulse uppercase text-xs">
          Loading your empire...
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8 bg-gray-50/50 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Management Hub
          </h1>
          <p className="text-gray-500 font-medium">
            You have launched {contests.length} global challenges
          </p>
        </div>
        <Link to="/dashboard/add-contest">
          <button className="bg-primary hover:bg-black text-white dark:text-black hover:text-white px-6 py-3 rounded-2xl font-black transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2">
            Launch New Contest +
          </button>
        </Link>
      </div>

      {/* Dashing Table Container */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Table Head */}
              <thead className="bg-gray-50/50">
                <tr className="border-none text-gray-400 uppercase text-[10px] tracking-[0.2em] font-black">
                  <th className="py-6 px-8 text-center">Rank</th>
                  <th>Contest Information</th>
                  <th>Management Status</th>
                  <th className="text-center">Analytics</th>
                  <th className="text-right pr-8">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {contests.map((contest, index) => (
                  <tr
                    key={contest._id}
                    className="hover:bg-gray-50/80 transition-all duration-300 group"
                  >
                    <td className="text-center font-black text-gray-300 text-lg px-8">
                      {index + 1}
                    </td>

                    <td className="py-5">
                      <div className="flex items-center gap-4">
                        <div className="relative group-hover:scale-105 transition-transform duration-500">
                          <div className="mask mask-squircle h-14 w-14 shadow-lg">
                            <img
                              src={contest.image}
                              alt="Contest Cover"
                              className="object-cover w-full h-full"
                            />
                          </div>
                          {contest.status === "approved" && (
                            <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1 border-2 border-white">
                              <MdCheckCircle className="text-[10px]" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-black text-gray-800 text-base group-hover:text-primary transition-colors">
                            {contest.contestName}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase mt-1">
                            <FaTrophy className="text-primary" />
                            Prize: ${contest.prizeMoney}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      {contest.status === "approved" ? (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100 w-fit text-[10px] font-black uppercase tracking-widest">
                          <MdCheckCircle /> Active
                        </span>
                      ) : contest.status === "pending" ? (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 border border-yellow-100 w-fit text-[10px] font-black uppercase tracking-widest">
                          <MdPendingActions /> In Review
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 w-fit text-[10px] font-black uppercase tracking-widest">
                          <MdCancel /> Declined
                        </span>
                      )}
                    </td>

                    <td className="text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-black text-gray-800 leading-none">
                          {contest.participantsCount || 0}
                        </span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                          Entrants
                        </span>
                      </div>
                    </td>

                    <td className="text-right pr-8">
                      <div className="flex justify-end gap-2">
                        {/* View Details */}
                        <Link to={`/contest-details/${contest._id}`}>
                          <button className="h-9 w-9 rounded-xl bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300">
                            <FaEye className="text-sm" />
                          </button>
                        </Link>

                        {/* Edit Button */}
                        <button className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300">
                          <FaEdit className="text-sm" />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handledelete(contest._id)}
                          className="h-9 w-9 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300"
                        >
                          <MdDelete className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {contests.length === 0 && (
              <div className="p-20 text-center">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdPendingActions className="text-4xl text-gray-300" />
                </div>
                <h3 className="text-xl font-black text-gray-800">
                  No active launches
                </h3>
                <p className="text-gray-400 max-w-xs mx-auto">
                  You haven't created any contests yet. Start your first
                  challenge today!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycreatedcontest;
