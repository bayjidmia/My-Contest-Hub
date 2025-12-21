import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserMinus, FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";

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
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  console.log(users);

  const handleadmin = async (id) => {
    console.log(id);
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

    // Step 3: API call if confirmed
    try {
      const res = await axiosSecure.patch(`/role-change/${id}`, {
        role: "admin",
      });

      if (res.data.modifiedCount > 0) {
        // Success alert
        Swal.fire({
          icon: "success",
          title: "Successfully update!",
          text: "Contest has been canceled successfully.",
          timer: 1500,
          showConfirmButton: false,
        });

        refetch(); // UI refresh
      }
    } catch (error) {
      // Error alert
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

    // Step 3: API call if confirmed
    try {
      const res = await axiosSecure.patch(`/role-change/${id}`, {
        role: "user",
      });

      if (res.data.modifiedCount > 0) {
        // Success alert
        Swal.fire({
          icon: "success",
          title: "Successfully update!",
          text: "Contest has been canceled successfully.",
          timer: 1500,
          showConfirmButton: false,
        });

        refetch(); // UI refresh
      }
    } catch (error) {
      // Error alert
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Something went wrong",
      });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td
                  className={`
    font-semibold px-3 py-1 rounded 
    ${user.role === "user" ? " text-green-600" : ""}
    ${user.role === "creator" ? " text-yellow-600" : ""}
    ${user.role === "admin" ? " text-red-600" : ""}
  `}
                >
                  {user.role}
                </td>
                <th className="flex gap-3">
                  <button
                    onClick={() => handleadmin(user._id)}
                    className="btn  btn-xs"
                  >
                    <FaUserShield />
                  </button>
                  <button
                    onClick={() => {
                      handleadminremove(user._id);
                    }}
                    className="btn btn-xs"
                  >
                    <FaUserMinus />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagaUser;
