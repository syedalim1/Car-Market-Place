import React, { useState } from "react";
import { FaRegCheckSquare, FaCheckSquare } from "react-icons/fa";

function Features({ features }) {
  // State to control checkbox values
  const [checkedFeatures, setCheckedFeatures] = useState(features);

  // Handle checkbox change
  const handleCheckboxChange = (featureKey) => {
    setCheckedFeatures((prev) => ({
      ...prev,
      [featureKey]: !prev[featureKey], // Toggle the checkbox value
    }));
  };

  return (
    <div className="p-5 border shadow-md rounded-xl my-7 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <h2 className="font-medium text-2xl text-gray-800 mb-5">Features</h2>
      {/* Iterating over the features object */}
      <div className="grid grid-cols-2 md:grid-cols-3  gap-8">
        {Object.entries(features).map(([featureKey, value]) => {
          return (
            <div
              key={featureKey}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleCheckboxChange(featureKey)} // Handle change on click
            >
              {/* Toggle between checked and unchecked icons */}
              {checkedFeatures[featureKey] ? (
                <FaCheckSquare className="text-blue-500 text-xl" />
              ) : (
                <FaRegCheckSquare className="text-gray-400 text-xl" />
              )}
              <span className="text-gray-700">{featureKey}</span>{" "}
              {/* Display feature name */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
