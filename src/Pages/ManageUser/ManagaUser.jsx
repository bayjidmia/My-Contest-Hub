// import React from "react";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { FaUserMinus, FaUserShield } from "react-icons/fa6";
// import Swal from "sweetalert2";

// const ManagaUser = () => {
//   const axiosSecure = useAxiosSecure();

//   const {
//     data: users = [],

//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["all-user"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/all-user");
//       return res.data;
//     },
//   });
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <span className="loading loading-spinner text-primary"></span>
//       </div>
//     );
//   }

//   console.log(users);

//   const handleadmin = async (id) => {
//     console.log(id);
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

//     // Step 3: API call if confirmed
//     try {
//       const res = await axiosSecure.patch(`/role-change/${id}`, {
//         role: "admin",
//       });

//       if (res.data.modifiedCount > 0) {
//         // Success alert
//         Swal.fire({
//           icon: "success",
//           title: "Successfully update!",
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

//   const handleadminremove = async (id) => {
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

//     // Step 3: API call if confirmed
//     try {
//       const res = await axiosSecure.patch(`/role-change/${id}`, {
//         role: "user",
//       });

//       if (res.data.modifiedCount > 0) {
//         // Success alert
//         Swal.fire({
//           icon: "success",
//           title: "Successfully update!",
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

//   return (
//     <div>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>User Email</th>
//               <th>User Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {users.map((user, index) => (
//               <tr>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle h-12 w-12">
//                         <img
//                           src={user.photoURL}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold">{user.displayName}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>{user.email}</td>
//                 <td
//                   className={`
//     font-semibold px-3 py-1 rounded
//     ${user.role === "user" ? " text-green-600" : ""}
//     ${user.role === "creator" ? " text-yellow-600" : ""}
//     ${user.role === "admin" ? " text-red-600" : ""}
//   `}
//                 >
//                   {user.role}
//                 </td>
//                 <th className="flex gap-3">
//                   <button
//                     onClick={() => handleadmin(user._id)}
//                     className="btn  btn-xs"
//                   >
//                     <FaUserShield />
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleadminremove(user._id);
//                     }}
//                     className="btn btn-xs"
//                   >
//                     <FaUserMinus />
//                   </button>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManagaUser;
import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import { FaUserMinus, FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";
import { FaUsersCog } from "react-icons/fa";

const ManagaUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-user");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <span className="loading loading-infinity loading-lg text-primary"></span>
        <p className="text-gray-400 font-bold animate-pulse">
          Syncing User Directory...
        </p>
      </div>
    );
  }

  // Functionality remains exactly as provided
  const handleadmin = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this contest!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
      cancelButtonText: "No, cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.patch(`/role-change/${id}`, {
        role: "admin",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Successfully update!",
          text: "Contest has been canceled successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Something went wrong",
      });
    }
  };

  const handleadminremove = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this contest!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
      cancelButtonText: "No, cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.patch(`/role-change/${id}`, {
        role: "user",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Successfully update!",
          text: "Contest has been canceled successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="p-6 bg-base-200/50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-[2rem] shadow-sm border border-base-content/5">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary text-3xl">
            <FaUsersCog />
          </div>
          <div>
            <h1 className="text-3xl font-black text-base-content tracking-tight">
              User Governance
            </h1>
            <p className="text-base-content/60 font-medium">
              Manage permissions and administrative roles
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 px-6 py-2 bg-base-100 border border-base-content/10 rounded-full font-bold text-sm shadow-inner">
          Total Directory:{" "}
          <span className="text-primary">{users.length} Users</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-base-300/20 border border-base-content/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border-separate border-spacing-y-0">
            {/* head */}
            <thead className="bg-base-100">
              <tr className="text-base-content/50 uppercase text-[11px] tracking-widest font-black border-none">
                <th className="py-6 px-8">#</th>
                <th>Identity</th>
                <th>Email Address</th>
                <th className="text-center">Permissions</th>
                <th className="text-right px-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="group hover:bg-primary/5 transition-all duration-300"
                >
                  <th className="px-8 text-base-content/30 font-medium">
                    {index + 1}
                  </th>
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all">
                          <img src={user.photoURL} alt="User Profile" />
                        </div>
                      </div>
                      <div>
                        <div className="font-black text-base-content group-hover:text-primary transition-colors">
                          {user.displayName}
                        </div>
                        <div className="text-[10px] uppercase font-bold text-base-content/40 tracking-tighter">
                          Verified Member
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium text-base-content/70">
                    {user.email}
                  </td>
                  <td className="text-center">
                    <div
                      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm
                      ${user.role === "user" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : ""}
                      ${user.role === "creator" ? "bg-amber-50 text-amber-600 border-amber-100" : ""}
                      ${user.role === "admin" ? "bg-rose-50 text-rose-600 border-rose-100" : ""}
                    `}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-pulse
                        ${user.role === "user" ? "bg-emerald-500" : ""}
                        ${user.role === "creator" ? "bg-amber-500" : ""}
                        ${user.role === "admin" ? "bg-rose-500" : ""}
                      `}
                      ></span>
                      {user.role}
                    </div>
                  </td>
                  <th className="px-8">
                    <div className="flex justify-end gap-3">
                      {/* Promote Button */}
                      <button
                        onClick={() => handleadmin(user._id)}
                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm group/btn"
                        title="Promote to Admin"
                      >
                        <FaUserShield className="text-lg group-hover/btn:scale-110 transition-transform" />
                      </button>

                      {/* Demote Button */}
                      <button
                        onClick={() => handleadminremove(user._id)}
                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-sm group/btn"
                        title="Remove Admin Rights"
                      >
                        <FaUserMinus className="text-lg group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="py-20 text-center text-base-content/30 italic font-medium">
              No users found in the registry.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagaUser;
