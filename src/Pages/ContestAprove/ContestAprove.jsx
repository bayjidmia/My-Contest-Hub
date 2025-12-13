import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ImCheckmark } from "react-icons/im";

import { FaXmark } from "react-icons/fa6";

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

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-error text-center"></span>
    );
  }

  const handleaprove = async (id) => {
    try {
      const res = await axiosSecure.patch(`/contest-status/${id}`, {
        status: "approved",
      });

      if (res.data.modifiedCount > 0) {
        alert("Status updated successfully!");
        refetch(); // UI refresh
      }
    } catch {
      (error) => console.log(error);
    }
  };

  const handlecancle = async (id) => {
    try {
      const res = await axiosSecure.patch(`/contest-cancle/${id}`, {
        status: "canceled",
      });

      if (res.data.modifiedCount > 0) {
        alert("Status updated successfully!");
        refetch(); // UI refresh
      }
    } catch {
      (error) => console.log(error);
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
                    onClick={() => handleaprove(contest._id)}
                    className="btn btn-xs"
                  >
                    <ImCheckmark />
                  </button>
                  <button
                    onClick={() => handlecancle(contest._id)}
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
