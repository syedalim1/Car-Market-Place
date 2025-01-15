import React from "react";

function CarDescription({ car }) {
  return (
    <div>
      {car.CarListing.listing_description ? (
        <div className="p-10 rounded-xl bg-white shadow-md">
          <h2 className="my-2 font-medium text-2xl mt-6 border">
            Descripition
          </h2>
          <p>{car.CarListing.listing_description}</p>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-200 animate-pulse rounded-xl mt-7"></div>
      )}{" "}
    </div>
  );
}

export default CarDescription;
