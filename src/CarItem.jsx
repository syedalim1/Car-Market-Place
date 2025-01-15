import React from "react";
import { Separator } from "@/components/ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { Link, useParams } from "react-router-dom"; // Import Link for navigation

const CarItem = ({ car }) => {
 
  return (
    <Link to={`/car-details/${car.id}`}>
      <div className="relative border rounded-lg shadow-lg p-4 bg-white">
        {/* New Badge */}
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          New
        </div>

        {/* Image */}
        <img
          src={car?.images?.[0] || "default-image.jpg"} // Fallback to a default image if no car image
          alt={car?.listing_title || "Car"}
          className="rounded-t-xl w-full h-48 object-cover mb-4"
        />

        {/* Car Title */}
        <div>
          <h2 className="font-bold text-black text-lg mb-2">
            {car?.listing_title}
          </h2>
        </div>

        <Separator className="bg-black" />

        {/* Car Details (Fuel, Mileage, Gear Type) */}
        <div className="grid grid-cols-3 mt-5 text-center">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car?.mileage || "N/A"} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandSpeedtest className="text-lg mb-2" />
            <h2>{car?.fuel_type || "N/A"}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car?.transmission || "N/A"}</h2>
          </div>
        </div>

        <Separator className="my-2 bg-black" />

        {/* Price and View Details */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">${car?.selling_price || "0.00"}</h2>

          <button className="mt-3 bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition-all">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
