// import React from "react";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { ImCheckmark } from "react-icons/im";

// import { FaXmark } from "react-icons/fa6";
// import Swal from "sweetalert2";

// const ContestAprove = () => {
//   const axiosSecure = useAxiosSecure();
//   const {
//     data: contests = [],

//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["latest-contest"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("dashboard/contest-aprove");
//       return res.data;
//     },
//   });

//   const { data: users = [] } = useQuery({
//     queryKey: ["all-user"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/all-user");
//       return res.data;
//     },
//   });

//   const getUserId = (creatorEmail) => {
//     const foundUser = users.find((user) => user.email === creatorEmail);
//     return foundUser ? foundUser._id : null;
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <span className="loading loading-spinner text-primary"></span>
//       </div>
//     );
//   }

//   const handleaprove = async ({ parcelId, userId }) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You want to approve this contest!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, approve it!",
//       cancelButtonText: "No, cancel",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       const res1 = await axiosSecure.patch(`/contest-status/${parcelId}`, {
//         status: "approved",
//       });

//       const res2 = await axiosSecure.patch(`/status-change/${userId}`, {
//         role: "creator",
//       });

//       if (res1.data.modifiedCount > 0 && res2.data.modifiedCount > 0) {
//         Swal.fire({
//           icon: "success",
//           title: "Approved!",
//           text: "Contest has been approved successfully.",
//           timer: 1500,
//           showConfirmButton: false,
//         });

//         refetch();
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops!",
//         text: error.message || "Something went wrong",
//       });
//     }
//   };

//   const handlecancle = async ({ parcelId, userId }) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You want to cancel this contest!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, cancel it!",
//       cancelButtonText: "No, keep it",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       const res1 = await axiosSecure.patch(`/contest-cancle/${parcelId}`, {
//         status: "canceled",
//       });

//       const res2 = await axiosSecure.patch(`/status-change/${userId}`, {
//         role: "user",
//       });

//       if (res1.data.modifiedCount > 0 && res2.data.modifiedCount > 0) {
//         Swal.fire({
//           icon: "success",
//           title: "Canceled!",
//           text: "Contest has been canceled successfully.",
//           timer: 1500,
//           showConfirmButton: false,
//         });

//         refetch(); // UI refresh
//       }
//     } catch (error) {
//       // Error alert
//       Swal.fire({
//         icon: "error",
//         title: "Oops!",
//         text: error.message || "Something went wrong",
//       });
//     }
//   };

//   console.log(contests);
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
//     font-semibold px-3 py-1 rounded
//     ${contest.status === "approved" ? " text-green-600" : ""}
//     ${contest.status === "pending" ? " text-yellow-600" : ""}
//     ${contest.status === "canceled" ? " text-red-600" : ""}
//   `}
//               >
//                 {contest.status}
//               </td>
//               <th>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() =>
//                       handleaprove({
//                         parcelId: contest._id,
//                         userId: getUserId(contest.creatorEmail),
//                       })
//                     }
//                     className="btn btn-xs"
//                   >
//                     <ImCheckmark />
//                   </button>
//                   <button
//                     onClick={() =>
//                       handlecancle({
//                         parcelId: contest._id,
//                         userId: getUserId(contest.creatorEmail),
//                       })
//                     }
//                     className="btn btn-xs"
//                   >
//                     <FaXmark />
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

// export default ContestAprove;
import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ImCheckmark } from "react-icons/im";
import { FaXmark, FaShieldHalved } from "react-icons/fa6";
import { MdOutlinePendingActions, MdVerifiedUser } from "react-icons/md";
import Swal from "sweetalert2";

