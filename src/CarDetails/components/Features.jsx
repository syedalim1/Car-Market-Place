import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Features({ features }) {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
  return (
    <div className="p-5 sm:my-20 sm:mt-2   ">
      {/* Scroll Down Button */}

      {/* Features Section */}
      <h2 className="font-semibold sm:text-3xl text-xl text-purple-700 mb-6">
        Features
      </h2>
      <div
        id="features-section"
        className="flex flex-col justify-start gap-2 h-[380px] overflow-y-auto scroll-smooth"
      >
        {Object.entries(features).map(([featureKey, value]) => (
          <div
            key={featureKey}
            className=" flex gap-2 items-center cursor-pointer"
          >
            <IoMdCheckmarkCircleOutline className="text-xl text-blue-600" />
            <span className="text-gray-700 text-sm font-bold sm:text-xl">
              {featureKey}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
