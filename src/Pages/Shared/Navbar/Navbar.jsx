import React, { useContext } from "react";

import { AuthContext } from "../../../Authprovide/Context/Context";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-contests" className="font-semibold">
          All Contests
        </NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard" className="font-semibold">
          Leaderboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/winners" className="font-semibold">
          Winners
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="shadow-md bg-base-100 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
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
            <Link to="/login" className="btn btn-primary">
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
