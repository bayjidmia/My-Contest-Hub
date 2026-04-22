// // import React, { useContext } from "react";
// // import { Link, useParams } from "react-router";
// // import useAxiosSecure from "../../Hook/useAxiosSecure";
// // import { useQuery } from "@tanstack/react-query";
// // import { IoIosMan } from "react-icons/io";
// // import LiveCountdown from "../../Component/LiveCountdown/LiveCountdown";
// // import SubmissionForm from "../Submissionform/Submissionform";
// // import { AuthContext } from "../../Authprovide/Context/Context";

// // const ContestDetails = () => {
// //   const { user } = useContext(AuthContext);
// //   const { id } = useParams();
// //   const axiosSecure = useAxiosSecure();

// //   const { data: payments } = useQuery({
// //     queryKey: ["payments"],
// //     queryFn: async () => {
// //       const res = await axiosSecure.get("/all-payments");
// //       return res.data;
// //     },
// //   });

// //   console.log("ttt", payments);

// //   console.log(payments);
// //   const { data: contest = {}, isLoading } = useQuery({
// //     queryKey: ["contest-details", id],
// //     queryFn: async () => {
// //       const res = await axiosSecure.get(`contest-details/${id}`);
// //       return res.data;
// //     },
// //   });

// //   const isExpired = contest?.deadline
// //     ? new Date(contest.deadline) < new Date()
// //     : false;

// //   if (isLoading || !payments || !contest._id) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <span className="loading loading-spinner text-error"></span>
// //       </div>
// //     );
// //   }
// //   const userPayment = payments?.find(
// //     (p) => p.userEmmail === user?.email && p.contestd == contest._id,
// //   );

// //   console.log(typeof contest._id, typeof payments[0].contestd);

// //   console.log("userPayment", userPayment);

// //   console.log(userPayment);

// //   return (
// //     <div className="max-w-6xl mx-auto p-4">
// //       {/* Contest Info */}
// //       <div className="flex flex-col lg:flex-row gap-6">
// //         <div className="lg:w-1/2">
// //           <img
// //             src={contest.image}
// //             alt={contest.contestName}
// //             className="w-full h-auto rounded-lg object-cover"
// //           />
// //         </div>
// //         <div className="lg:w-1/2 flex flex-col gap-4">
// //           <div className="text-xl font-bold">
// //             <p>
// //               <span className="underline">Contest Name:</span>{" "}
// //               {contest.contestName}
// //             </p>
// //             <p>
// //               <span className="underline">Contest Type:</span>{" "}
// //               {contest.contestType}
// //             </p>
// //           </div>

// //           <div className="mt-3">
// //             <h2 className="text-2xl font-extrabold mb-2">Creator Info:</h2>
// //             <p>
// //               <span className="underline font-semibold">Name:</span>{" "}
// //               {contest.creatorName}
// //             </p>
// //             <p>
// //               <span className="underline font-semibold">Email:</span>{" "}
// //               {contest.creatorEmail}
// //             </p>
// //           </div>

// //           <div className="mt-3">
// //             <p>
// //               <span className="underline font-semibold">Contest Ends:</span>{" "}
// //               {contest.deadline ? (
// //                 <LiveCountdown targetDate={contest.deadline} />
// //               ) : (
// //                 <span className="text-gray-400">Loading...</span>
// //               )}
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Participants */}
// //       <div className="flex justify-start items-center gap-2 mt-4 text-xl font-bold">
// //         <IoIosMan />
// //         <p className="text-gray-500">
// //           {contest.paymentStatus === "paid"
// //             ? contest.participantsCount + 1
// //             : contest.participantsCount}
// //         </p>
// //       </div>

// //       {/* Contest Description */}
// //       <div className="mt-6 text-justify p-2">
// //         <h2 className="font-bold text-xl underline mb-2">
// //           Contest Description:
// //         </h2>
// //         <p>{contest.description}</p>
// //       </div>

