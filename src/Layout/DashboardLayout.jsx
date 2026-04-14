// import React, { useContext, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router";
// import { FaRegCheckCircle, FaTrophy, FaBars } from "react-icons/fa";
// import { AiOutlineUser } from "react-icons/ai";
// import { GiTrophyCup } from "react-icons/gi";
// import {
//   MdCreateNewFolder,
//   MdOutlineAssignmentTurnedIn,
//   MdSettings,
// } from "react-icons/md";
// import { AuthContext } from "../Authprovide/Context/Context";
// import useRole from "../Hook/useRole";
// import { motion, AnimatePresence } from "framer-motion";

// const DashboardLayout = () => {
//   const { user } = useContext(AuthContext);
//   const { role, isLoading } = useRole();
//   const location = useLocation();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   if (isLoading || !role) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <span className="loading loading-spinner text-green-500 text-3xl"></span>
//       </div>
//     );
//   }

//   const menuItems = {
//     user: [
//       {
//         icon: <FaRegCheckCircle />,
//         label: "My Participated Contests",
//         path: "/dashboard/my-contest",
//       },
//       {
//         icon: <FaTrophy />,
//         label: "My Winning Contests",
//         path: "/dashboard/my-winning-contest",
//       },
//     ],
//     admin: [
//       {
//         icon: <MdOutlineAssignmentTurnedIn />,
//         label: "Approve Contests",
//         path: "/dashboard/contest-aprove",
//       },
//       {
//         icon: <AiOutlineUser />,
//         label: "Manage Users",
//         path: "/dashboard/all-user",
//       },
//     ],
//     creator: [
//       {
//         icon: <GiTrophyCup />,
//         label: "Set Winner",
//         path: "/dashboard/set-winner",
//       },
//       {
//         icon: <MdCreateNewFolder />,
//         label: "My Created Contests",
//         path: "/dashboard/my-created-contest",
//       },
//     ],
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Sidebar for desktop */}
//       <div className="hidden lg:flex flex-col w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl">
//         <div className="p-6 text-2xl font-bold text-green-400">
//           Contest Dashboard
//         </div>
//         <nav className="flex-1 px-4 space-y-2">
//           {menuItems[role]?.map((item, idx) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <Link
//                 key={idx}
//                 to={item.path}
//                 className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-green-500 text-white shadow-lg"
//                     : "hover:bg-green-500/20 hover:text-green-400"
//                 }`}
//               >
//                 <div
//                   className={`p-2 rounded-full ${isActive ? "bg-white text-green-500" : "bg-green-500/20"}`}
//                 >
//                   {item.icon}
//                 </div>
//                 <span className="font-medium">{item.label}</span>
//               </Link>
//             );
//           })}

//           <Link
//             to="/dashboard/settings"
//             className="flex items-center gap-3 p-3 rounded-xl mt-auto hover:bg-gray-700 hover:text-green-400 transition"
//           >
//             <MdSettings className="text-xl" />
//             <span className="font-medium">Settings</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Sidebar Overlay for Mobile */}
//       <AnimatePresence>
//         {sidebarOpen && (
//           <motion.div
//             initial={{ x: -300 }}
//             animate={{ x: 0 }}
//             exit={{ x: -300 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-y-0 left-0 w-64 z-50 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl lg:hidden"
//           >
//             <div className="p-6 flex justify-between items-center">
//               <span className="text-2xl font-bold text-green-400">
//                 Contest Dashboard
//               </span>
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="text-white text-2xl font-bold"
//               >
//                 &times;
//               </button>
//             </div>
//             <nav className="flex-1 px-4 space-y-2">
//               {menuItems[role]?.map((item, idx) => {
//                 const isActive = location.pathname === item.path;
//                 return (
//                   <Link
//                     key={idx}
//                     to={item.path}
//                     onClick={() => setSidebarOpen(false)}
//                     className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
//                       isActive
//                         ? "bg-green-500 text-white shadow-lg"
//                         : "hover:bg-green-500/20 hover:text-green-400"
//                     }`}
//                   >
//                     <div
//                       className={`p-2 rounded-full ${isActive ? "bg-white text-green-500" : "bg-green-500/20"}`}
//                     >
//                       {item.icon}
//                     </div>
//                     <span className="font-medium">{item.label}</span>
//                   </Link>
//                 );
//               })}
//               <Link
//                 to="/dashboard/settings"
//                 onClick={() => setSidebarOpen(false)}
//                 className="flex items-center gap-3 p-3 rounded-xl mt-auto hover:bg-gray-700 hover:text-green-400 transition"
//               >
//                 <MdSettings className="text-xl" />
//                 <span className="font-medium">Settings</span>
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Navbar */}
//         <div className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
//           <div className="flex items-center gap-4">
//             {/* Mobile Hamburger */}
//             <button
//               className="lg:hidden text-gray-700 text-2xl"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <FaBars />
//             </button>
//             <div className="text-xl font-semibold text-gray-700">Dashboard</div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="text-gray-500 font-medium hidden sm:block">
//               {user?.displayName}
//             </div>
//             <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
//               {user?.displayName?.[0] || "U"}
//             </div>
//           </div>
//         </div>

