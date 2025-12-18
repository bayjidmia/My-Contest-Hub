import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../Authprovide/Context/Context";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: role = "user", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    // enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${user.email}`);
      return res.data.role;
    },
  });
  console.log("yyyyyyyyy", role);

  return { role, isLoading };
};

export default useRole;