// //       {/* Entry Fee & Prize */}
// //       <div className="flex flex-col sm:flex-row justify-around items-center gap-4 border border-gray-400 p-4 my-4 rounded-lg">
// //         <div>
// //           <p className="font-bold">Entry Fee:</p>
// //           <p className="text-gray-500">$ {contest.entryFee}</p>
// //         </div>
// //         <div>
// //           <p className="font-bold">Prize Money:</p>
// //           <p className="text-gray-500">$ {contest.prizeMoney}</p>
// //         </div>
// //       </div>

// //       <div className="flex flex-col items-center my-5 gap-3">
// //         <h2 className="font-bold text-xl">Take a Challenge</h2>

// //         {user?.email === contest.creatorEmail ? (
// //           <p className="text-green-600 font-semibold">It's your contest</p>
// //         ) : isExpired ? (
// //           <button className="btn btn-disabled btn-sm">Ended</button>
// //         ) : contest?.winner?.name ? (
// //           <p className="text-red-500 font-semibold">Winner already declared</p>
// //         ) : userPayment?.paymentstatus === "paid" ? (
// //           <SubmissionForm contestId={contest._id} />
// //         ) : (
// //           <Link to={`/dashboard/payment/${contest._id}`}>
// //             <button className="btn btn-primary btn-sm text-black">Pay</button>
// //           </Link>
// //         )}
// //       </div>

// //       {/* Winner Section */}
// //       <div className="my-8 text-center">
// //         {contest.winner && contest.winner.name ? (
// //           <>
// //             <h2 className="text-3xl font-bold mb-4">
// //               Winner: {contest.winner.name}
// //             </h2>
// //             {contest.winner.photo ? (
// //               <img
// //                 className="mx-auto w-32 h-32 rounded-full object-cover"
// //                 src={contest.winner.photo}
// //                 alt={contest.winner.name}
// //               />
// //             ) : (
// //               <p className="text-gray-500">No photo available</p>
// //             )}
// //           </>
// //         ) : (
// //           <p className="text-gray-400 font-semibold">
// //             Winner will be declared by the creator
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //     // <div className="max-w-7xl mx-auto p-6 lg:py-12 bg-gray-50/50">
// //     //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
// //     //     {/* Left Side: Content & Description Card */}
// //     //     <div className="lg:col-span-2 space-y-10">
// //     //       {/* Hero Image with Overlay */}
// //     //       <div className="relative group overflow-hidden rounded-3xl shadow-2xl bg-black">
// //     //         <img
// //     //           src={contest.image}
// //     //           alt={contest.contestName}
// //     //           className="w-full h-[400px] lg:h-[550px] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
// //     //         />
// //     //         <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
// //     //           <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter mb-3 inline-block">
// //     //             {contest.contestType}
// //     //           </span>
// //     //           <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
// //     //             {contest.contestName}
// //     //           </h1>
// //     //         </div>
// //     //       </div>

// //     //       {/* BIG DESCRIPTION CARD */}
// //     //       <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
// //     //         <div className="flex">
// //     //           {/* Decorative Sidebar Accent */}
// //     //           <div className="w-2 bg-gradient-to-b from-primary via-yellow-400 to-orange-500"></div>

// //     //           <div className="p-8 md:p-12 w-full">
// //     //             <div className="flex items-center justify-between mb-8">
// //     //               <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
// //     //                 Contest <span className="text-primary italic">Mission</span>
// //     //               </h2>
// //     //               <div className="flex items-center gap-2 text-gray-400 font-semibold">
// //     //                 <IoIosMan className="text-2xl text-primary" />
// //     //                 <span>
// //     //                   {contest.paymentStatus === "paid"
// //     //                     ? contest.participantsCount + 1
// //     //                     : contest.participantsCount}{" "}
// //     //                   Joined
// //     //                 </span>
// //     //               </div>
// //     //             </div>

