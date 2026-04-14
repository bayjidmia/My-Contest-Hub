// import { useForm } from "react-hook-form";

// import { useContext } from "react";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import Swal from "sweetalert2";

// const SubmissionForm = ({ contestId }) => {
//   const { user } = useContext(AuthContext);
//   const { register, handleSubmit, errors } = useForm();
//   const axiosSecure = useAxiosSecure();

//   const onSubmit = (data) => {
//     const submission = {
//       contestId,
//       userName: user.displayName,
//       userEmail: user.email,
//       userPhoto: user.photoURL,
//       submissionLink: data.link,
//       submittedAt: new Date(),
//     };

//     console.log(submission);
//     axiosSecure
//       .post(`/contest/${contestId}/submission`, submission)
//       .then((res) => {
//         if (res.data.message === "Already submitted") {
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "already have been sumitted!",
//           });
//         } else {
//           Swal.fire({
//             title: "submited Successfully!",
//             icon: "success",
//             draggable: true,
//           });
//         }
//       });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4"
//     >
//       <h2 className="text-xl font-bold text-center text-gray-800">
//         Submit Your Task
//       </h2>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text font-semibold">Submission Link</span>
//         </label>
//         <input
//           type="url"
//           placeholder="https://github.com / drive / live link"
//           className="input input-bordered w-full"
//           {...register("link", {
//             required: "Submission link is required",
//           })}
//         />
//         {errors?.link && (
//           <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="btn btn-primary w-full text-white font-semibold"
//       >
//         Submit Task
//       </button>
//     </form>
//   );
// };

// export default SubmissionForm;
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { FiLink, FiSend, FiCheckCircle } from "react-icons/fi";

const SubmissionForm = ({ contestId }) => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const submission = {
      contestId,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      submissionLink: data.link,
      submittedAt: new Date(),
    };

    try {
      const res = await axiosSecure.post(
        `/contest/${contestId}/submission`,
        submission,
      );

      if (res.data.message === "Already submitted") {
        Swal.fire({
          icon: "error",
          title: "Duplicate Entry",
          text: "You have already submitted your task for this contest!",
          confirmButtonColor: "#EF4444",
        });
      } else {
        Swal.fire({
          title: "Submission Received!",
          text: "Your task has been sent to the judges.",
          icon: "success",
          confirmButtonColor: "#6366F1",
          showClass: { popup: "animate__animated animate__fadeInUp" },
        });
        reset(); // Clear form on success
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative group">
      {/* Decorative Background Blur */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl space-y-6 border border-gray-100"
      >
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-2">
            <FiSend className="text-2xl" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">
            Finalize Submission
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Paste your project link below to enter the race.
          </p>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold text-gray-700 uppercase text-[11px] tracking-widest">
              Project Access Link
            </span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <FiLink />
            </div>
            <input
              type="url"
              placeholder="https://github.com/your-repo"
              className={`input input-bordered w-full pl-10 h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 rounded-xl font-medium ${
                errors.link
                  ? "border-red-500 focus:ring-red-200"
                  : "focus:ring-primary/20"
              }`}
              {...register("link", {
                required: "The link field cannot be empty",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Must be a valid URL starting with http/https",
                },
              })}
            />
          </div>
          {errors?.link && (
            <p className="text-red-500 text-xs font-bold mt-2 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              {errors.link.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn btn-primary w-full h-12 rounded-xl text-white font-black uppercase tracking-widest border-none transition-all duration-500 shadow-lg shadow-primary/30 ${
            isSubmitting ? "loading" : "hover:scale-[1.02] active:scale-95"
          }`}
        >
          {!isSubmitting && (
            <span className="flex items-center gap-2">
              Submit Task <FiCheckCircle />
            </span>
          )}
          {isSubmitting && "Processing..."}
        </button>

        <p className="text-[10px] text-center text-gray-400 font-medium">
          By submitting, you agree to the contest rules and judge decisions.
        </p>
      </form>
    </div>
  );
};

export default SubmissionForm;
