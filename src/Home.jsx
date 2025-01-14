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
import InfoSection from "./components/ui/InfoSection";
import Footer from "./components/ui/Footer";

function Home() {
  return (
    // Header
    <div>
      <Header />

      <Hero />
      <Category />
      <MostSearchedCar />
      <InfoSection />
      <Footer />
      <SignedIn />
    </div>
    // Hero
  );
}

export default Home;
