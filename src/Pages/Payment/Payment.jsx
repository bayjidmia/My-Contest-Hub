// import { useQuery } from "@tanstack/react-query";
// import React, { useContext } from "react";
// import { useParams } from "react-router";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { AuthContext } from "../../Authprovide/Context/Context";

// const Payment = () => {
//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const { isLoading, data: contest = [] } = useQuery({
//     queryKey: ["parcels", id],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`contest/${id}`);
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return <span className="loading loading-spinner loading-xl"></span>;
//   }

//   const handlepayment = async () => {
//     const paymentInfo = {
//       entryFee: contest.entryFee,
//       contestId: contest._id,
//       creatorEmail: contest.creatorEmail,
//       contestName: contest.contestName,
//       userEmail: user.email,
//       deadline: contest.deadline,
//     };
//     console.log(contest);

//     const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
//     window.location.href = res.data.url;
//   };

//   return (
//     <div>
//       <h2>
//         please {contest.entryFee} paye: {contest.contestName}
//       </h2>
//       <button
//         onClick={handlepayment}
//         className="btn btn-primary btn-sm text-black "
//       >
//         pay
//       </button>
//     </div>
//   );
// };

// export default Payment;
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Authprovide/Context/Context";
import { FaLock, FaShieldAlt, FaTicketAlt } from "react-icons/fa";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { isLoading, data: contest = {} } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`contest/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handlepayment = async () => {
    const paymentInfo = {
      entryFee: contest.entryFee,
      contestId: contest._id,
      creatorEmail: contest.creatorEmail,
      contestName: contest.contestName,
      userEmail: user?.email,
      deadline: contest.deadline,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50/50 p-6">
      <div className="max-w-md w-full">
        {/* Decorative Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <FaShieldAlt className="text-3xl text-primary" />
          </div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">
            Checkout
          </h2>
          <p className="text-gray-500 font-medium">
            Secure your spot in the challenge
          </p>
        </div>

        {/* Payment Summary Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
          {/* Card Top Section */}
          <div className="p-8 border-b border-dashed border-gray-200">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Contest Details
            </p>
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gray-900 flex-shrink-0 flex items-center justify-center text-white">
                <FaTicketAlt className="text-xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {contest.contestName}
                </h3>
                <p className="text-sm text-gray-500 mt-1 uppercase font-semibold">
                  {contest.contestType}
                </p>
              </div>
            </div>
          </div>

          {/* Pricing breakdown */}
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-center text-gray-600">
              <span className="font-medium">Registration Fee</span>
              <span className="font-bold text-gray-900">
                ${contest.entryFee}
              </span>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span className="font-medium">Service Fee</span>
              <span className="font-bold text-green-600">FREE</span>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-lg font-black text-gray-800">
                  Total Amount
                </span>
                <span className="text-3xl font-black text-primary">
                  ${contest.entryFee}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handlepayment}
              className="group relative w-full mt-6 py-5 bg-black hover:bg-primary text-white hover:text-black rounded-2xl font-black text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">PAY WITH STRIPE</span>
              <FaLock className="relative z-10 text-sm opacity-50" />

              {/* Button Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
            </button>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Guaranteed Safe Checkout
              </p>
              <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                  alt="Stripe"
                  className="h-5"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  className="h-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-5"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-gray-400 font-medium px-4">
          By clicking pay, you agree to the contest rules and terms of service.
        </p>
      </div>
    </div>
  );
};

export default Payment;