// //     //             <div className="prose prose-lg max-w-none">
// //     //               <p className="text-gray-600 leading-relaxed text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
// //     //                 {contest.description}
// //     //               </p>
// //     //             </div>

// //     //             {/* Winner Spotlight Inside Card */}
// //     //             {contest.winner?.name && (
// //     //               <div className="mt-12 p-6 rounded-2xl bg-gray-900 text-white flex flex-col md:flex-row items-center gap-6">
// //     //                 <div className="relative">
// //     //                   <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-75"></div>
// //     //                   <img
// //     //                     className="relative w-20 h-20 rounded-full object-cover border-2 border-white"
// //     //                     src={contest.winner.photo}
// //     //                     alt="winner"
// //     //                   />
// //     //                 </div>
// //     //                 <div>
// //     //                   <p className="text-yellow-400 uppercase text-xs font-black tracking-widest">
// //     //                     Reigning Champion
// //     //                   </p>
// //     //                   <h3 className="text-2xl font-bold">
// //     //                     {contest.winner.name}
// //     //                   </h3>
// //     //                 </div>
// //     //               </div>
// //     //             )}
// //     //           </div>
// //     //         </div>
// //     //       </div>
// //     //     </div>

// //     //     {/* Right Side: Gorgeous Sticky Card */}
// //     //     <div className="lg:col-span-1">
// //     //       <div className="sticky top-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 overflow-hidden">
// //     //         {/* Animated Background Decor */}
// //     //         <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

// //     //         {/* GORGEOUS TIMER SECTION */}
// //     //         <div className="bg-red-50 p-4 rounded-xl mb-8 ">
// //     //           <p className="text-xs font-bold text-red-500 uppercase mb-2 text-center">
// //     //             Time Remaining
// //     //           </p>
// //     //           <div className="text-center font-mono text-xl font-bold text-red-600">
// //     //             {contest.deadline ? (
// //     //               <LiveCountdown targetDate={contest.deadline} />
// //     //             ) : (
// //     //               "Calculating..."
// //     //             )}
// //     //           </div>
// //     //         </div>
// //     //         {/* Prize & Fee Row */}
// //     //         <div className="grid grid-cols-2 gap-4 mb-8">
// //     //           <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
// //     //             <p className="text-[10px] font-bold text-gray-400 uppercase">
// //     //               Grand Prize
// //     //             </p>
// //     //             <p className="text-2xl font-black text-green-600">
// //     //               ${contest.prizeMoney}
// //     //             </p>
// //     //           </div>
// //     //           <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
// //     //             <p className="text-[10px] font-bold text-gray-400 uppercase">
// //     //               Entry Fee
// //     //             </p>
// //     //             <p className="text-2xl font-black text-gray-900">
// //     //               ${contest.entryFee}
// //     //             </p>
// //     //           </div>
// //     //         </div>

// //     //         {/* CTA Button */}
// //     //         <div className="space-y-4 relative z-10">
// //     //           {user?.email === contest.creatorEmail ? (
// //     //             <div className="text-center p-4 rounded-2xl bg-blue-50 text-blue-600 font-bold border border-blue-100">
// //     //               👑 Host View
// //     //             </div>
// //     //           ) : isExpired ? (
// //     //             <button className="w-full py-5 bg-gray-100 text-gray-400 rounded-2xl font-black uppercase tracking-widest cursor-not-allowed">
// //     //               Entry Closed
// //     //             </button>
// //     //           ) : (
// //     //             <Link to={`/dashboard/payment/${contest._id}`}>
// //     //               <button className="group w-full py-5 bg-primary hover:bg-black text-black hover:text-white rounded-2xl font-black text-lg transition-all duration-500 shadow-[0_10px_20px_rgba(251,191,36,0.3)] hover:shadow-none flex items-center justify-center gap-3">
// //     //                 JOIN CHALLENGE
// //     //                 <span className="group-hover:translate-x-2 transition-transform duration-300">
// //     //                   →
// //     //                 </span>
// //     //               </button>
// //     //             </Link>
// //     //           )}
// //     //         </div>

