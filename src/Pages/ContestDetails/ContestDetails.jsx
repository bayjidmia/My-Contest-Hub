import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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

  return <div></div>;
};

export default ContestDetails;
