import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import toast from "react-hot-toast";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const dispatch = useDispatch();
  const [Error, setError] = useState("");

  const handleEditProfile = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          age
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data));
      toast.success("Profile updated successfully!");
      setError("");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Profile update failed";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Edit Profile Form */}
          <div className="w-full lg:w-96">
            <div className="card bg-gray-900 border border-gray-600 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title text-center text-3xl font-bold text-white mb-8">
                  EDIT PROFILE
                </h2>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-gray-300">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="form-control w-full mt-6">
                  <label className="label">
                    <span className="label-text font-medium text-gray-300">
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-control w-full mt-6">
                  <label className="label">
                    <span className="label-text font-medium text-gray-300">
                      Age
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="text-red-500">{Error}</div>

                <div className="card-actions justify-center mt-8">
                  <button
                    className="btn bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold border-none btn-wide shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
                    onClick={handleEditProfile}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User Card Preview */}
          <div className="w-full lg:w-96 shrink-0 ">
            <UserCard user={{ firstName, lastName, age }} hideActions={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
