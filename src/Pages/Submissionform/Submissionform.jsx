import { useForm } from "react-hook-form";

import { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const SubmissionForm = ({ contestId }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const submission = {
      contestId,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      submissionLink: data.link,
      submittedAt: new Date(),
    };

    console.log(submission);
    axiosSecure
      .post(`/contest/${contestId}/submission`, submission)
      .then((res) => {
        if (res.data.message === "Already submitted") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "already have been sumitted!",
          });
        } else {
          Swal.fire({
            title: "submited Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-center text-gray-800">
        Submit Your Task
      </h2>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Submission Link</span>
        </label>
        <input
          type="url"
          placeholder="https://github.com / drive / live link"
          className="input input-bordered w-full"
          {...register("link", {
            required: "Submission link is required",
          })}
        />
        {errors?.link && (
          <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full text-white font-semibold"
      >
        Submit Task
      </button>
    </form>
  );
};

export default SubmissionForm;
