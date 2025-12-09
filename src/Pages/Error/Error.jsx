import React from "react";
import image from "../../assets/image copy 3.png";
import { NavLink } from "react-router";

const Error = () => {
  const btn = <NavLink to={"/"}>Go back</NavLink>;
  return (
    <div className="flex  justify-center items-center flex-col mt-15 mb-8">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-center mt-5">
        <h1 className="font-bold text-4xl">Oops, page not found!</h1>
        <p className="text-[#627382] mt-3 mb-3">
          The page you are looking for is not available.
        </p>
        <button className="btn text-white border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Error;
