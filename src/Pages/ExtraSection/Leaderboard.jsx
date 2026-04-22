// import React from "react";
// import {
//   Trophy,
//   Medal,
//   Crown,
//   ArrowUp,
//   ArrowDown,
//   Minus,
//   Search,
// } from "lucide-react";

// const Leaderboard = () => {
//   const champions = [
//     {
//       rank: 1,
//       name: "Alex Rivera",
//       score: 12540,
//       winRate: "94%",
//       avatar: "https://i.pravatar.cc/150?u=1",
//       trend: "up",
//     },
//     {
//       rank: 2,
//       name: "Sarah Chen",
//       score: 11200,
//       winRate: "89%",
//       avatar: "https://i.pravatar.cc/150?u=2",
//       trend: "up",
//     },
//     {
//       rank: 3,
//       name: "Mike Ross",
//       score: 10850,
//       winRate: "85%",
//       avatar: "https://i.pravatar.cc/150?u=3",
//       trend: "down",
//     },
//     {
//       rank: 4,
//       name: "Elena Gilbert",
//       score: 9400,
//       winRate: "82%",
//       avatar: "https://i.pravatar.cc/150?u=4",
//       trend: "steady",
//     },
//     {
//       rank: 5,
//       name: "David Miller",
//       score: 8900,
//       winRate: "78%",
//       avatar: "https://i.pravatar.cc/150?u=5",
//       trend: "up",
//     },
//     {
//       rank: 6,
//       name: "Sophia Wick",
//       score: 8200,
//       winRate: "75%",
//       avatar: "https://i.pravatar.cc/150?u=6",
//       trend: "down",
//     },
//   ];

//   const getTrendIcon = (trend) => {
//     if (trend === "up")
//       return <ArrowUp size={16} className="text-emerald-500" />;
//     if (trend === "down")
//       return <ArrowDown size={16} className="text-rose-500" />;
//     return <Minus size={16} className="text-slate-500" />;
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* HEADER SECTION */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-4">
//               <Crown size={12} /> Global Rankings
//             </div>
//             <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">
//               Hall of <span className="text-indigo-600 italic">Prestige</span>
//             </h1>
//           </div>

//           <div className="relative group">
//             <Search
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
//               size={18}
//             />
//             <input
//               type="text"
//               placeholder="Search Competitor..."
//               className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-bold text-sm"
//             />
//           </div>
//         </div>

//         {/* PODIUM SECTION (TOP 3) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
//           {/* Silver - Rank 2 */}
//           <div className="order-2 md:order-1 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative overflow-hidden group">
//             <div className="absolute top-0 inset-x-0 h-2 bg-slate-300"></div>
//             <div className="relative mb-6 inline-block">
//               <img
//                 src={champions[1].avatar}
//                 className="w-24 h-24 rounded-full border-4 border-slate-100 shadow-lg object-cover"
//                 alt=""
//               />
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-black border-4 border-white">
//                 2
//               </div>
//             </div>
//             <h3 className="text-xl font-black text-slate-800">
//               {champions[1].name}
//             </h3>
//             <p className="text-indigo-600 font-black text-2xl mt-2">
//               {champions[1].score.toLocaleString()}
//             </p>
//             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
//               Arena Points
//             </p>
//           </div>

