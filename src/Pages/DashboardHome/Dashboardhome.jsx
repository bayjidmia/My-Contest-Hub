import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import Adminhome from "../AdminHome/Adminhome";
import Creatorhome from "../CreatorHome/Creatorhome";
import Userhome from "../UserHome/Userhome";
import useRole from "../../Hook/useRole";

const Dashboardhome = () => {
  const { role } = useRole();
  console.log(role);
  if (role === "admin") return <Adminhome></Adminhome>;
  if (role === "creator") return <Creatorhome></Creatorhome>;
  return <Userhome></Userhome>;
};

export default Dashboardhome;
