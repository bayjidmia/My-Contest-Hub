import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Myjoiningcontest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: contests = [],

    isLoading,
  } = useQuery({
    queryKey: ["my-contest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`my-contest?email=${user.email}`);
      return res.data;
    },
  });

  console.log(contests);

  return (
    <div>
      <h1></h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Contest Name</th>
              <th>Amount</th>
              <th>transactionId</th>
              <th>Payment Status</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{contest.contestName}</td>
                <td>{contest.amount}$</td>
                <td>{contest.transactionId}</td>
                <td className="text-green-500">{contest.paymentstatus}</td>
                <td>{contest.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myjoiningcontest;
