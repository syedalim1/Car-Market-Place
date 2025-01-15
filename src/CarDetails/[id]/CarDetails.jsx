import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../configs"; // Adjust the path to your database configuration
import { CarListing, CarImages } from "../../../configs/schema"; // Adjust paths to schema
import { eq } from "drizzle-orm";
import Header from "@/Header";
import DetailHeaders from "../components/DetailHeaders";

const CarDetails = () => {
  const { id } = useParams(); // Get car ID from the URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const result = await db
          .select()
          .from(CarListing)
          .innerJoin(CarImages, eq(CarImages.carlistingId, CarListing.id))
          .where(eq(CarListing.id, id));

        if (result.length > 0) {
          setCar(result[0]);
        } else {
          console.error("Car not found!");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <p>Loading car details...</p>;
  }

  return (
    <div className="">
      <Header />
      <div className="p-10 md:px-20">
        <DetailHeaders car={car} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <img
            src={car?.images?.[0] || "/placeholder-image.png"}
            alt={car.CarListing.title}
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{car.CarListing.title}</h1>
          <p className="text-lg text-gray-600 mb-4">
            {car.CarListing.description}
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xl font-semibold text-green-600">
              ${car.CarListing.price}
            </span>
            <span className="text-sm text-gray-500">
              Condition: {car.CarListing.condition}
            </span>
          </div>
          <div className="mt-5">
            <ul className="list-disc list-inside">
              <li>
                <strong>Make:</strong> {car.CarListing.make}
              </li>
              <li>
                <strong>Model:</strong> {car.CarListing.model}
              </li>
              <li>
                <strong>Year:</strong> {car.CarListing.year}
              </li>
              <li>
                <strong>Mileage:</strong> {car.CarListing.mileage} miles
              </li>
              <li>
                <strong>Fuel Type:</strong> {car.CarListing.fuelType}
              </li>
            </ul>
          </div>
          <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-all">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
