import React, { useState } from "react";
import { FaRegCheckSquare, FaCheckSquare } from "react-icons/fa";

function Features({ features }) {
  const [checkedFeatures, setCheckedFeatures] = useState(features);

  const handleCheckboxChange = (featureKey) => {
    setCheckedFeatures((prev) => ({
      ...prev,
      [featureKey]: !prev[featureKey],
    }));
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-5 sm:my-20 mt-2 border  py-7 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Scroll Down Button */}

      {/* Features Section */}
      <h2 className="font-medium sm:text-2xl text-xl text-gray-800 mb-5 sticky fixed">
        Features
      </h2>
      <div
        id="features-section"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[300px] overflow-y-auto"
      >
        {Object.entries(features).map(([featureKey, value]) => (
          <div
            key={featureKey}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleCheckboxChange(featureKey)}
          >
            {checkedFeatures[featureKey] ? (
              <FaCheckSquare className="text-blue-500 text-[15px] sm:text-xl" />
            ) : (
              <FaRegCheckSquare className="text-gray-400 text-[15px] sm:text-xl" />
            )}
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
