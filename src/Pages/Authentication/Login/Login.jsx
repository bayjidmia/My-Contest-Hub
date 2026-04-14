// import React, { useState } from "react";
// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../../Authprovide/Context/Context";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showPass, setShowPass] = useState(false);

//   const { GooglesignIn, setuser, signIn } = useContext(AuthContext);
//   console.log(location);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form submitted:", data);
//     signIn(data.email, data.password)
//       .then((result) => {
//         console.log("from Login", result);
//         setuser(result.user);
//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleGoogle = () => {
//     GooglesignIn().then((res) => setuser(res.user));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="w-full max-w-md shadow-xl rounded-xl p-8 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-6 text-primary">
//           Welcome Back 👋
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="font-semibold">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full mt-1"
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="font-semibold">Password</label>
//             <div className="relative">
//               <input
//                 type={showPass ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full mt-1 pr-10"
//                 {...register("password", {
//                   minLength: 6,
//                   pattern:
//                     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-{}\[\]:;"'<>,.?/~`]).{8,}$/,
//                 })}
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer text-gray-500"
//                 onClick={() => setShowPass(!showPass)}
//               >
//                 {showPass ? "👁️" : "👁️‍🗨️"}
//               </span>
//             </div>
//             {errors.password?.type === "minLength" && (
//               <p className="text-red-500">password must be 6 crackter</p>
//             )}

//             {errors.password?.type === "pattern" && (
//               <p className="text-red-500">
//                 password must be at least 1 uopper crackter and 1 lower cracter
//               </p>
//             )}
//           </div>

//           <button
//             className="btn btn-primary w-full mt-4 text-black "
//             type="submit"
//           >
//             Login
//           </button>
//         </form>

//         <div className="divider">OR</div>

//         <button
//           onClick={handleGoogle}
//           className="btn btn-outline w-full flex items-center gap-2"
//         >
//           <FcGoogle size={22} /> Login with Google
//         </button>

//         <p className="text-center mt-4">
//           New here?{" "}
//           <Link to="/register" className="text-primary font-semibold">
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Authprovide/Context/Context";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiEye,
  HiEyeOff,
} from "react-icons/hi";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  const { GooglesignIn, setuser, signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        setuser(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    GooglesignIn().then((res) => {
      setuser(res.user);
      navigate(location?.state || "/");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white md:rounded-2xl overflow-hidden shadow-2xl m-4">
        {/* Left Side: Image/Branding */}
        <div className="hidden md:flex md:w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
              alt="Login Visual"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
            <p className="text-lg opacity-90">
              Experience the next level of management with our smart ecosystem.
            </p>
          </div>
          {/* Decorative circles */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                Login
              </h2>
              <p className="text-gray-500">
                Please enter your details to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <HiOutlineMail size={20} />
                  </span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className={`input input-bordered w-full pl-10 focus:input-primary transition-all ${errors.email ? "input-error" : ""}`}
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <p className="text-error text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <div className="flex justify-between items-center">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <Link to="#" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <HiOutlineLockClosed size={20} />
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className={`input input-bordered w-full pl-10 pr-10 focus:input-primary transition-all ${errors.password ? "input-error" : ""}`}
                    {...register("password", {
                      minLength: 6,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-{}\[\]:;"'<>,.?/~`]).{8,}$/,
                    })}
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-primary transition-colors"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                  </span>
                </div>

                {errors.password?.type === "minLength" && (
                  <p className="text-error text-xs mt-1">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-error text-xs mt-1">
                    Use 1 upper, 1 lower, and 1 special character.
                  </p>
                )}
              </div>

              <button
                className="btn btn-primary w-full text-white font-bold tracking-wide shadow-lg hover:shadow-primary/30 transition-all uppercase"
                type="submit"
              >
                Sign In
              </button>
            </form>

            <div className="divider my-8 text-gray-400 text-sm">
              OR CONTINUE WITH
            </div>

            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full flex items-center gap-3 border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all font-medium"
            >
              <FcGoogle size={24} /> Google Account
            </button>

            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
