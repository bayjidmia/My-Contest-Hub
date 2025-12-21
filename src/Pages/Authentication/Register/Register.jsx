import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Authprovide/Context/Context";
import axios from "axios";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

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
    console.log(data);
    const profileimage = data?.photo[0];

    console.log(profileimage);
    createUser(data.email, data.password)
      .then((result) => {
        console.log("User created", result);
        setuser(result.user);

        navigate("/");

        // prepare formdata
        const formData = new FormData();
        formData.append("image", profileimage);

        // ACTUAL IMGBB API URL
        const url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        axios
          .post(url, formData)
          .then((res) => {
            console.log("Image uploaded:", res.data);
            const imageURL = res.data?.data?.display_url;
            console.log("Image URL:", imageURL);
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: imageURL,
            };

            axiosSecure.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user insorted in the database");
              }
            });

            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.display_url,
            };

            updateUser(userProfile)
              .then(() => {
                console.log("user profile done");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((err) => {
            console.log("Upload error:", err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
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
            console.log("user insorted in the database");
          } else {
            console.log("ℹ️ User already exists");
          }
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md shadow-xl rounded-xl p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-1"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

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
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters",
                  },
                })}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Photo Upload */}
          <div>
            <label className="font-semibold">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full mt-1"
              {...register("photo", { required: "Profile photo is required" })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button className="btn btn-primary w-full mt-4">Register</button>
        </form>
        <div className="divider">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <FcGoogle size={22} /> Signup with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
