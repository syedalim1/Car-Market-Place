import React from "react";

function CarDescription({ car }) {
  return (
    <div className="">
      {car.CarListing.listing_description ? (
        <div className="sm:p-8 p-2 rounded-xl bg-white shadow-xl h-[470px] sm:h-[500px]">
          <h2 className="my-4 font-semibold sm:text-2xl text-xl border-b pb-3">
            Description
          </h2>
          <div className="max-h-[350px] overflow-auto ">
            <p className="text-[12px]">{car.CarListing.listing_description}</p>
          </div>
        </div>
      ) : (
        <div className="w-full  bg-slate-200 animate-pulse rounded-xl mt-7"></div>
      )}
    </div>
  );
}

export default CarDescription;
