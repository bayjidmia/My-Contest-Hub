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
      const res = await axiosSecure.get("/latest-contest");
      return res.data;
    },

    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <h1 className="text-center font-bold text-3xl mt-10 dark:text-white">
        <span className="text-primary">Latest</span> Contest
      </h1>

      <div className="grid gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contests.map((contest, index) => {
          return (
            <div
              key={contest._id}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-slate-700 flex flex-col h-full"
            >
              {/* Image Container */}
              <figure className="relative w-full h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={contest.image}
                  alt={contest.contestName}
                />
                <div className="absolute top-4 right-4">
                  <div className="badge badge-secondary font-bold px-3 py-3 border-none">
                    NEW
                  </div>
                </div>
              </figure>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-1">
                  {contest.contestName}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {contest.description}
                </p>

                <div className="mt-auto">
                  <NavLink
                    to={user ? `/contest-details/${contest._id}` : "/login"}
                    className="inline-block text-primary dark:text-indigo-400 font-bold text-sm hover:underline"
                  >
                    Details & Joining →
                  </NavLink>
                </div>
              </div>

              {/* Footer / Stats */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <IoIosMan className="text-xl text-primary" />
                  <span className="font-bold text-lg">
                    {contest.participantsCount}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-medium ml-1">
                    Joined
                  </span>
                </div>

                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Active
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center my-8">
        <NavLink to={"/all-contest"}>
          <button className="btn btn-primary px-8 text-white font-bold dark:text-black">
            See All Contests
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LatestContext;
