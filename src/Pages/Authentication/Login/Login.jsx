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
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white dark:bg-slate-900 md:rounded-2xl overflow-hidden shadow-2xl m-4 border dark:border-slate-800">
        {/* Left Side: Image/Branding */}
        <div className="hidden md:flex md:w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-40 dark:opacity-20">
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
        <div className="w-full md:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
                Login
              </h2>
              <p className="text-gray-500 dark:text-slate-400">
                Please enter your details to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold dark:text-slate-300">
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
                    className={`input input-bordered w-full pl-10 focus:input-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                      errors.email ? "input-error" : ""
                    }`}
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
                    <span className="label-text font-semibold dark:text-slate-300">
                      Password
                    </span>
                  </label>
                  <Link
                    to="#"
                    className="text-xs text-primary hover:underline font-medium"
                  >
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
                    className={`input input-bordered w-full pl-10 pr-10 focus:input-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                      errors.password ? "input-error" : ""
                    }`}
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
                className="btn btn-primary w-full text-white dark:text-black font-bold tracking-wide shadow-lg hover:shadow-primary/30 transition-all uppercase"
                type="submit"
              >
                Sign In
              </button>
            </form>

            <div className="divider my-8 text-gray-400 dark:text-slate-500 text-sm">
              OR CONTINUE WITH
            </div>

            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full flex items-center gap-3 border-gray-300 dark:border-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-medium"
            >
              <FcGoogle size={24} /> Google Account
            </button>

            <p className="text-center mt-8 text-gray-600 dark:text-slate-400">
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
