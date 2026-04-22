// import React, { useContext, useState } from "react";

// import { AuthContext } from "../../../Authprovide/Context/Context";
// import { Link, NavLink, useNavigate } from "react-router";
// import { Menu, X } from "lucide-react";
// import { useTheme } from "next-themes";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   console.log("Current theme:", theme);

//   const navLinks = (
//     <>
//       <li>
//         <NavLink to="/" className="font-semibold">
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/all-contest" className="font-semibold">
//           All Contests
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/leaderboard" className="font-semibold">
//           Leaderboard
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/motivation" className="font-semibold">
//           Motivation
//         </NavLink>
//       </li>
//       <li>
//         {user && (
//           <NavLink to="/about" className="font-semibold">
//             About Us
//           </NavLink>
//         )}
//       </li>
//     </>
//   );

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <div className=" w-full shadow-md bg-white sticky top-0 z-50 dark:bg-black">
//       <div className="navbar container mx-auto">
//         {/* LEFT */}
//         <div className="navbar-start">
//           {/* Mobile Menu */}
//           <div className="lg:hidden">
//             {/* Open Button */}
//             <button onClick={() => setOpen(true)} className="p-2">
//               <Menu size={28} />
//             </button>

//             {/* UL Dropdown */}
//             <ul
//               className={`fixed top-0 left-0 h-full w-72 bg-base-100 shadow-xl p-6 z-50 transform transition-transform duration-300 ${
//                 open ? "translate-x-0" : "-translate-x-full"
//               }`}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-4 right-4"
//               >
//                 <X size={24} />
//               </button>

//               {/* Links */}
//               <div className="mt-10 flex flex-col gap-4">{navLinks}</div>
//             </ul>
//           </div>

//           <Link to="/" className="text-2xl font-bold text-primary  ">
//             Contest<span className="text-neutral dark:text-white">Hub</span>
//           </Link>
//         </div>

//         {/* CENTER */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navLinks}</ul>
//         </div>

//         {/* RIGHT */}
//         <div className="navbar-end gap-3">
//           <div>
//             <label className="toggle text-base-content">
//               <input
//                 type="checkbox"
//                 value="synthwave"
//                 checked={theme === "dark"}
//                 onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
//                 className="theme-controller"
//               />

//               <svg
//                 aria-label="sun"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <g
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="2"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <circle cx="12" cy="12" r="4"></circle>
//                   <path d="M12 2v2"></path>
//                   <path d="M12 20v2"></path>
//                   <path d="m4.93 4.93 1.41 1.41"></path>
//                   <path d="m17.66 17.66 1.41 1.41"></path>
//                   <path d="M2 12h2"></path>
//                   <path d="M20 12h2"></path>
//                   <path d="m6.34 17.66-1.41 1.41"></path>
//                   <path d="m19.07 4.93-1.41 1.41"></path>
//                 </g>
//               </svg>

//               <svg
//                 aria-label="moon"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <g
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="2"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//                 </g>
//               </svg>
//             </label>
//           </div>
//           {/* If not logged in */}
//           {!user ? (
//             <Link to="/login" className="btn btn-primary text-black">
//               Login
//             </Link>
//           ) : (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full border">
//                   <img src={user?.photoURL} alt="profile" />
//                 </div>
//               </label>

//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
//               >
//                 <li className="font-bold text-center">{user?.displayName}</li>

//                 <li>
//                   <Link to="/dashboard" className="justify-between">
//                     Dashboard
//                   </Link>
//                 </li>

//                 <li>
//                   <Link to="/profile" className="justify-between">
//                     Your profile
//                   </Link>
//                 </li>

//                 <li>
//                   <button onClick={handleLogout} className="text-red-500">
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Authprovide/Context/Context";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-semibold dark:text-gray-200">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-contest" className="font-semibold dark:text-gray-200">
          All Contests
        </NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard" className="font-semibold dark:text-gray-200">
          Leaderboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/motivation" className="font-semibold dark:text-gray-200">
          Motivation
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink to="/about" className="font-semibold dark:text-gray-200">
            About Us
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
    <div className="w-full shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors duration-300">
      <div className="navbar container mx-auto">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="p-2 dark:text-white"
            >
              <Menu size={28} />
            </button>

            {/* Mobile Drawer */}
            <ul
              className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl p-6 z-50 transform transition-transform duration-300 ${
                open ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 dark:text-white"
              >
                <X size={24} />
              </button>

              <div className="mt-10 flex flex-col gap-4">{navLinks}</div>
            </ul>
          </div>

          <Link to="/" className="text-2xl font-bold text-primary">
            Contest<span className="text-neutral dark:text-white">Hub</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          {/* Theme Toggle */}
          <div className="flex items-center">
            <label className="swap swap-rotate text-base-content dark:text-white">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden"
              />

              {/* Sun icon */}
              <svg
                className={`fill-current w-8 h-8 ${theme === "dark" ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.36Zm10.31,1.41a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0,0-1.41A1,1,0,0,0,15.95,8.46ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm7-5H18a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-4.36,6.36a1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0-1.41-1.41l-.71.71A1,1,0,0,0,14.64,17.36ZM12,18a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Z" />
              </svg>

              {/* Moon icon */}
              <svg
                className={`fill-current w-8 h-8 ${theme === "dark" ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z" />
              </svg>
            </label>
          </div>

          {/* User Section */}
          {!user ? (
            <Link to="/login" className="btn btn-primary btn-sm md:btn-md">
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border border-primary">
                  <img src={user?.photoURL} alt="profile" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-white dark:bg-gray-800 dark:text-white rounded-box w-52 border dark:border-gray-700"
              >
                <li className="font-bold text-center py-2 border-b dark:border-gray-700">
                  {user?.displayName}
                </li>

                <li>
                  <Link to="/dashboard" className="py-2">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link to="/profile" className="py-2">
                    Your profile
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout} className="text-red-500 py-2">
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
