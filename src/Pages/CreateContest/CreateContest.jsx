import React from "react";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../Hook/useAxiosSecure";

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authprovide/Context/Context";
import DatePicker from "react-datepicker";

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
        title: "Contest Created!",
        text: "Admin approval pending.",
        icon: "success",
      });
      reset();
    }
    console.log(res.data);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Create New Contest
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Contest Name */}
        <div>
          <label className="font-semibold">Contest Name</label>
          <input
            type="text"
            {...register("contestName", { required: true })}
            className="w-full p-3 border rounded"
            placeholder="Enter contest name"
          />
          {errors.contestName && <p className="text-red-500">Required</p>}
        </div>

        {/* Image URL */}
        <div>
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            {...register("image", { required: true })}
            className="w-full p-3 border rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-3 border rounded"
            rows="4"
          ></textarea>
        </div>

        {/* Task Details */}
        <div>
          <label className="font-semibold">Task Instructions</label>
          <textarea
            {...register("taskDetails", { required: true })}
            className="w-full p-3 border rounded"
            rows="4"
          ></textarea>
        </div>

        {/* Contest Type */}
        <div>
          <label className="font-semibold">Contest Type</label>
          <select
            {...register("contestType", { required: true })}
            className="w-full p-3 border rounded"
          >
            <option value="Design">Design</option>
            <option value="Article">Article Writing</option>
            <option value="Business Idea">Business Idea</option>
            <option value="Gaming Review">Gaming Review</option>
          </select>
        </div>

        {/* Entry Fee */}
        <div>
          <label className="font-semibold">Entry Fee</label>
          <input
            type="number"
            {...register("entryFee", { required: true })}
            className="w-full p-3 border rounded"
            placeholder="Enter registration fee"
          />
        </div>

        {/* Prize Money */}
        <div>
          <label className="font-semibold">Prize Money</label>
          <input
            type="number"
            {...register("prizeMoney", { required: true })}
            className="w-full p-3 border rounded"
            placeholder="Enter prize amount"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="font-semibold block mb-1">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="border p-3 w-full rounded"
            showTimeSelect
            dateFormat="Pp"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white p-3 mt-4 rounded hover:bg-blue-700">
          Create Contest
        </button>
      </form>
    </div>
  );
};

export default CreateContest;
