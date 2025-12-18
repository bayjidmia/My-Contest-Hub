import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Mycreatedcontest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  console.log(user.email);

  const {
    data: contests = [],

    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCreateContest", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-create-contest?email=${user.email}`
      );
      return res.data;
    },
  });

  const handledelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/contest/${id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Contest has been deleted.", "success");
          refetch(); // 🔁 table refresh
        }
      }
    });
  };

  console.log(contests);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

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
                  <button className="btn btn-xs">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handledelete(contest._id)}
                    className="btn btn-xs"
                  >
                    <MdDelete />
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

export default Mycreatedcontest;
