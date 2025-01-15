import IconField from "@/add-listing/components/IconField";
import CarSpecification from "@/Shared/CarSpecification";
import React from "react";

function Specification({ car }) {
  console.log(car);

  return (
    <div className="p-8 rounded-xl border shadow-lg mt-7 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <h2 className="font-semibold text-3xl text-purple-700 mb-6">
        Specifications
      </h2>
      {car ? (
        CarSpecification.map((item, index) => (
          <div
            key={index}
            className="mt-2 flex items-center justify-between shadow-sm p-1 rounded-lg hover:bg-purple-100 transition-all duration-200"
          >
            <h2 className="flex items-center gap-3 text-lg text-blue-600">
              <IconField
                iconName={item.icon}
                className="text-blue-500 text-2xl"
              />
              {item.label}
            </h2>
            <h2 className="font-medium text-gray-700 text-lg">
              {car.CarListing[item.name] || "N/A"}
            </h2>
          </div>
        ))
      ) : (
        <div className="w-full h-[500px] rounded-xl bg-gray-300 animate-pulse"></div>
      )}
    </div>
  );
}

export default Specification;
