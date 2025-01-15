import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function OwnerDetails({ car }) {
  const { user } = useUser();
  const navigation = useNavigate();

  const onMessageOwnerButtonClick = async () => {
    const ownerUserId = car?.CarListing.createdBy.split("@")[0];
    const userId = user?.primaryEmailAddress?.emailAddress.split("@")[0];

    try {
      if (!user) {
        console.error("User is not logged in.");
        return;
      }

      if (!userId || !user?.fullName || !user?.imageUrl) {
        console.error("User information is incomplete.");

        return;
      }

      const response = await Service.CreateSendBirdUser(
        userId,
        user.fullName,
        user.imageUrl
      );
      console.log("Response from SendBird:", response);
    } catch (error) {
      console.error("Error messaging the owner:", error);
    }

    try {
      console.log(ownerUserId);
      const response = await Service.CreateSendBirdUser(
        ownerUserId,
        car?.CarListing.username,
        car?.CarListing.userImageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (error) {}

    try {
      const response = await Service.CreateSendBirdChannel(
        [ownerUserId, userId],
        car?.CarListing.listing_title
      ).then((resp) => {
        console.log(resp);
        console.log(" Created Channel ");
        navigation("/profile");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 border rounded-xl shadow-lg m-7 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="text-center">
        <h2 className="font-semibold text-3xl text-purple-700 mb-4">
          Owner/Dealer Details
        </h2>
        <img
          src={car?.CarListing?.userImageUrl || "default-avatar.jpg"}
          alt="Owner"
          className="h-[80px] w-[80px] rounded-full mx-auto border-4 border-purple-500 shadow-md"
        />
        <h2 className="font-bold text-2xl mt-4 text-blue-700">
          {car?.CarListing?.fullName || "Unknown User"}
        </h2>
      </div>
      <h3 className="text-gray-600 text-lg mt-2 text-center">
        {car?.CarListing?.createdBy || "Unknown Creator"}
      </h3>
      <Button
        onClick={onMessageOwnerButtonClick}
        className="w-full mt-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-purple-500 hover:to-blue-500 shadow-md transition-all duration-300"
      >
        Message Owner for More Details
      </Button>
    </div>
  );
}

export default OwnerDetails;
