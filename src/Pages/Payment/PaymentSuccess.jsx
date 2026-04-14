// import React, { useEffect, useRef } from "react";
// import { useSearchParams } from "react-router";
// import useAxiosSecure from "../../Hook/useAxiosSecure";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();

//   const sessionId = searchParams.get("session_id");
//   console.log(sessionId);

//   const axiosSecure = useAxiosSecure();
//   const calledRef = useRef(false);

//   useEffect(() => {
//     if (!sessionId || calledRef.current) return;

//     calledRef.current = true;

//     axiosSecure
//       .patch(`/payment-success?session_id=${sessionId}`)
//       .then((res) => console.log(res.data))
//       .catch((err) => console.error(err));
//   }, [sessionId, axiosSecure]);

//   return (
//     <div>
//       <h1>Payment Sucess</h1>
//     </div>
//   );
// };

// export default PaymentSuccess;
import React, { useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaCheckCircle, FaRocket, FaArrowRight } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const calledRef = useRef(false);

  useEffect(() => {
    if (!sessionId || calledRef.current) return;
    calledRef.current = true;

    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => console.log("Payment Confirmed:", res.data))
      .catch((err) => console.error("Update Failed:", err));
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-lg w-full text-center">
        {/* Animated Success Icon Section */}
        <div className="relative mb-10">
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-100 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-50 rounded-full animate-pulse opacity-40"></div>

          <div className="relative">
            <FaCheckCircle className="text-8xl text-green-500 mx-auto drop-shadow-xl" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            You're In! <span className="text-green-500">🚀</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Your payment was successful. Your spot in the contest is now
            officially secured. It’s time to show them what you've got!
          </p>
        </div>

        {/* Transaction Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">
              Session Reference
            </p>
            <p className="text-xs font-mono text-gray-600 truncate max-w-[200px]">
              {sessionId || "ST_TEST_7712"}
            </p>
          </div>
          <div className="px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-xs font-bold border border-green-500/20">
            Verified by Stripe
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/dashboard/my-contests">
            <button className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-none">
              <FaRocket className="text-sm" />
              Go to Dashboard
            </button>
          </Link>
          <Link to="/">
            <button className="w-full py-4 bg-white text-gray-800 border-2 border-gray-100 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              Browse More
              <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>

        {/* Fun Footer */}
        <p className="mt-12 text-gray-400 text-sm italic">
          A confirmation email is on its way to your inbox.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
