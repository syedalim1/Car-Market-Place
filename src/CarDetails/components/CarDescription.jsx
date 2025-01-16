import React from "react";

function CarDescription({ car }) {
  return (
    <div>
      {car.CarListing.listing_description ? (
        <div className="p-8 rounded-xl bg-white shadow-xl">
          <h2 className="my-4 font-semibold text-2xl border-b pb-3">
            Description
          </h2>
          <p>{car.CarListing.listing_description}</p>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-200 animate-pulse rounded-xl mt-7"></div>
      )}
    </div>
  );
}

export default CarDescription;