const ContestAprove = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch Contests
  const {
    data: contests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["latest-contest"],
    queryFn: async () => {
      const res = await axiosSecure.get("dashboard/contest-aprove");
      return res.data;
    },
  });

  // Fetch Users (for ID mapping)
  const { data: users = [] } = useQuery({
    queryKey: ["all-user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-user");
      return res.data;
    },
  });

  const getUserId = (creatorEmail) => {
    const foundUser = users.find((user) => user.email === creatorEmail);
    return foundUser ? foundUser._id : null;
  };

  const handleAction = async (type, parcelId, userId) => {
    const isApprove = type === "approve";

    const result = await Swal.fire({
      title: isApprove ? "Confirm Approval?" : "Confirm Cancellation?",
      text: isApprove
        ? "This will make the contest public and promote the user to Creator."
        : "This will reject the contest and reset user status.",
      icon: isApprove ? "question" : "warning",
      showCancelButton: true,
      confirmButtonColor: isApprove ? "#10B981" : "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: isApprove ? "Yes, Approve" : "Yes, Cancel",
      background: "#ffffff",
      customClass: {
        title: "font-black text-gray-800",
        confirmButton: "rounded-xl px-6 py-3 font-bold",
      },
    });

    if (!result.isConfirmed) return;

    try {
      const status = isApprove ? "approved" : "canceled";
      const role = isApprove ? "creator" : "user";
      const endpoint = isApprove
        ? `/contest-status/${parcelId}`
        : `/contest-cancle/${parcelId}`;

      const res1 = await axiosSecure.patch(endpoint, { status });
      const res2 = await axiosSecure.patch(`/status-change/${userId}`, {
        role,
      });

      if (res1.data.modifiedCount > 0 || res2.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: isApprove ? "Contest Verified!" : "Contest Rejected",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
        <span className="loading loading-ring loading-lg text-primary"></span>
        <p className="text-xs font-black uppercase tracking-widest text-gray-400">
          Loading Submissions...
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-10 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <FaShieldHalved className="text-primary" /> Approval Portal
          </h1>
          <p className="text-gray-500 font-medium mt-1">
            Review and verify new contest submissions from the community.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="bg-white border border-gray-200 px-4 py-2 rounded-2xl shadow-sm text-sm font-bold text-gray-600">
            Pending Requests:{" "}
            {contests.filter((c) => c.status === "pending").length}
          </span>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-separate border-spacing-y-0">
              {/* head */}
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr className="text-gray-400 uppercase text-[10px] tracking-[0.2em] font-black border-none">
                  <th className="py-6 px-8">Contest Information</th>
                  <th>Submitted By</th>
                  <th className="text-center">Current Status</th>
                  <th className="text-right pr-10">Administrative Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {contests.map((contest) => (
                  <tr
                    key={contest._id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    {/* Contest Name & Image */}
                    <td className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle h-14 w-14 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={contest.image}
                              alt={contest.contestName}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-black text-gray-800 text-base">
                            {contest.contestName}
                          </div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase mt-0.5 tracking-tight">
                            ID: {contest._id.slice(-8)}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Creator Info */}
                    <td>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-700">
                          {contest.creatorName}
                        </span>
                        <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          {contest.creatorEmail}
                        </span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="text-center">
                      <div
                        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                        ${contest.status === "approved" ? "bg-green-50 text-green-600 border-green-100" : ""}
                        ${contest.status === "pending" ? "bg-yellow-50 text-yellow-600 border-yellow-100" : ""}
                        ${contest.status === "canceled" ? "bg-red-50 text-red-600 border-red-100" : ""}
                      `}
                      >
                        {contest.status === "pending" && (
                          <MdOutlinePendingActions className="text-sm" />
                        )}
                        {contest.status === "approved" && (
                          <MdVerifiedUser className="text-sm" />
                        )}
                        {contest.status}
                      </div>
                    </td>

                    {/* Action Buttons */}
                    <td className="text-right pr-10">
                      <div className="flex justify-end gap-3">
                        <button
                          disabled={contest.status === "approved"}
                          onClick={() =>
                            handleAction(
                              "approve",
                              contest._id,
                              getUserId(contest.creatorEmail),
                            )
                          }
                          className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm
                            ${
                              contest.status === "approved"
                                ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                                : "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-green-200"
                            }`}
                          title="Approve Contest"
                        >
                          <ImCheckmark className="text-sm" />
                        </button>

                        <button
                          disabled={contest.status === "canceled"}
                          onClick={() =>
                            handleAction(
                              "cancel",
                              contest._id,
                              getUserId(contest.creatorEmail),
                            )
                          }
                          className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm
                            ${
                              contest.status === "canceled"
                                ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                                : "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:shadow-red-200"
                            }`}
                          title="Reject Contest"
                        >
                          <FaXmark className="text-sm" />
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
                  <FaShieldHalved className="text-4xl text-gray-300" />
                </div>
                <h3 className="text-xl font-black text-gray-800">
                  Queue is Clear
                </h3>
                <p className="text-gray-400 mt-2">
                  No new contests are awaiting approval at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestAprove;
