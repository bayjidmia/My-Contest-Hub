import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Setwinner = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [selectedContest, setSelectedContest] = useState(null);

  const {
    data: contests = [],

    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["set-winner"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/set-winner/${user.email}`);
      return res.data;
    },
  });

  console.log(contests);

  const handleDeclareWinner = async (contestId, submission) => {
    Swal.fire({
      title: "Declare Winner?",
      text: `${submission.userName} will be the winner`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch("/declare-winner", {
          contestId,
          winner: {
            name: submission.userName,
            email: submission.userEmail,
            photo: submission.userPhoto,
          },
        });
        refetch();
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {/* 🟦 Contest List */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">
          My Contests(please click here)
        </h2>
        {contests.map((contest) => (
          <div
            key={contest._id}
            onClick={() => setSelectedContest(contest)}
            className="cursor-pointer p-3 border-b hover:bg-gray-100"
          >
            {contest.contestName}
          </div>
        ))}
      </div>

      {/* 🟩 Submissions */}
      <div className="border rounded-lg p-4">
        {selectedContest ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              {selectedContest.contestName}
            </h2>

            {selectedContest.submissions.length > 0 ? (
              selectedContest.submissions.map((sub, index) => (
                <div
                  key={sub._id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2"
                >
                  <div>
                    <p>
                      {index + 1}. {sub.userName}
                    </p>
                    <p className="text-sm text-gray-500">{sub.userEmail}</p>
                    <a
                      href={sub.submissionLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      View Submission
                    </a>
                  </div>
                  <button
                    disabled={selectedContest.winner}
                    onClick={() =>
                      handleDeclareWinner(selectedContest._id, sub)
                    }
                    className="btn btn-sm btn-success"
                  >
                    {selectedContest.winner
                      ? "Winner Declared"
                      : "Declare Winner"}
                  </button>
                </div>
              ))
            ) : (
              <p>No submissions found</p>
            )}
          </>
        ) : (
          <p>Select a contest to see submissions</p>
        )}
      </div>
    </div>
  );
};

export default Setwinner;