// //     //         {/* Organizer Footer */}
// //     //         <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-4">
// //     //           <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-200 to-gray-50 border border-white shadow-sm flex items-center justify-center font-black text-gray-500">
// //     //             {contest.creatorName?.charAt(0)}
// //     //           </div>
// //     //           <div>
// //     //             <p className="text-[10px] font-bold text-gray-400 uppercase">
// //     //               Curated by
// //     //             </p>
// //     //             <p className="text-sm font-black text-gray-800">
// //     //               {contest.creatorName}
// //     //             </p>
// //     //           </div>
// //     //         </div>
// //     //       </div>
// //     //     </div>
// //     //   </div>
// //     // </div>
// //   );
// // };

// // export default ContestDetails;
// import React, { useContext } from "react";
// import { Link, useParams } from "react-router";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { IoIosMan } from "react-icons/io";
// import { MdEmojiEvents, MdOutlineTimer, MdPayments } from "react-icons/md";

// import LiveCountdown from "../../Component/LiveCountdown/LiveCountdown";
// import SubmissionForm from "../Submissionform/Submissionform";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import { FaUsersCog } from "react-icons/fa";

// const ContestDetails = () => {
//   const { user } = useContext(AuthContext);
//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure();

//   // Fetch all payments to check status
//   const { data: payments = [] } = useQuery({
//     queryKey: ["payments"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/all-payments");
//       return res.data;
//     },
//   });

//   // Fetch contest details
//   const { data: contest = {}, isLoading } = useQuery({
//     queryKey: ["contest-details", id],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`contest-details/${id}`);
//       return res.data;
//     },
//   });

//   const isExpired = contest?.deadline
//     ? new Date(contest.deadline) < new Date()
//     : false;

//   // Check if current user has paid for THIS contest
//   const userPayment = payments?.find(
//     (p) => p.userEmmail === user?.email && p.contestd === contest._id,
//   );

//   if (isLoading || !contest._id) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen gap-4">
//         <span className="loading loading-infinity loading-lg text-primary"></span>
//         <p className="text-gray-400 font-bold animate-pulse uppercase tracking-widest text-xs">
//           Loading Arena...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto  lg:py-12  min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* LEFT SIDE: MAIN CONTENT */}
//         <div className="lg:col-span-2 space-y-10">
//           {/* 1. Hero Image with Overlay */}
//           <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-black">
//             <img
//               src={contest.image}
//               alt={contest.contestName}
//               className="w-full h-[400px] lg:h-[550px] object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 right-0 p-10">
//               <span className="bg-primary text-black px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-lg">
//                 {contest.contestType}
//               </span>
//               <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
//                 {contest.contestName}
//               </h1>
//             </div>
//           </div>

//           {/* 2. Winner Hall of Fame Section */}
//           <div className="relative overflow-hidden rounded-[2.5rem] p-1 shadow-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">
//             <div className="bg-white rounded-[2.3rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
//               {/* Decorative Watermark */}
//               <div className="absolute -right-4 -bottom-4 opacity-[0.03] select-none pointer-events-none">
//                 <h2 className="text-[100px] font-black leading-none uppercase">
//                   Champion
//                 </h2>
//               </div>

