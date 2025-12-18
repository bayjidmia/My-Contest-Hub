import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { NavLink } from "react-router";
import { IoIosMan } from "react-icons/io";
import { AuthContext } from "../../Authprovide/Context/Context";

const LatestContext = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["latest-contest"],
    queryFn: async () => {
      const res = await axiosSecure.get("latest-contest");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-5">
        <span className="text-primary">Latest</span> Contest
      </h1>
      <div className=" grid gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contests.map((contest, index) => {
          return (
            <div
              key={index}
              className="card  bg-white shadow-md rounded-xl p-5 
    transition-transform duration-300 
   hover:-translate-y-2  hover:shadow-xl bg-base-100  shadow-sm "
            >
              <figure className="w-full h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={contest.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {contest.contestName}
                  <div className="badge badge-secondary">LATEST</div>
                </h2>
                <div className="px-4 text-gray-600 text-sm mb-2">
                  <p>{contest.description.slice(0, 100)} </p>

                  <NavLink
                    to={user ? `/contest-details/${contest._id}` : "/login"}
                    state={`/contest-details/${contest._id}`}
                    className="text-blue-600 font-medium cursor-pointer"
                  >
                    read more...
                  </NavLink>
                </div>
              </div>
              <div className="flex text-center">
                <div className="ml-8 flex gap-1">
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
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-3">
        <button className="btn btn-primary text-black ">see all</button>
      </div>
    </div>
  );
};

export default LatestContext;