//         {/* Page Content */}
//         <motion.div
//           className="flex-1 overflow-auto p-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Outlet />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
// import React, { useContext, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router";

// import {
//   LayoutDashboard,
//   Users,
//   Trophy,
//   FolderKanban,
//   Settings,
//   LogOut,
//   Menu,
//   Bell,
//   UserRound,
// } from "lucide-react";

// import { AuthContext } from "../Authprovide/Context/Context";
// import useRole from "../Hook/useRole";

// const DashboardLayout = () => {
//   const { user } = useContext(AuthContext);
//   const { role, isLoading } = useRole();
//   const location = useLocation();

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <span className="loading loading-spinner text-primary"></span>
//       </div>
//     );
//   }

//   const menuItems = {
//     user: [
//       {
//         icon: <FolderKanban size={18} />,
//         label: "My Contests",
//         path: "/dashboard/my-contest",
//       },
//       {
//         icon: <Trophy size={18} />,
//         label: "Winning Contests",
//         path: "/dashboard/my-winning-contest",
//       },
//       {
//         icon: <UserRound size={18} />,
//         label: "Profile",
//         path: "/dashboard/profile",
//       },
//     ],

//     admin: [
//       {
//         icon: <LayoutDashboard size={18} />,
//         label: "Approve Contests",
//         path: "/dashboard/contest-aprove",
//       },
//       {
//         icon: <Users size={18} />,
//         label: "Manage Users",
//         path: "/dashboard/all-user",
//       },
//       {
//         icon: <UserRound size={18} />,
//         label: "Profile",
//         path: "/dashboard/profile",
//       },
//     ],

//     creator: [
//       {
//         icon: <Trophy size={18} />,
//         label: "Set Winner",
//         path: "/dashboard/set-winner",
//       },
//       {
//         icon: <FolderKanban size={18} />,
//         label: "My Created Contests",
//         path: "/dashboard/my-created-contest",
//       },
//       {
//         icon: <FolderKanban size={18} />,
//         label: "My Joining Contests",
//         path: "/dashboard/my-contest",
//       },
//       {
//         icon: <UserRound size={18} />,
//         label: "Profile",
//         path: "/dashboard/profile",
//       },
//     ],
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//       >
//         {/* Logo */}
//         <div className="p-6 border-b">
//           <Link to="/" className="text-xl font-bold text-indigo-600">
//             ContestHub
//           </Link>
//         </div>

//         {/* Menu */}
//         <nav className="flex flex-col p-4 gap-2">
//           {menuItems[role]?.map((item, index) => {
//             const active = location.pathname === item.path;

//             return (
//               <Link
//                 key={index}
//                 to={item.path}
//                 onClick={() => setSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
//                 ${
//                   active
//                     ? "bg-indigo-500 text-white shadow"
//                     : "hover:bg-indigo-50 text-gray-700"
//                 }`}
//               >
//                 {item.icon}
//                 {item.label}
//               </Link>
//             );
//           })}

//           <div className="border-t my-4"></div>

//           <Link
//             to="/dashboard/settings"
//             className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50"
//           >
//             <Settings size={18} />
//             Settings
//           </Link>

//           <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50">
//             <LogOut size={18} />
//             Logout
//           </button>
//         </nav>
//       </aside>

//       {/* Main Area */}
//       <div className="flex flex-col flex-1 overflow-hidden">
//         {/* Header */}
//         <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
//           <div className="flex items-center gap-4">
//             <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
//               <Menu size={22} />
//             </button>

//             <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <Bell className="text-gray-500" size={20} />

//             <div className="flex items-center gap-3">
//               <img
//                 src={user?.photoURL || "https://i.pravatar.cc/150"}
//                 className="w-9 h-9 rounded-full"
//               />

