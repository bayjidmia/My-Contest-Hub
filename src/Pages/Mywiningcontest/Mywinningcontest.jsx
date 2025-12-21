import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Mywinningcontest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["winning-contest", user?.email],
    enabled: !!user?.email, // user না থাকলে call হবে না
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/winning-contest?email=${user.email}`
      );
      return res.data;
    },
  });

  console.log(contests);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🏆 My Winning Contests</h2>

      {/* ❌ No Winning */}
      {contests.length === 0 ? (
        <div className="text-center bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-600 font-medium">No winning yet 😔</p>
        </div>
      ) : (
        /* ✅ Responsive Table */
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="table w-full">
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Contest</th>
                <th>Type</th>
                <th>Prize</th>
                <th>Winner</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {contests.map((contest, index) => (
                <tr key={contest._id} className="hover">
                  <td>{index + 1}</td>

                  <td className="font-medium">{contest.contestName}</td>

                  <td>{contest.contestType}</td>

                  <td className="font-semibold text-green-600">
                    ${contest.prizeMoney}
                  </td>

                  <td className="flex items-center gap-2">
                    <img
                      src={contest.winner.photo}
                      alt="winner"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{contest.winner.name}</span>
                  </td>

                  <td className="text-sm">
                    {new Date(contest.winner.declaredAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Mywinningcontest;
