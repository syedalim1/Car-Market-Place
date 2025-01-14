import React, { useEffect, useState } from "react";

import CarItem from "./CarItem"; // Importing the CarItem component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Carousel components
import Service from "./Shared/Service";
import { desc, eq } from "drizzle-orm";
import { db } from "../configs";
import { CarImages, CarListing } from "../configs/schema";

const MostSearchedCar = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carlistingId))
        .orderBy(desc(CarListing.id));

      const formattedResult = Service.FormatResult(result);
      setCarList(formattedResult);

    
    } catch (error) {
      console.error("Error fetching user car listings:", error);
    }
  };

  return (
    <div className="mx-24">
      {/* Section Title */}
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Cars
      </h2>

      {/* Carousel Component */}
      <Carousel>
        {/* Carousel Content */}
        <CarouselContent>
          {/* Mapping through the car list and displaying CarItem for each */}
          {carList.map((car, index) => (
            <CarouselItem className="basis-1/4" key={index}>
              <CarItem car={car} /> {/* Display each car in a carousel item */}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation Buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
