// import React from "react";
// import { useForm } from "react-hook-form";

// import "react-datepicker/dist/react-datepicker.css";
// import useAxiosSecure from "../../Hook/useAxiosSecure";

// import { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import DatePicker from "react-datepicker";

// const CreateContest = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const [deadline, setDeadline] = useState(new Date());

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const contestInfo = {
//       contestName: data.contestName,
//       image: data.image,
//       description: data.description,
//       taskDetails: data.taskDetails,
//       contestType: data.contestType,
//       entryFee: parseFloat(data.entryFee),
//       prizeMoney: parseFloat(data.prizeMoney),
//       deadline,
//       status: "pending",
//       creatorEmail: user?.email,
//       creatorName: user?.displayName,
//       creatorPhoto: user?.photoURL,
//       participantsCount: 0,
//       winner: {},
//       submissions: [],
//     };

//     const res = await axiosSecure.post("/create-contest", contestInfo);
//     if (res.data.insertedId) {
//       Swal.fire({
//         title: "Contest Created!",
//         text: "Admin approval pending.",
//         icon: "success",
//       });
//       reset();
//     }
//     console.log(res.data);
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
//       <h1 className="text-2xl font-bold mb-5 text-center">
//         Create New Contest
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {/* Contest Name */}
//         <div>
//           <label className="font-semibold">Contest Name</label>
//           <input
//             type="text"
//             {...register("contestName", { required: true })}
//             className="w-full p-3 border rounded"
//             placeholder="Enter contest name"
//           />
//           {errors.contestName && <p className="text-red-500">Required</p>}
//         </div>

//         {/* Image URL */}
//         <div>
//           <label className="font-semibold">Image URL</label>
//           <input
//             type="text"
//             {...register("image", { required: true })}
//             className="w-full p-3 border rounded"
//             placeholder="https://example.com/image.jpg"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="font-semibold">Description</label>
//           <textarea
//             {...register("description", { required: true })}
//             className="w-full p-3 border rounded"
//             rows="4"
//           ></textarea>
//         </div>

//         {/* Task Details */}
//         <div>
//           <label className="font-semibold">Task Instructions</label>
//           <textarea
//             {...register("taskDetails", { required: true })}
//             className="w-full p-3 border rounded"
//             rows="4"
//           ></textarea>
//         </div>

//         {/* Contest Type */}
//         <div>
//           <label className="font-semibold">Contest Type</label>
//           <select
//             {...register("contestType", { required: true })}
//             className="w-full p-3 border rounded"
//           >
//             <option value="Design">Design</option>
//             <option value="Article">Article Writing</option>
//             <option value="Business Idea">Business Idea</option>
//             <option value="Gaming Review">Gaming Review</option>
//           </select>
//         </div>

//         {/* Entry Fee */}
//         <div>
//           <label className="font-semibold">Entry Fee</label>
//           <input
//             type="number"
//             {...register("entryFee", { required: true })}
//             className="w-full p-3 border rounded"
//             placeholder="Enter registration fee"
//           />
//         </div>

//         {/* Prize Money */}
//         <div>
//           <label className="font-semibold">Prize Money</label>
//           <input
//             type="number"
//             {...register("prizeMoney", { required: true })}
//             className="w-full p-3 border rounded"
//             placeholder="Enter prize amount"
//           />
//         </div>

//         {/* Deadline */}
//         <div>
//           <label className="font-semibold block mb-1">Deadline</label>
//           <DatePicker
//             selected={deadline}
//             onChange={(date) => setDeadline(date)}
//             className="border p-3 w-full rounded"
//             showTimeSelect
//             dateFormat="Pp"
//           />
//         </div>

//         {/* Submit Button */}
//         <button className="w-full bg-primary text-white p-3 mt-4 rounded hover:bg-blue-700">
//           Create Contest
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateContest;
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Authprovide/Context/Context";

const CreateContest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [deadline, setDeadline] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contestInfo = {
      contestName: data.contestName,
      image: data.image,
      description: data.description,
      taskDetails: data.taskDetails,
      contestType: data.contestType,
      entryFee: parseFloat(data.entryFee),
      prizeMoney: parseFloat(data.prizeMoney),
      deadline,
      status: "pending",
      creatorEmail: user?.email,
      creatorName: user?.displayName,
      creatorPhoto: user?.photoURL,
      participantsCount: 0,
      winner: {},
      submissions: [],
    };

    const res = await axiosSecure.post("/create-contest", contestInfo);
    if (res.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Your contest is now under review.",
        icon: "success",
        confirmButtonColor: "#3b82f6",
      });
      reset();
    }
  };

  // Reusable input style
  const inputStyle =
    "w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200";

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Launch Your Contest
          </h1>
          <p className="text-blue-100 mt-2 font-medium">
            Fill in the details below to start your creative challenge.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 md:p-12 space-y-8"
        >
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Contest Title
              </label>
              <input
                type="text"
                {...register("contestName", {
                  required: "Contest name is required",
                })}
                className={inputStyle}
                placeholder="e.g. Minimalist Logo Challenge"
              />
              {errors.contestName && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.contestName.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Category
              </label>
              <select
                {...register("contestType", { required: true })}
                className={inputStyle}
              >
                <option value="Design">🎨 Design</option>
                <option value="Article">✍️ Article Writing</option>
                <option value="Business Idea">💡 Business Idea</option>
                <option value="Gaming Review">🎮 Gaming Review</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Image URL
              </label>
              <input
                type="text"
                {...register("image", { required: true })}
                className={inputStyle}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Details */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Short Description
              </label>
              <textarea
                {...register("description", { required: true })}
                className={`${inputStyle} resize-none`}
                rows="3"
                placeholder="Briefly explain what this contest is about..."
              ></textarea>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Submission Instructions
              </label>
              <textarea
                {...register("taskDetails", { required: true })}
                className={`${inputStyle} resize-none`}
                rows="4"
                placeholder="What exactly should participants submit?"
              ></textarea>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Money & Time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Entry Fee ($)
              </label>
              <input
                type="number"
                {...register("entryFee", { required: true })}
                className={inputStyle}
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Prize Pool ($)
              </label>
              <input
                type="number"
                {...register("prizeMoney", { required: true })}
                className={inputStyle}
                placeholder="500.00"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                End Date
              </label>
              <div className="mt-1">
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  className={inputStyle}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] focus:ring-4 focus:ring-indigo-300"
            >
              🚀 Create Contest & Notify Admin
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">
              By clicking create, your contest will be sent for review to ensure
              it meets our guidelines.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContest;
