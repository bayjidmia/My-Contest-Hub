import React, { useContext, useState } from "react";

import { AuthContext } from "../../../Authprovide/Context/Context";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-contest" className="font-semibold">
          All Contests
        </NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard" className="font-semibold">
          Leaderboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/motivation" className="font-semibold">
          Motivation
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink to="/create-contest" className="font-semibold">
            Create Contest
          </NavLink>
        )}
      </li>
    </>
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className=" w-full shadow-md bg-base-100 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            {/* Open Button */}
            <button onClick={() => setOpen(true)} className="p-2">
              <Menu size={28} />
            </button>

            {/* UL Dropdown */}
            <ul
              className={`fixed top-0 left-0 h-full w-72 bg-base-100 shadow-xl p-6 z-50 transform transition-transform duration-300 ${
                open ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4"
              >
                <X size={24} />
              </button>

              {/* Links */}
              <div className="mt-10 flex flex-col gap-4">{navLinks}</div>
            </ul>
          </div>

          <Link to="/" className="text-2xl font-bold text-primary">
            Contest<span className="text-neutral">Hub</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          {/* If not logged in */}
          {!user ? (
            <Link to="/login" className="btn btn-primary text-black">
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border">
                  <img src={user?.photoURL} alt="profile" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-bold text-center">{user?.displayName}</li>

                <li>
                  <Link to="/dashboard" className="justify-between">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link to="/profile" className="justify-between">
                    Your profile
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
