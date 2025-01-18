import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../configs"; // Adjust the path to your database configuration
import { CarListing, CarImages } from "../../configs/schema"; // Adjust paths to schema
import { eq } from "drizzle-orm";
import Header from "@/Common/Header";
import DetailHeaders from "./components/DetailHeaders";
import ImageGallery from "./components/ImageGallery";
import CarDescription from "./components/CarDescription";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Specification from "./components/Specification";
import OwnerDetails from "./components/OwnerDetails";
import FinancialCalculater from "./components/FinancialCalculater";
import MostSearchedCar from "@/MostSearchedCar";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaCommentAlt } from "react-icons/fa"; // Add contact icons for interaction
import Footer from "@/Common/Footer";

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
          console.log(car);
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
    <div className="bg-gray-50">
      <Header />
      <div className="sm:p-10 md:px-20 bg-white rounded-xl shadow-lg mt-5">
        <DetailHeaders car={car} />

        <div className="grid grid-cols-2 md:grid-cols-3  mt-10">
          {/* Left section (Image Gallery, Description, Features, Financial Calculations) */}
          <div className="md:col-span-2 ">
            <ImageGallery car={car} />
            <CarDescription car={car} />
            <Features features={car.CarListing.features} />
          </div>

          {/* Right section (Pricing, Specification, Owner Details) */}
          <div className="bg-gray-100 sm:p-6 rounded-xl shadow-md">
            <Pricing car={car} />
            <Specification car={car} />
            <OwnerDetails car={car} />
          </div>
        </div>
        <FinancialCalculater car={car} />

        <MostSearchedCar />
      </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
