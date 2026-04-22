import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Authprovide/Context/Context";
import axios from "axios";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiEye,
  HiEyeOff,
} from "react-icons/hi";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { GooglesignIn, setuser, updateUser, createUser } =
    useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const profileimage = data?.photo[0];

    createUser(data.email, data.password)
      .then((result) => {
        setuser(result.user);
        navigate("/");

        const formData = new FormData();
        formData.append("image", profileimage);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

        axios
          .post(url, formData)
          .then((res) => {
            const imageURL = res.data?.data?.display_url;
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: imageURL,
            };

            axiosSecure.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user inserted in the database");
              }
            });

            const userProfile = {
              displayName: data.name,
              photoURL: imageURL,
            };

            updateUser(userProfile)
              .then(() => console.log("user profile updated"))
              .catch((error) => console.log(error));
          })
          .catch((err) => console.log("Upload error:", err));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    GooglesignIn()
      .then((res) => {
        setuser(res.user);
        navigate("/");
        const userInfo = {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user inserted in the database");
          }
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-slate-950 py-10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white dark:bg-slate-900 md:rounded-2xl overflow-hidden shadow-2xl m-4 border dark:border-slate-800">
        {/* Left Side: Branding/Visual */}
        <div className="hidden md:flex md:w-5/12 bg-primary relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
              alt="Register Visual"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
              Join Our Journey 🚀
            </h1>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full text-xs">✓</span>
                <span>Access to Premium Features</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full text-xs">✓</span>
                <span>Connect with Experts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full text-xs">✓</span>
                <span>Smart Learning Ecosystem</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
                Create Account
              </h2>
              <p className="text-gray-500 dark:text-slate-400">
                Get started with your free account today.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold dark:text-slate-300">
                    Full Name
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <HiOutlineUser size={20} />
                  </span>
                  <input
                    type="text"
                    placeholder="Bayjid Mia"
                    className={`input input-bordered w-full pl-10 focus:input-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white ${errors.name ? "input-error" : ""}`}
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                {errors.name && (
                  <p className="text-error text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

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
                    placeholder="example@mail.com"
                    className={`input input-bordered w-full pl-10 focus:input-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white ${errors.email ? "input-error" : ""}`}
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
                <label className="label">
                  <span className="label-text font-semibold dark:text-slate-300">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <HiOutlineLockClosed size={20} />
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className={`input input-bordered w-full pl-10 pr-10 focus:input-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white ${errors.password ? "input-error" : ""}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Must be at least 6 characters",
                      },
                    })}
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-primary transition-colors"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-error text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Profile Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold dark:text-slate-300">
                    Profile Photo
                  </span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className={`file-input file-input-bordered file-input-primary w-full focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 ${errors.photo ? "file-input-error" : ""}`}
                  {...register("photo", {
                    required: "Profile photo is required",
                  })}
                />
                {errors.photo && (
                  <p className="text-error text-xs mt-1">
                    {errors.photo.message}
                  </p>
                )}
              </div>

              <button className="btn btn-primary w-full text-white dark:text-black font-bold tracking-wide shadow-lg hover:shadow-primary/30 transition-all uppercase mt-2">
                Create Account
              </button>
            </form>

            <div className="divider my-6 text-gray-400 dark:text-slate-500 text-sm">
              OR SIGNUP WITH
            </div>

            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full flex items-center gap-3 border-gray-300 dark:border-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-medium"
            >
              <FcGoogle size={24} /> Google Account
            </button>

            <p className="text-center mt-6 text-gray-600 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-bold hover:underline transition-all"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
