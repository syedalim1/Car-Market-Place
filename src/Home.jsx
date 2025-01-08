import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Header from "./Header";
import Hero from "./Hero";
import Category from "./Category";
import MostSearchedCar from "./MostSearchedCar";

function Home() {
  return (
    // Header
    <div>
      <Header />
      <Hero/>
      <Category/>
      <MostSearchedCar/>
    </div>
    // Hero
  );
}

export default Home;
