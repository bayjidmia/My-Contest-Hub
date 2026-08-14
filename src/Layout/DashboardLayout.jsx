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
  const { user, logout } = useContext(AuthContext); // Added logout from context
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

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from context
    } catch (error) {
      console.error("Error occurred while logging out:", error);
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC]  ">
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
                onClick={handleLogout} // Call the handleLogout function on click
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
