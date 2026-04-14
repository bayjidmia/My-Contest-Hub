// import React, { useContext } from "react";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import Swal from "sweetalert2";

// const Profile = () => {
//   const { user, updateUser, setuser } = useContext(AuthContext);

//   const handleChange = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const photoURL = e.target.photo.value;
//     updateUser({ displayName: name, photoURL: photoURL })
//       .then(() => {
//         setuser({ ...user, displayName: name, photoURL: photoURL });
//         Swal.fire({
//           title: "Drag me!",
//           icon: "success",
//           draggable: true,
//         });
//         e.target.reset();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex justify-center items-center p-4">
//       <div className="bg-white shadow-xl rounded-3xl grid md:grid-cols-2 w-full max-w-4xl overflow-hidden">
//         <div className="flex flex-col justify-center items-center bg-primary text-white p-8">
//           <img
//             src={
//               user?.photoURL || "https://i.ibb.co/4f5fyzL/default-avatar.png"
//             }
//             alt="Profile"
//             className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
//           />
//           <h2 className="text-2xl font-bold mt-4">
//             {user?.displayName || "User Name"}
//           </h2>
//           <p className="text-sm text-indigo-200 mt-1">{user?.email}</p>
//         </div>

//         <div className="p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-700">
//             Update Profile
//           </h2>
//           <form onSubmit={handleChange} className="space-y-5">
//             <div>
//               <label className="block text-gray-600 mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 defaultValue={user?.displayName || ""}
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
//                 placeholder="Enter new name"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-600 mb-1">Photo URL</label>
//               <input
//                 type="text"
//                 name="photo"
//                 defaultValue={user?.photoURL || ""}
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
//                 placeholder="Enter new photo URL"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-primary text-white rounded-lg py-2 hover:bg-indigo-700 transition"
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// import React, { useContext } from "react";
// import { AuthContext } from "../../Authprovide/Context/Context";
// import Swal from "sweetalert2";

// const Profile = () => {
//   const { user, updateUser, setuser } = useContext(AuthContext);

//   const handleChange = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const photoURL = e.target.photo.value;

//     updateUser({ displayName: name, photoURL: photoURL })
//       .then(() => {
//         setuser({ ...user, displayName: name, photoURL: photoURL });

//         Swal.fire({
//           icon: "success",
//           title: "Profile Updated!",
//           text: "Your profile information has been successfully updated.",
//           confirmButtonColor: "#4f46e5",
//         });

//         e.target.reset();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
//       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Cover Section */}
//         <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

//         {/* Profile Info */}
//         <div className="flex flex-col items-center -mt-16 px-6">
//           <img
//             src={
//               user?.photoURL || "https://i.ibb.co/4f5fyzL/default-avatar.png"
//             }
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
//           />

//           <h2 className="text-2xl font-bold mt-3">
//             {user?.displayName || "User Name"}
//           </h2>

//           <p className="text-gray-500">{user?.email}</p>
//         </div>

//         {/* Form Section */}
//         <div className="p-8">
//           <h2 className="text-xl font-semibold mb-6 text-gray-700 text-center">
//             Edit Profile
//           </h2>

//           <form onSubmit={handleChange} className="space-y-5 max-w-md mx-auto">
//             <div>
//               <label className="block text-gray-600 mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 defaultValue={user?.displayName || ""}
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-600 mb-1">Photo URL</label>
//               <input
//                 type="text"
//                 name="photo"
//                 defaultValue={user?.photoURL || ""}
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
//                 placeholder="Enter photo URL"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import Swal from "sweetalert2";
import { Camera, User, Mail, Save, Loader2 } from "lucide-react"; // Optional: for icons

const Profile = () => {
  const { user, updateUser, setuser } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photoURL = e.target.photo.value.trim();

    // Basic Validation
    if (!name || !photoURL) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in all fields before saving.",
      });
    }

    setIsSubmitting(true);

    try {
      await updateUser({ displayName: name, photoURL: photoURL });

      // Update local state
      setuser({ ...user, displayName: name, photoURL: photoURL });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your changes have been saved successfully.",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Update Error:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          error.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header/Cover Section */}
          <div className="relative h-32 bg-indigo-600">
            <div className="absolute -bottom-12 left-8">
              <div className="relative">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/4f5fyzL/default-avatar.png"
                  }
                  alt="Profile"
                  className="w-24 h-24 rounded-2xl border-4 border-white object-cover bg-gray-200"
                />
                <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
                  <Camera className="w-4 h-4 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Account Settings
              </h1>
              <p className="text-sm text-gray-500">
                Update your personal information and profile picture.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName || ""}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field (Disabled) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Address
                  </label>
                  <input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                  />
                </div>

                {/* Photo URL Field */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Profile Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={user?.photoURL || ""}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                    placeholder="https://example.com/photo.jpg"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