//               {contest.winner && contest.winner.name ? (
//                 <>
//                   <div className="flex flex-col md:flex-row items-center gap-8 z-10">
//                     <div className="relative group">
//                       <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur opacity-40"></div>
//                       <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden">
//                         <img
//                           className="w-full h-full object-cover"
//                           src={contest.winner.photo}
//                           alt={contest.winner.name}
//                         />
//                       </div>
//                       <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white">
//                         🏆
//                       </div>
//                     </div>
//                     <div className="text-center md:text-left">
//                       <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-widest mb-3">
//                         Contest Champion
//                       </span>
//                       <h2 className="text-4xl font-black text-gray-900 uppercase">
//                         {contest.winner.name}
//                       </h2>
//                       <p className="text-gray-500 font-medium mt-1">
//                         Winning submission claimed the grand prize.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="bg-gray-900 p-6 rounded-3xl text-center min-w-[160px] z-10 shadow-xl">
//                     <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-1">
//                       Prize Awarded
//                     </p>
//                     <p className="text-3xl font-black text-white">
//                       ${contest.prizeMoney}
//                     </p>
//                   </div>
//                 </>
//               ) : (
//                 <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-4">
//                   <div className="flex items-center gap-6">
//                     <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
//                       <MdEmojiEvents className="text-3xl text-gray-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-black text-gray-400 italic">
//                         Selection in Progress
//                       </h3>
//                       <p className="text-gray-400 font-medium text-sm">
//                         Winner will be announced soon.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-500 font-black text-[10px] uppercase">
//                     <span className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//                     </span>
//                     Under Evaluation
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* 3. Description Card */}
//           <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
//             <div className="flex">
//               <div className="w-3 bg-gradient-to-b from-primary via-yellow-400 to-orange-500"></div>
//               <div className="p-8 md:p-12 w-full">
//                 <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-6">
//                   <h2 className="text-3xl font-black text-gray-900 tracking-tight">
//                     Contest <span className="text-primary italic">Mission</span>
//                   </h2>
//                   <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl text-gray-500 font-bold">
//                     <IoIosMan className="text-2xl text-primary" />
//                     <span>{contest.participantsCount || 0} Joined</span>
//                   </div>
//                 </div>
//                 <div className="prose prose-lg max-w-none">
//                   <p className="text-gray-600 leading-relaxed text-lg first-letter:text-6xl first-letter:font-black first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
//                     {contest.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: STICKY SIDEBAR */}
//         <div className="lg:col-span-1">
//           <div className="sticky top-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-8 space-y-8 overflow-hidden">
//             {/* Timer Section */}
//             <div className="relative overflow-hidden bg-rose-50 p-6 rounded-3xl border border-rose-100 text-center">
//               <div className="relative z-10">
//                 <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
//                   <MdOutlineTimer className="text-lg" /> Closing In
//                 </p>
//                 <div className="text-3xl font-black text-rose-600 font-mono">
//                   {contest.deadline ? (
//                     <LiveCountdown targetDate={contest.deadline} />
//                   ) : (
//                     "00:00:00"
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Price Cards */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-100 text-center">
//                 <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">
//                   Grand Prize
//                 </p>
//                 <p className="text-3xl font-black text-emerald-700">
//                   ${contest.prizeMoney}
//                 </p>
//               </div>
//               <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100 text-center">
//                 <p className="text-[10px] font-black text-gray-400 uppercase mb-1">
//                   Entry Fee
//                 </p>
//                 <p className="text-3xl font-black text-gray-900">
//                   ${contest.entryFee}
//                 </p>
//               </div>
//             </div>

//             {/* User Access Control / CTA */}
//             <div className="space-y-4 pt-4">
//               <h3 className="text-center font-black text-gray-800 uppercase text-xs tracking-widest">
//                 Action Center
//               </h3>