//           {/* Gold - Rank 1 */}
//           <div className="order-1 md:order-2 bg-[#0F172A] p-10 rounded-[3rem] shadow-2xl text-center relative overflow-hidden transform md:-translate-y-6 border-b-8 border-indigo-500">
//             <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 to-yellow-600"></div>
//             <div className="relative mb-6 inline-block">
//               <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-400 animate-bounce">
//                 <Crown size={40} />
//               </div>
//               <img
//                 src={champions[0].avatar}
//                 className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-2xl object-cover"
//                 alt=""
//               />
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-black border-4 border-[#0F172A]">
//                 1
//               </div>
//             </div>
//             <h3 className="text-2xl font-black text-white">
//               {champions[0].name}
//             </h3>
//             <p className="text-indigo-400 font-black text-3xl mt-2">
//               {champions[0].score.toLocaleString()}
//             </p>
//             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">
//               Grandmaster Status
//             </p>
//           </div>

//           {/* Bronze - Rank 3 */}
//           <div className="order-3 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative overflow-hidden">
//             <div className="absolute top-0 inset-x-0 h-2 bg-orange-400"></div>
//             <div className="relative mb-6 inline-block">
//               <img
//                 src={champions[2].avatar}
//                 className="w-24 h-24 rounded-full border-4 border-orange-50 shadow-lg object-cover"
//                 alt=""
//               />
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black border-4 border-white">
//                 3
//               </div>
//             </div>
//             <h3 className="text-xl font-black text-slate-800">
//               {champions[2].name}
//             </h3>
//             <p className="text-indigo-600 font-black text-2xl mt-2">
//               {champions[2].score.toLocaleString()}
//             </p>
//             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
//               Elite Contender
//             </p>
//           </div>
//         </div>

//         {/* TABLE LIST SECTION */}
//         <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-slate-50/50 border-b border-slate-100">
//                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
//                     Rank
//                   </th>
//                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
//                     Competitor
//                   </th>
//                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
//                     Trend
//                   </th>
//                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
//                     Win Rate
//                   </th>
//                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
//                     Points
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-50">
//                 {champions.slice(3).map((player) => (
//                   <tr
//                     key={player.rank}
//                     className="group hover:bg-slate-50/80 transition-colors"
//                   >
//                     <td className="px-8 py-6">
//                       <span className="text-sm font-black text-slate-400 group-hover:text-indigo-600 transition-colors">
//                         #{player.rank}
//                       </span>
//                     </td>
//                     <td className="px-8 py-6">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={player.avatar}
//                           className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all"
//                           alt=""
//                         />
//                         <span className="font-bold text-slate-700">
//                           {player.name}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-8 py-6">
//                       <div className="flex justify-center">
//                         {getTrendIcon(player.trend)}
//                       </div>
//                     </td>
//                     <td className="px-8 py-6 text-center">
//                       <span className="px-3 py-1 rounded-lg bg-slate-100 text-[10px] font-black text-slate-600">
//                         {player.winRate}
//                       </span>
//                     </td>
//                     <td className="px-8 py-6 text-right">
//                       <span className="font-black text-slate-900">
//                         {player.score.toLocaleString()}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Footer of Table */}
//           <div className="p-6 bg-slate-50/50 text-center">
//             <button className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] hover:text-indigo-800 transition-colors">
//               Load Full Rankings (2,450+)
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;
import React from "react";
import {
  Trophy,
  Medal,
  Crown,
  ArrowUp,
  ArrowDown,
  Minus,
  Search,
} from "lucide-react";

const Leaderboard = () => {
  const champions = [
    {
      rank: 1,
      name: "Alex Rivera",
      score: 12540,
      winRate: "94%",
      avatar: "https://i.pravatar.cc/150?u=1",
      trend: "up",
    },
    {
      rank: 2,
      name: "Sarah Chen",
      score: 11200,
      winRate: "89%",
      avatar: "https://i.pravatar.cc/150?u=2",
      trend: "up",
    },
    {
      rank: 3,
      name: "Mike Ross",
      score: 10850,
      winRate: "85%",
      avatar: "https://i.pravatar.cc/150?u=3",
      trend: "down",
    },
    {
      rank: 4,
      name: "Elena Gilbert",
      score: 9400,
      winRate: "82%",
      avatar: "https://i.pravatar.cc/150?u=4",
      trend: "steady",
    },
    {
      rank: 5,
      name: "David Miller",
      score: 8900,
      winRate: "78%",
      avatar: "https://i.pravatar.cc/150?u=5",
      trend: "up",
    },
    {
      rank: 6,
      name: "Sophia Wick",
      score: 8200,
      winRate: "75%",
      avatar: "https://i.pravatar.cc/150?u=6",
      trend: "down",
    },
  ];

  const getTrendIcon = (trend) => {
    if (trend === "up")
      return <ArrowUp size={16} className="text-emerald-500" />;
    if (trend === "down")
      return <ArrowDown size={16} className="text-rose-500" />;
    return <Minus size={16} className="text-slate-500" />;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] py-12 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <Crown size={12} /> Global Rankings
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Hall of <span className="text-indigo-600 italic">Prestige</span>
            </h1>
          </div>

          <div className="relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search Competitor..."
              className="pl-12 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:text-white transition-all font-bold text-sm"
            />
          </div>
        </div>

        {/* PODIUM SECTION (TOP 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
          {/* Silver - Rank 2 */}
          <div className="order-2 md:order-1 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-2 bg-slate-300 dark:bg-slate-500"></div>
            <div className="relative mb-6 inline-block">
              <img
                src={champions[1].avatar}
                className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-700 shadow-lg object-cover"
                alt=""
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-black border-4 border-white dark:border-slate-800">
                2
              </div>
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white">
              {champions[1].name}
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-black text-2xl mt-2">
              {champions[1].score.toLocaleString()}
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
              Arena Points
            </p>
          </div>

          {/* Gold - Rank 1 */}
          <div className="order-1 md:order-2 bg-[#0F172A] dark:bg-indigo-950 p-10 rounded-[3rem] shadow-2xl text-center relative overflow-hidden transform md:-translate-y-6 border-b-8 border-indigo-500 transition-transform duration-300">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 to-yellow-600"></div>
            <div className="relative mb-6 inline-block">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-400 animate-bounce">
                <Crown size={40} />
              </div>
              <img
                src={champions[0].avatar}
                className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-2xl object-cover"
                alt=""
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-black border-4 border-[#0F172A] dark:border-indigo-950">
                1
              </div>
            </div>
            <h3 className="text-2xl font-black text-white">
              {champions[0].name}
            </h3>
            <p className="text-indigo-400 font-black text-3xl mt-2">
              {champions[0].score.toLocaleString()}
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">
              Grandmaster Status
            </p>
          </div>

          {/* Bronze - Rank 3 */}
          <div className="order-3 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-orange-400"></div>
            <div className="relative mb-6 inline-block">
              <img
                src={champions[2].avatar}
                className="w-24 h-24 rounded-full border-4 border-orange-50 dark:border-orange-900 shadow-lg object-cover"
                alt=""
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black border-4 border-white dark:border-slate-800">
                3
              </div>
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white">
              {champions[2].name}
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-black text-2xl mt-2">
              {champions[2].score.toLocaleString()}
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
              Elite Contender
            </p>
          </div>
        </div>

        {/* TABLE LIST SECTION */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Rank
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Competitor
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                    Trend
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                    Win Rate
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-700/50">
                {champions.slice(3).map((player) => (
                  <tr
                    key={player.rank}
                    className="group hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="px-8 py-6">
                      <span className="text-sm font-black text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        #{player.rank}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={player.avatar}
                          className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all"
                          alt=""
                        />
                        <span className="font-bold text-slate-700 dark:text-slate-200">
                          {player.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex justify-center">
                        {getTrendIcon(player.trend)}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-[10px] font-black text-slate-600 dark:text-slate-300">
                        {player.winRate}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="font-black text-slate-900 dark:text-white">
                        {player.score.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer of Table */}
          <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 text-center border-t border-slate-100 dark:border-slate-700">
            <button className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
              Load Full Rankings (2,450+)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