//               <div>
//                 <span className="font-medium text-gray-700 hidden sm:block">
//                   {user?.displayName}
//                 </span>
//                 <span>
//                   Role :{" "}
//                   <span className="text-sm font-bold text-green-500">
//                     {role}
//                   </span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  Trophy,
  FolderKanban,
  Settings,
  LogOut,
  Menu,
  Bell,
  UserRound,
  X,
  ChevronRight,
  PlusCircle,
} from "lucide-react";

import { AuthContext } from "../Authprovide/Context/Context";
import useRole from "../Hook/useRole";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext); // Added logOut from context
  const { role, isLoading } = useRole();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <span className="loading loading-ring loading-lg text-indigo-600"></span>
        <p className="mt-4 text-slate-500 font-bold tracking-widest animate-pulse">
          PREPARING ARENA
        </p>
      </div>
    );
  }

  const menuItems = {
    user: [
      {
        icon: <FolderKanban size={20} />,
        label: "My Contests",
        path: "/dashboard/my-contest",
      },
      {
        icon: <Trophy size={20} />,
        label: "Winning Contests",
        path: "/dashboard/my-winning-contest",
      },
      {
        icon: <UserRound size={20} />,
        label: "Profile",
        path: "/dashboard/profile",
      },
      {
        icon: <FolderKanban size={20} />,
        label: "Created Contests",
        path: "/dashboard/my-created-contest",
      },
    ],
    admin: [
      {
        icon: <LayoutDashboard size={20} />,
        label: "Approve Contests",
        path: "/dashboard/contest-aprove",
      },
      {
        icon: <Users size={20} />,
        label: "Manage Users",
        path: "/dashboard/all-user",
      },
      {
        icon: <UserRound size={20} />,
        label: "Profile",
        path: "/dashboard/profile",
      },
    ],
    creator: [
      {
        icon: <PlusCircle size={20} />,
        label: "Add Contest",
        path: "/dashboard/add-contest",
      },
      {
        icon: <Trophy size={20} />,
        label: "Set Winner",
        path: "/dashboard/set-winner",
      },
      {
        icon: <FolderKanban size={20} />,
        label: "Created Contests",
        path: "/dashboard/my-created-contest",
      },
      {
        icon: <UserRound size={20} />,
        label: "Profile",
        path: "/dashboard/profile",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* Sidebar Desktop & Mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#1E293B] text-slate-300 transform transition-all duration-300 ease-in-out lg:static lg:translate-x-0 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full relative">
          {/* Mobile Close Button */}
          <button
            className="lg:hidden absolute top-5 right-5 text-slate-400"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Sidebar Logo */}
          <div className="px-8 py-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Trophy className="text-white" size={24} />
            </div>
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-2xl font-black text-primary tracking-tighter italic">
                Contest<span className="text-white">Hub</span>
              </span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 space-y-1">
            <p className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Main Navigation
            </p>
            {menuItems[role]?.map((item, index) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between group px-4 py-3.5 rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-primary text-white shadow-xl shadow-indigo-900/20"
                      : "hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`${active ? "text-white" : "text-slate-400 group-hover:text-indigo-400"} transition-colors`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`${active ? "text-black" : "text-white"} font-bold transition-colors`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {active && <ChevronRight size={14} className="opacity-50" />}
                </Link>
              );
            })}

            <div className="pt-6 mt-6 border-t border-slate-800/50">
              <p className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Preferences
              </p>
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-slate-800 transition-all text-sm font-semibold"
              >
                <Settings size={20} className="text-slate-400" />
                Settings
              </Link>

              <button
                onClick={logOut}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all text-sm font-semibold mt-2"
              >
                <LogOut size={20} />
                Logout Account
              </button>
            </div>
          </nav>

          {/* Sidebar Footer User Card */}
          <div className="p-4">
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
              <p className="text-[10px] font-black text-indigo-400 uppercase mb-2">
                Current Role
              </p>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Accessing as{" "}
                <span className="text-white capitalize font-bold">{role}</span>{" "}
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Navbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                Overview
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Welcome back, {user?.displayName?.split(" ")[0]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-10 w-px bg-slate-100 mx-2"></div>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800 leading-none">
                  {user?.displayName}
                </p>
                <p className="text-[10px] font-black text-emerald-500 uppercase mt-1 tracking-tighter">
                  Verified {role}
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={user?.photoURL || "https://i.pravatar.cc/150"}
                  alt="avatar"
                  className="relative w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
