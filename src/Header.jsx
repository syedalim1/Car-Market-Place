import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-sm p-10  bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Logo Section */}
      <Link to={"/"}>
        <img src="/logo.svg" width={150} height={100} alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-16">
        <Link to={"/"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </Link>
        <Link to={"/search"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Search
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            About Us
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Contact Us
          </li>
        </Link>
      </ul>

      {/* Sign In/Sign Out and UserButton */}
      <div className="flex items-center gap-5">
        <SignedIn>
          {/* User is Signed In */}
          <UserButton />
          <Link to={"/profile"}>
            <Button className="hover:scale-110 hover:text-black hover:bg-white transition-all text-white bg-black">
              Profile
            </Button>
          </Link>
          <Link to={"/add-listing"}>
            <Button className="hover:scale-110 hover:text-black hover:bg-white transition-all text-white bg-black">
              Submit Listing
            </Button>
          </Link>
        </SignedIn>

        <SignedOut>
          {/* User is Signed Out */}
          <SignInButton>
            <Button className="hover:scale-110 hover:text-black hover:bg-white transition-all text-white bg-black">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
