import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-10">
      <img src="/logo.svg" width={150} height={100} alt="" />
      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary  ">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary  ">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary  ">
          About Us
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary  ">
          Contact Us
        </li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button className="hover:scale-110 hover:text-black hover:bg-white transition-all text-white bg-black">
              Submit Listing
            </Button>
          </Link>
        </div>
      ) : (
        <Link to={"/add-profile"}>
          <Button>Submit Listing</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
