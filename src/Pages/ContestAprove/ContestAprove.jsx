import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ImCheckmark } from "react-icons/im";

import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";

const ContestAprove = () => {
  const axiosSecure = useAxiosSecure();
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

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-error text-center"></span>
    );
  }

  const handleaprove = async ({ parcelId, userId }) => {
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

    // ❌ Cancel করলে এখানেই stop
    if (!result.isConfirmed) return;

    try {
      const res1 = await axiosSecure.patch(`/contest-status/${parcelId}`, {
        status: "approved",
      });

      const res2 = await axiosSecure.patch(`/status-change/${userId}`, {
        role: "creator",
      });

      if (res1.data.modifiedCount > 0 && res2.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Approved!",
          text: "Contest has been approved successfully.",
          timer: 1500,
          showConfirmButton: false,
        });

        refetch(); // UI refresh
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Something went wrong",
      });
    }
  };

  const handlecancle = async ({ parcelId, userId }) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this contest!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    });
    // Step 2: If user cancels, stop here
    if (!result.isConfirmed) return;

    // Step 3: API call if confirmed
    try {
      const res1 = await axiosSecure.patch(`/contest-cancle/${parcelId}`, {
        status: "canceled",
      });

      const res2 = await axiosSecure.patch(`/status-change/${userId}`, {
        role: "user",
      });

      if (res1.data.modifiedCount > 0 && res2.data.modifiedCount > 0) {
        // Success alert
        Swal.fire({
          icon: "success",
          title: "Canceled!",
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

  console.log(contests);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Creator Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contests.map((contest, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={contest.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{contest.contestName}</div>
                  </div>
                </div>
              </td>
              <td>
                {contest.creatorName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {contest.creatorEmail}
                </span>
              </td>
              <td
                className={`
    font-semibold px-3 py-1 rounded 
    ${contest.status === "approved" ? " text-green-600" : ""}
    ${contest.status === "pending" ? " text-yellow-600" : ""}
    ${contest.status === "canceled" ? " text-red-600" : ""}
  `}
              >
                {contest.status}
              </td>
              <th>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      handleaprove({
                        parcelId: contest._id,
                        userId: getUserId(contest.creatorEmail),
                      })
                    }
                    className="btn btn-xs"
                  >
                    <ImCheckmark />
                  </button>
                  <button
                    onClick={() =>
                      handlecancle({
                        parcelId: contest._id,
                        userId: getUserId(contest.creatorEmail),
                      })
                    }
                    className="btn btn-xs"
                  >
                    <FaXmark />
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContestAprove;
