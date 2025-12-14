import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: contest = [] } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`contest/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  const handlepayment = async () => {
    const paymentInfo = {
      entryFee: contest.entryFee,
      contestId: contest._id,
      creatorEmail: contest.creatorEmail,
      contestName: contest.contestName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
  };

  return (
    <div>
      <h2>
        please {contest.entryFee} paye: {contest.contestName}
      </h2>
      <button
        onClick={handlepayment}
        className="btn btn-primary btn-sm text-black "
      >
        pay
      </button>
    </div>
  );
};

export default Payment;