//               {user?.email === contest.creatorEmail ? (
//                 <div className="text-center p-5 rounded-2xl bg-indigo-50 text-indigo-600 font-black border border-indigo-100 flex items-center justify-center gap-3">
//                   <FaUsersCog className="text-xl" /> ADMINISTRATOR VIEW
//                 </div>
//               ) : isExpired ? (
//                 <button className="w-full py-5 bg-gray-100 text-gray-400 rounded-2xl font-black uppercase tracking-widest cursor-not-allowed border-2 border-dashed border-gray-200">
//                   Arena Closed
//                 </button>
//               ) : contest?.winner?.name ? (
//                 <div className="text-center p-5 rounded-2xl bg-rose-50 text-rose-600 font-black border border-rose-100">
//                   Tournament Completed
//                 </div>
//               ) : userPayment?.paymentstatus === "paid" ? (
//                 <SubmissionForm contestId={contest._id} />
//               ) : (
//                 <Link to={`/dashboard/payment/${contest._id}`}>
//                   <button className="group w-full py-5 bg-primary hover:bg-black text-black hover:text-white rounded-2xl font-black text-xl transition-all duration-500 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
//                     <MdPayments className="text-2xl" /> ENTER ARENA
//                   </button>
//                 </Link>
//               )}
//             </div>

//             {/* Organizer Profile */}
//             <div className="pt-8 border-t border-gray-50 flex items-center gap-4">
//               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-gray-200">
//                 {contest.creatorName?.charAt(0)}
//               </div>
//               <div>
//                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
//                   Host Official
//                 </p>
//                 <p className="text-lg font-black text-gray-900">
//                   {contest.creatorName}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContestDetails;
import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoIosMan } from "react-icons/io";
import { MdEmojiEvents, MdOutlineTimer, MdPayments } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";

import LiveCountdown from "../../Component/LiveCountdown/LiveCountdown";
import SubmissionForm from "../Submissionform/Submissionform";
import { AuthContext } from "../../Authprovide/Context/Context";

const ContestDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  // Fetch all payments to check status
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-payments");
      return res.data;
    },
  });

  // Fetch contest details
  const { data: contest = {}, isLoading } = useQuery({
    queryKey: ["contest-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`contest-details/${id}`);
      return res.data;
    },
  });

  const isExpired = contest?.deadline
    ? new Date(contest.deadline) < new Date()
    : false;

  const userPayment = payments?.find(
    (p) => p.userEmmail === user?.email && p.contestd === contest._id,
  );

  if (isLoading || !contest._id) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-white dark:bg-[#0F172A]">
        <span className="loading loading-infinity loading-lg text-primary"></span>
        <p className="text-gray-400 dark:text-slate-500 font-bold animate-pulse uppercase tracking-widest text-xs">
          Loading Arena...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto lg:py-12 min-h-screen transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-4 lg:p-0">
        {/* LEFT SIDE: MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* 1. Hero Image with Overlay */}
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-black border dark:border-slate-800">
            <img
              src={contest.image}
              alt={contest.contestName}
              className="w-full h-[400px] lg:h-[550px] object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="bg-primary text-black px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-lg">
                {contest.contestType}
              </span>
              <h1 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                {contest.contestName}
              </h1>
            </div>
          </div>

          {/* 2. Winner Hall of Fame Section */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-1 shadow-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">
            <div className="bg-white dark:bg-slate-900 rounded-[2.3rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none">
                <h2 className="text-[100px] font-black leading-none uppercase text-slate-900 dark:text-white">
                  Champion
                </h2>
              </div>

              {contest.winner && contest.winner.name ? (
                <>
                  <div className="flex flex-col md:flex-row items-center gap-8 z-10">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur opacity-40"></div>
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={contest.winner.photo}
                          alt={contest.winner.name}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white dark:border-slate-800">
                        🏆
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-3">
                        Contest Champion
                      </span>
                      <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase">
                        {contest.winner.name}
                      </h2>
                      <p className="text-gray-500 dark:text-slate-400 font-medium mt-1">
                        Winning submission claimed the grand prize.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-900 dark:bg-black p-6 rounded-3xl text-center min-w-[160px] z-10 shadow-xl border dark:border-slate-800">
                    <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-1">
                      Prize Awarded
                    </p>
                    <p className="text-3xl font-black text-white">
                      ${contest.prizeMoney}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-4">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700">
                      <MdEmojiEvents className="text-3xl text-gray-300 dark:text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-400 dark:text-slate-600 italic">
                        Selection in Progress
                      </h3>
                      <p className="text-gray-400 dark:text-slate-500 font-medium text-sm">
                        Winner will be announced soon.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 font-black text-[10px] uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Under Evaluation
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. Description Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
            <div className="flex">
              <div className="w-3 bg-gradient-to-b from-primary via-yellow-400 to-orange-500"></div>
              <div className="p-8 md:p-12 w-full">
                <div className="flex items-center justify-between mb-8 border-b border-gray-50 dark:border-slate-800 pb-6">
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    Contest <span className="text-primary italic">Mission</span>
                  </h2>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-slate-800 rounded-2xl text-gray-500 dark:text-slate-400 font-bold">
                    <IoIosMan className="text-2xl text-primary" />
                    <span>{contest.participantsCount || 0} Joined</span>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-lg first-letter:text-6xl first-letter:font-black first-letter:text-gray-900 dark:first-letter:text-white first-letter:mr-3 first-letter:float-left">
                    {contest.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: STICKY SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-2xl p-8 space-y-8 overflow-hidden transition-colors duration-300">
            {/* Timer Section */}
            <div className="relative overflow-hidden bg-rose-50 dark:bg-rose-950/20 p-6 rounded-3xl border border-rose-100 dark:border-rose-900/30 text-center">
              <p className="text-[10px] font-black text-rose-500 dark:text-rose-400 uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
                <MdOutlineTimer className="text-lg" /> Closing In
              </p>
              <div className="text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">
                {contest.deadline ? (
                  <LiveCountdown targetDate={contest.deadline} />
                ) : (
                  "00:00:00"
                )}
              </div>
            </div>

            {/* Price Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 p-5 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 text-center">
                <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase mb-1">
                  Grand Prize
                </p>
                <p className="text-3xl font-black text-emerald-700 dark:text-emerald-500">
                  ${contest.prizeMoney}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-5 rounded-3xl border border-gray-100 dark:border-slate-700 text-center">
                <p className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-1">
                  Entry Fee
                </p>
                <p className="text-3xl font-black text-gray-900 dark:text-white">
                  ${contest.entryFee}
                </p>
              </div>
            </div>

            {/* Action Center */}
            <div className="space-y-4 pt-4">
              <h3 className="text-center font-black text-gray-800 dark:text-slate-400 uppercase text-xs tracking-widest">
                Action Center
              </h3>
              {user?.email === contest.creatorEmail ? (
                <div className="text-center p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-black border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center gap-3">
                  <FaUsersCog className="text-xl" /> ADMINISTRATOR VIEW
                </div>
              ) : isExpired ? (
                <button className="w-full py-5 bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-slate-600 rounded-2xl font-black uppercase tracking-widest cursor-not-allowed border-2 border-dashed border-gray-200 dark:border-slate-700">
                  Arena Closed
                </button>
              ) : contest?.winner?.name ? (
                <div className="text-center p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 font-black border border-rose-100 dark:border-rose-900/30">
                  Tournament Completed
                </div>
              ) : userPayment?.paymentstatus === "paid" ? (
                <SubmissionForm contestId={contest._id} />
              ) : (
                <Link to={`/dashboard/payment/${contest._id}`}>
                  <button className="group w-full py-5 bg-primary hover:bg-black dark:hover:bg-white text-black dark:hover:text-black rounded-2xl font-black text-xl transition-all duration-500 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 border border-transparent">
                    <MdPayments className="text-2xl" /> ENTER ARENA
                  </button>
                </Link>
              )}
            </div>

            {/* Organizer Profile */}
            <div className="pt-8 border-t border-gray-50 dark:border-slate-800 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center text-white font-black text-xl shadow-lg">
                {contest.creatorName?.charAt(0)}
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                  Host Official
                </p>
                <p className="text-lg font-black text-gray-900 dark:text-white">
                  {contest.creatorName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
