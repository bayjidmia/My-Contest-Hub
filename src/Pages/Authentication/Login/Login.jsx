import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Authprovide/Context/Context";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  const { GooglesignIn, setuser, signIn } = useContext(AuthContext);
  console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    signIn(data.email, data.password)
      .then((result) => {
        setuser(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    GooglesignIn().then((res) => setuser(res.user));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md shadow-xl rounded-xl p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-1"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1 pr-10"
                {...register("password", {
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-{}\[\]:;"'<>,.?/~`]).{8,}$/,
                })}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">password must be 6 crackter</p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                password must be at least 1 uopper crackter and 1 lower cracter
              </p>
            )}
          </div>

          <button className="btn btn-primary w-full mt-4" type="submit">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <FcGoogle size={22} /> Login with Google
        </button>

        <p className="text-center mt-4">
          New here?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
