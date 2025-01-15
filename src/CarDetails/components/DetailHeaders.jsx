import React from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";
const DetailHeaders = ({ car }) => {
  return (
    <div>
            {car.CarListing.listing_title?
      <div>
        <h2 className="font-bold text-3xl">{car.CarListing.listing_title}</h2>
        <p className="text-sm">{car.CarListing.tagline}</p>
        <div className="flex gap-2 mt-3">
          <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2  px-3">
            <BsFillCalendar2WeekFill className="h-7 w-7 text-blue-700 " />
            <h2 className="text-blue-700 text-sm">{car.CarListing?.year}</h2>
          </div>
          <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2  px-3">
            <IoSpeedometerSharp className="h-7 w-7 text-blue-700 " />
            <h2 className="text-blue-700 text-sm">{car.CarListing?.mileage}</h2>
          </div>
          <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2  px-3">
            <GiGearStickPattern className="h-7 w-7 text-blue-700 " />
            <h2 className="text-blue-700 text-sm">
              {car.CarListing?.transmission}
            </h2>
          </div>
          <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
            <FaGasPump className="h-7 w-7 text-blue-700 " />
            <h2 className="text-blue-700 text-sm">
              {car.CarListing?.transmission}
            </h2>
          </div>
        </div>
      </div>:
      <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"> 

      </div>}
      
    </div>
  );
};

export default DetailHeaders;
