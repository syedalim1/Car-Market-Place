import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProfilePage = () => {
  const { user, isLoaded } = useUser(); // 'isLoaded' checks if the user is loaded
  const [searchParams] = useSearchParams();
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    GetListDetails();
    console.log(user); // Ensure that `user` is available here
  }, []);
  const GetListDetails = async () => {
    // Extracting user details
    const userDetails = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.primaryEmailAddress?.emailAddress,
      phone: user?.primaryPhoneNumber?.phoneNumber,
      imageUrl: user?.imageUrl,
    };

    console.log(userDetails); //Log the user details for debugging
    setUserDetail(userDetails);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Profile</h1>
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img
            src={userDetail.imageUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold" htmlFor="first-name">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            value={userDetail.firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="last-name">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            value={userDetail.lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={userDetail.email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={userDetail.phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mt-4">
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
