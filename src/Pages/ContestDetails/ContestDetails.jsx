import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoIosMan } from "react-icons/io";
import LiveCountdown from "../../Component/LiveCountdown/LiveCountdown";
import SubmissionForm from "../Submissionform/Submissionform";
import { AuthContext } from "../../Authprovide/Context/Context";

const ContestDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-payments");
      return res.data;
    },
  });

  console.log("ttt", payments);

  console.log(payments);
  const { data: contest = {}, isLoading } = useQuery({
    queryKey: ["contest-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`contest-details/${id}`);
      return res.data;
    },
  });

  const isExpired = contest?.deadline
    ? new Date(contest.deadline) < new Date()
    : false;

  if (isLoading || !payments || !contest._id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  const userPayment = payments?.find(
    (p) => p.userEmmail === user?.email && p.contestd == contest._id
  );

  console.log(typeof contest._id, typeof payments[0].contestd);

  console.log("userPayment", userPayment);

  console.log(userPayment);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Contest Info */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <img
            src={contest.image}
            alt={contest.contestName}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="text-xl font-bold">
            <p>
              <span className="underline">Contest Name:</span>{" "}
              {contest.contestName}
            </p>
            <p>
              <span className="underline">Contest Type:</span>{" "}
              {contest.contestType}
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-2xl font-extrabold mb-2">Creator Info:</h2>
            <p>
              <span className="underline font-semibold">Name:</span>{" "}
              {contest.creatorName}
            </p>
            <p>
              <span className="underline font-semibold">Email:</span>{" "}
              {contest.creatorEmail}
            </p>
          </div>

          <div className="mt-3">
            <p>
              <span className="underline font-semibold">Contest Ends:</span>{" "}
              {contest.deadline ? (
                <LiveCountdown targetDate={contest.deadline} />
              ) : (
                <span className="text-gray-400">Loading...</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Participants */}
      <div className="flex justify-start items-center gap-2 mt-4 text-xl font-bold">
        <IoIosMan />
        <p className="text-gray-500">
          {contest.paymentStatus === "paid"
            ? contest.participantsCount + 1
            : contest.participantsCount}
        </p>
      </div>

      {/* Contest Description */}
      <div className="mt-6 text-justify p-2">
        <h2 className="font-bold text-xl underline mb-2">
          Contest Description:
        </h2>
        <p>{contest.description}</p>
      </div>

      {/* Entry Fee & Prize */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4 border border-gray-400 p-4 my-4 rounded-lg">
        <div>
          <p className="font-bold">Entry Fee:</p>
          <p className="text-gray-500">$ {contest.entryFee}</p>
        </div>
        <div>
          <p className="font-bold">Prize Money:</p>
          <p className="text-gray-500">$ {contest.prizeMoney}</p>
        </div>
      </div>

      <div className="flex flex-col items-center my-5 gap-3">
        <h2 className="font-bold text-xl">Take a Challenge</h2>

        {user?.email === contest.creatorEmail ? (
          <p className="text-green-600 font-semibold">It's your contest</p>
        ) : isExpired ? (
          <button className="btn btn-disabled btn-sm">Ended</button>
        ) : contest?.winner?.name ? (
          <p className="text-red-500 font-semibold">Winner already declared</p>
        ) : userPayment?.paymentstatus === "paid" ? (
          <SubmissionForm contestId={contest._id} />
        ) : (
          <Link to={`/dashboard/payment/${contest._id}`}>
            <button className="btn btn-primary btn-sm text-black">Pay</button>
          </Link>
        )}
      </div>

      {/* Winner Section */}
      <div className="my-8 text-center">
        {contest.winner && contest.winner.name ? (
          <>
            <h2 className="text-3xl font-bold mb-4">
              Winner: {contest.winner.name}
            </h2>
            {contest.winner.photo ? (
              <img
                className="mx-auto w-32 h-32 rounded-full object-cover"
                src={contest.winner.photo}
                alt={contest.winner.name}
              />
            ) : (
              <p className="text-gray-500">No photo available</p>
            )}
          </>
        ) : (
          <p className="text-gray-400 font-semibold">
            Winner will be declared by the creator
          </p>
        )}
      </div>
    </div>
  );
};

export default ContestDetails;
