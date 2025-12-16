import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoIosMan } from "react-icons/io";
import LiveCountdown from "../../Component/LiveCountdown/LiveCountdown";
import SubmissionForm from "../Submissionform/Submissionform";

const ContestDetails = () => {
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();

  const { data: contest = [] } = useQuery({
    queryKey: ["contest-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`contest-details/${id}`);
      return res.data;
    },
  });
  console.log(contest);
  const isExpired = contest?.deadline
    ? new Date(contest.deadline) < new Date()
    : false;

  return (
    <div>
      <div className="flex flex-col gap-10 mt-5 p-5 lg:flex-row">
        <div className=" lg:flex-1">
          <img src={contest.image} alt="" />
        </div>
        <div className="flex-1">
          <div className="flex gap-2 text-center font-bold text-xl text-black ">
            <h1 className="text underline ">Contest name</h1>
            <p className="">:</p>
            <p>{contest.contestName}</p>
          </div>
          <div className="flex gap-2 font-bold text-xl text-black ">
            <h1 className="text underline">Contest Type</h1>
            <p>:</p>
            <p>{contest.contestType}</p>
          </div>
          <div className="mt-3">
            <h1 className="text-2xl font-extrabold">Creator Info :</h1>
            <div className="flex gap-2 font-bold text-xl text-black ">
              <h1 className="text underline">Creator name</h1>
              <p>:</p>
              <p>{contest.creatorName}</p>
            </div>
            <div className="flex gap-2 font-bold text-xl text-black ">
              <h1 className="text underline">Creator email</h1>
              <p>:</p>
              <p>{contest.creatorEmail}</p>
            </div>{" "}
          </div>
          <div className="flex gap-2 font-bold text-xl text-black ">
            <h1 className="text underline">Contest End</h1>
            <p>:</p>
            <p>
              {contest?.deadline ? (
                <LiveCountdown targetDate={contest.deadline} />
              ) : (
                <span className="text-gray-400">Loading...</span>
              )}
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="flex text-center">
        <div className="ml-8 flex gap-1">
          <h1 className="text-xl font-bold">
            <IoIosMan />
          </h1>
          {contest.paymentStatus == "paid" ? (
            <h2 className="font-bold text-gray-500">
              {contest.participantsCount + 1}
            </h2>
          ) : (
            <h2 className="font-bold text-gray-500">
              {contest.participantsCount}
            </h2>
          )}
        </div>
      </div>

      <div className=" text-justify p-5">
        <p>
          <h1 className="font-bold text-xl text-black text underline my-2 ">
            Contest Description :
          </h1>
          {contest.description}
        </p>
      </div>
      <div className="border border-1 border-gray-400 my-8"></div>

      <div className="border border-1 border-gray-500 p-2 w-[320px] mx-auto">
        <div className="ml-8 flex gap-1 text-xl font-bold">
          <h1>Entry Fee :</h1>
          <h2 className="font-bold text-gray-500">$ {contest.entryFee}</h2>
        </div>
        <div className="ml-8 flex gap-1 text-xl font-bold">
          <h1>Prize Money :</h1>
          <h2 className="font-bold text-gray-500">$ {contest.prizeMoney}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-5 ">
        <h1 className="font-bold text-xl my-2">Take a Challenge</h1>
        <div>
          {!isExpired && contest.paymentStatus == "paid" && (
            <SubmissionForm contestId={contest._id} />
          )}

          {/* Not paid */}
          {!isExpired && contest.paymentStatus !== "paid" && (
            <Link to={`/dashboard/payment/${contest._id}`}>
              <button className="btn btn-primary btn-sm text-black">Pay</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
