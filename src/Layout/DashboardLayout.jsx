import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { FaRegCheckCircle, FaTrophy, FaBars } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import {
  MdCreateNewFolder,
  MdOutlineAssignmentTurnedIn,
  MdSettings,
} from "react-icons/md";
import { AuthContext } from "../Authprovide/Context/Context";
import useRole from "../Hook/useRole";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { role, isLoading } = useRole();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading || !role) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <span className="loading loading-spinner text-green-500 text-3xl"></span>
      </div>
    );
  }

  const menuItems = {
    user: [
      {
        icon: <FaRegCheckCircle />,
        label: "My Participated Contests",
        path: "/dashboard/my-contest",
      },
      {
        icon: <FaTrophy />,
        label: "My Winning Contests",
        path: "/dashboard/my-winning-contest",
      },
    ],
    admin: [
      {
        icon: <MdOutlineAssignmentTurnedIn />,
        label: "Approve Contests",
        path: "/dashboard/contest-aprove",
      },
      {
        icon: <AiOutlineUser />,
        label: "Manage Users",
        path: "/dashboard/all-user",
      },
    ],
    creator: [
      {
        icon: <GiTrophyCup />,
        label: "Set Winner",
        path: "/dashboard/set-winner",
      },
      {
        icon: <MdCreateNewFolder />,
        label: "My Created Contests",
        path: "/dashboard/my-created-contest",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex flex-col w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl">
        <div className="p-6 text-2xl font-bold text-green-400">
          Contest Dashboard
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {menuItems[role]?.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={idx}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "hover:bg-green-500/20 hover:text-green-400"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${isActive ? "bg-white text-green-500" : "bg-green-500/20"}`}
                >
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}

          <Link
            to="/dashboard/settings"
            className="flex items-center gap-3 p-3 rounded-xl mt-auto hover:bg-gray-700 hover:text-green-400 transition"
          >
            <MdSettings className="text-xl" />
            <span className="font-medium">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 z-50 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl lg:hidden"
          >
            <div className="p-6 flex justify-between items-center">
              <span className="text-2xl font-bold text-green-400">
                Contest Dashboard
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              {menuItems[role]?.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-green-500 text-white shadow-lg"
                        : "hover:bg-green-500/20 hover:text-green-400"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${isActive ? "bg-white text-green-500" : "bg-green-500/20"}`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <Link
                to="/dashboard/settings"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl mt-auto hover:bg-gray-700 hover:text-green-400 transition"
              >
                <MdSettings className="text-xl" />
                <span className="font-medium">Settings</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-gray-700 text-2xl"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>
            <div className="text-xl font-semibold text-gray-700">Dashboard</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-500 font-medium hidden sm:block">
              {user?.displayName}
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              {user?.displayName?.[0] || "U"}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <motion.div
          className="flex-1 overflow-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayout;
