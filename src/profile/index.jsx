import Header from "@/Header";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiUser, FiLock, FiSettings } from "react-icons/fi"; // Importing icons from react-icons
import MyListing from "./components/MyListing";
import Inbox from "./components/Inbox";
import { MdMessage } from "react-icons/md";


const Profile = () => {
  return (
    <div>
      <Header />

      <Tabs
        defaultValue="my-listing"
        className="w-full  p-6 bg-white rounded-lg shadow-xl"
      >
        {/* Tabs List with Icons */}
        <TabsList className="flex justify-around bg-gradient-to-r from-blue-500 to-green-500 text-white p-2 rounded-md shadow-lg ">
          <TabsTrigger
            value="my-listing"
            className="flex items-center gap-2 py-2 px-4 rounded-lg hover:scale-105 transition-transform focus:ring-2 focus:ring-white "
          >
            <FiUser className="text-lg" />
            My Listing
          </TabsTrigger>

          <TabsTrigger
            value="inbox"
            className="flex items-center gap-2 py-2 px-4 rounded-lg hover:scale-105 transition-transform focus:ring-2 focus:ring-white "
          >
            <MdMessage className="text-lg" />
            Inbox
          </TabsTrigger>

          <TabsTrigger
            value="profile"
            className="flex items-center gap-2 py-2 px-4 rounded-lg hover:scale-105 transition-transform focus:ring-2 focus:ring-white"
          >
            <FiSettings className="text-lg" />
            Profile
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="my-listing" className="mt-6">
          <MyListing />
        </TabsContent>

        <TabsContent value="inbox" className="mt-6">
          {" "}
          <Inbox />
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <Profile />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
