// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../../Authprovide/Context/Context";
// import axios from "axios";
// import useAxiosSecure from "../../../Hook/useAxiosSecure";

// const Register = () => {
//   const navigate = useNavigate();
//   const [showPass, setShowPass] = useState(false);
//   const { GooglesignIn, setuser, updateUser, createUser } =
//     useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     const profileimage = data?.photo[0];

//     console.log(profileimage);
//     createUser(data.email, data.password)
//       .then((result) => {
//         console.log("User created", result);
//         setuser(result.user);

//         navigate("/");

//         // prepare formdata
//         const formData = new FormData();
//         formData.append("image", profileimage);

//         // ACTUAL IMGBB API URL
//         const url = `https://api.imgbb.com/1/upload?key=${
//           import.meta.env.VITE_image_host
//         }`;

//         axios
//           .post(url, formData)
//           .then((res) => {
//             console.log("Image uploaded:", res.data);
//             const imageURL = res.data?.data?.display_url;
//             console.log("Image URL:", imageURL);
//             const userInfo = {
//               email: data.email,
//               displayName: data.name,
//               photoURL: imageURL,
//             };

//             axiosSecure.post("/users", userInfo).then((res) => {
//               if (res.data.insertedId) {
//                 console.log("user insorted in the database");
//               }
//             });

//             const userProfile = {
//               displayName: data.name,
//               photoURL: res.data.data.display_url,
//             };

//             updateUser(userProfile)
//               .then(() => {
//                 console.log("user profile done");
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           })
//           .catch((err) => {
//             console.log("Upload error:", err);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const handleGoogle = () => {
//     GooglesignIn()
//       .then((res) => {
//         setuser(res.user);
//         navigate("/");
//         const userInfo = {
//           email: res.user.email,
//           displayName: res.user.displayName,
//           photoURL: res.user.photoURL,
//         };

//         axiosSecure.post("/users", userInfo).then((res) => {
//           if (res.data.insertedId) {
//             console.log("user insorted in the database");
//           } else {
//             console.log("ℹ️ User already exists");
//           }
//         });
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="w-full max-w-md shadow-xl rounded-xl p-8 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-6 text-primary">
//           Create Account 🚀
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="font-semibold">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="input input-bordered w-full mt-1"
//               {...register("name", { required: "Name is required" })}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name.message}</p>
//             )}
//           </div>

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
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Must be at least 6 characters",
//                   },
//                 })}
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer text-gray-500"
//                 onClick={() => setShowPass(!showPass)}
//               >
//                 {showPass ? "👁️" : "👁️‍🗨️"}
//               </span>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Photo Upload */}
//           <div>
//             <label className="font-semibold">Profile Photo</label>
//             <input
//               type="file"
//               accept="image/*"
//               className="file-input file-input-bordered w-full mt-1"
//               {...register("photo", { required: "Profile photo is required" })}
//             />
//             {errors.photo && (
//               <p className="text-red-500 text-sm">{errors.photo.message}</p>
//             )}
//           </div>

//           {/* Register Button */}
//           <button className="btn btn-primary w-full mt-4 text-black ">
//             Register
//           </button>
//         </form>
//         <div className="divider">OR</div>

//         <button
//           onClick={handleGoogle}
//           className="btn btn-outline w-full flex items-center gap-2"
//         >
//           <FcGoogle size={22} /> Signup with Google
//         </button>

//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-primary font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
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
  HiOutlinePhotograph,
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
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white md:rounded-2xl overflow-hidden shadow-2xl m-4">
        {/* Left Side: Branding/Visual */}
        <div className="hidden md:flex md:w-5/12 bg-primary relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
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
                <span className="bg-white/20 p-2 rounded-full">✓</span>
                <span>Access to Premium Features</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full">✓</span>
                <span>Connect with Experts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full">✓</span>
                <span>Smart Learning Ecosystem</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 lg:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                Create Account
              </h2>
              <p className="text-gray-500">
                Get started with your free account today.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <HiOutlineUser size={20} />
                  </span>
                  <input
                    type="text"
                    placeholder="Bayjid Mia"
                    className={`input input-bordered w-full pl-10 focus:input-primary transition-all ${errors.name ? "input-error" : ""}`}
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
                    placeholder="example@mail.com"
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
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <HiOutlineLockClosed size={20} />
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className={`input input-bordered w-full pl-10 pr-10 focus:input-primary transition-all ${errors.password ? "input-error" : ""}`}
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
                  <span className="label-text font-semibold">
                    Profile Photo
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    className={`file-input file-input-bordered file-input-primary w-full focus:outline-none ${errors.photo ? "file-input-error" : ""}`}
                    {...register("photo", {
                      required: "Profile photo is required",
                    })}
                  />
                </div>
                {errors.photo && (
                  <p className="text-error text-xs mt-1">
                    {errors.photo.message}
                  </p>
                )}
              </div>

              <button className="btn btn-primary w-full text-white font-bold tracking-wide shadow-lg hover:shadow-primary/30 transition-all uppercase mt-2">
                Create Account
              </button>
            </form>

            <div className="divider my-6 text-gray-400 text-sm">
              OR SIGNUP WITH
            </div>

            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full flex items-center gap-3 border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all font-medium"
            >
              <FcGoogle size={24} /> Google Account
            </button>

            <p className="text-center mt-6 text-gray-600">
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
