// import React, { useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";

// const Setwinner = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const [selectedContest, setSelectedContest] = useState(null);

//   const {
//     data: contests = [],

//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["set-winner"],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/set-winner/${user.email}`);
//       return res.data;
//     },
//   });

//   console.log(contests);

//   const handleDeclareWinner = async (contestId, submission) => {
//     Swal.fire({
//       title: "Declare Winner?",
//       text: `${submission.userName} will be the winner`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         await axiosSecure.patch("/declare-winner", {
//           contestId,
//           winner: {
//             name: submission.userName,
//             email: submission.userEmail,
//             photo: submission.userPhoto,
//           },
//         });
//         refetch();
//       }
//     });
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading loading-spinner text-error"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 grid md:grid-cols-2 gap-6">
//       {/* 🟦 Contest List */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-bold mb-4">
//           My Contests(please click here)
//         </h2>
//         {contests.map((contest) => (
//           <div
//             key={contest._id}
//             onClick={() => setSelectedContest(contest)}
//             className="cursor-pointer p-3 border-b hover:bg-gray-100"
//           >
//             {contest.contestName}
//           </div>
//         ))}
//       </div>

//       {/* 🟩 Submissions */}
//       <div className="border rounded-lg p-4">
//         {selectedContest ? (
//           <>
//             <h2 className="text-xl font-bold mb-4">
//               {selectedContest.contestName}
//             </h2>

//             {selectedContest.submissions.length > 0 ? (
//               selectedContest.submissions.map((sub, index) => (
//                 <div
//                   key={sub._id}
//                   className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2"
//                 >
//                   <div>
//                     <p>
//                       {index + 1}. {sub.userName}
//                     </p>
//                     <p className="text-sm text-gray-500">{sub.userEmail}</p>
//                     <a
//                       href={sub.submissionLink}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-blue-600 underline text-sm"
//                     >
//                       View Submission
//                     </a>
//                   </div>
//                   <button
//                     disabled={selectedContest.winner}
//                     onClick={() =>
//                       handleDeclareWinner(selectedContest._id, sub)
//                     }
//                     className="btn btn-sm btn-success"
//                   >
//                     {selectedContest.winner
//                       ? "Winner Declared"
//                       : "Declare Winner"}
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p>No submissions found</p>
//             )}
//           </>
//         ) : (
//           <p>Select a contest to see submissions</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Setwinner;
import React, { useState, useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {
  FaTrophy,
  FaUserCircle,
  FaExternalLinkAlt,
  FaAward,
  FaListUl,
} from "react-icons/fa";
import { MdOutlineBallot } from "react-icons/md";

const Setwinner = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [selectedContest, setSelectedContest] = useState(null);

  const {
    data: contests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["set-winner", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/set-winner/${user.email}`);
      return res.data;
    },
  });

  const handleDeclareWinner = async (contestId, submission) => {
    Swal.fire({
      title: "Confirm Winner?",
      text: `${submission.userName} will be awarded the championship title.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10B981",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Declare Winner",
      background: "#ffffff",
      customClass: {
        title: "font-black text-gray-800",
        confirmButton: "rounded-xl px-6 py-3 font-bold",
        cancelButton: "rounded-xl px-6 py-3 font-bold",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch("/declare-winner", {
            contestId,
            winner: {
              name: submission.userName,
              email: submission.userEmail,
              photo: submission.userPhoto,
            },
          });

          // Local update to avoid full reload delay
          if (selectedContest?._id === contestId) {
            setSelectedContest((prev) => ({
              ...prev,
              winner: { name: submission.userName },
            }));
          }

          Swal.fire({
            title: "Success!",
            text: "The champion has been crowned.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          refetch();
        } catch (err) {
          Swal.fire("Error", "Could not update winner", "error");
        }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-gray-400 font-black text-xs tracking-widest uppercase animate-pulse">
          Loading Submissions...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-10 min-h-screen bg-gray-50/30">
      {/* Header Area */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Judging Panel
        </h1>
        <p className="text-gray-500 font-medium">
          Select a contest to evaluate submissions and declare champions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 🟦 LEFT SIDE: Contest Selection Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <FaListUl className="text-primary" /> My Contests
              </h2>
              <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-500">
                {contests.length}
              </span>
            </div>

            <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto custom-scrollbar">
              {contests.map((contest) => (
                <div
                  key={contest._id}
                  onClick={() => setSelectedContest(contest)}
                  className={`cursor-pointer p-5 transition-all duration-300 group flex items-center justify-between ${
                    selectedContest?._id === contest._id
                      ? "bg-primary/5 border-r-4 border-primary"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className={`font-black text-sm leading-tight transition-colors ${
                        selectedContest?._id === contest._id
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {contest.contestName}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                      {contest.submissions.length} Submissions
                    </span>
                  </div>
                  {contest.winner && (
                    <FaAward className="text-yellow-500 text-lg" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🟩 RIGHT SIDE: Submission Details View */}
        <div className="lg:col-span-8">
          {selectedContest ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              {/* Active Contest Info Card */}
              <div className="bg-gray-900 rounded-[2rem] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-2">
                    {selectedContest.contestName}
                  </h2>
                  <p className="text-gray-400 text-sm font-medium">
                    Review entries and reward excellence.
                  </p>
                </div>
                {selectedContest.winner && (
                  <div className="bg-yellow-500/10 border border-yellow-500/30 px-6 py-3 rounded-2xl flex items-center gap-3">
                    <FaTrophy className="text-yellow-500 text-2xl" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 leading-none">
                        Winner Crowned
                      </p>
                      <p className="text-sm font-bold">
                        {selectedContest.winner.name}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Submissions List */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <MdOutlineBallot className="text-lg" /> All Submissions
                </h3>

                {selectedContest.submissions.length > 0 ? (
                  selectedContest.submissions.map((sub, index) => (
                    <div
                      key={sub._id}
                      className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300">
                          {sub.userPhoto ? (
                            <img
                              src={sub.userPhoto}
                              className="w-full h-full rounded-xl object-cover"
                              alt="User"
                            />
                          ) : (
                            <FaUserCircle className="text-3xl" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-black text-gray-800 truncate">
                            {sub.userName}
                          </p>
                          <p className="text-xs text-gray-500 mb-2 truncate">
                            {sub.userEmail}
                          </p>
                          <a
                            href={sub.submissionLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase text-blue-600 hover:text-blue-800 tracking-wider transition-colors"
                          >
                            Review Entry{" "}
                            <FaExternalLinkAlt className="text-[8px]" />
                          </a>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {selectedContest.winner ? (
                          selectedContest.winner.email === sub.userEmail ? (
                            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest border border-green-200">
                              🏆 The Winner
                            </div>
                          ) : (
                            <div className="bg-gray-50 text-gray-300 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest border border-gray-100">
                              Contest Closed
                            </div>
                          )
                        ) : (
                          <button
                            onClick={() =>
                              handleDeclareWinner(selectedContest._id, sub)
                            }
                            className="group/btn bg-primary hover:bg-black text-black hover:text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-none"
                          >
                            Declare Winner
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-100">
                    <p className="text-gray-300 font-bold text-lg italic">
                      No submissions for this challenge yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-[400px] flex flex-col items-center justify-center bg-white border border-dashed border-gray-200 rounded-[3rem] text-center p-10">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <FaTrophy className="text-4xl text-gray-200" />
              </div>
              <h3 className="text-xl font-black text-gray-800">No Selection</h3>
              <p className="text-gray-400 max-w-xs mx-auto text-sm font-medium">
                Please select a contest from the left panel to begin evaluating
                entries.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Setwinner;
