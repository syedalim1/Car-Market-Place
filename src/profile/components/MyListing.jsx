import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import { FaTrashArrowUp } from "react-icons/fa6";
import Service from "@/Shared/Service"; // For default export
import CarItem from "@/CarItem";

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (user) {
      getUserCarListing();
    }
  }, [user]);

  const getUserCarListing = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carlistingId))
        .where(
          eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
        .orderBy(desc(CarListing.id));

      const formattedResult = Service.FormatResult(result);
      setCarList(formattedResult);

      console.log("User Car Listings:", formattedResult); // Log formatted result
    } catch (error) {
      console.error("Error fetching user car listings:", error);
    }
  };

  return (
    <div className="px-10 md:px-20 my-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-4xl">My Listings</h2>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carList.length > 0 ? (
          carList.map((item, index) => (
            <div key={item.id}>
              {/* Show "New" badge for the latest listing */}

              <CarItem car={item} />

              {/* Action Buttons */}
              <div className="p-2 bg-gray-50 rounded-lg flex justify-around gap-3 w-full">

                <Link to={"/add-listing?mode=edit&id=" + item.id} className="w-full">
                  <Button className="w-full" variant="outline">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  className="bg-red-500 text-white rounded"
                >
                  <FaTrashArrowUp />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No listings available. Click "+ Add New Listing" to create one.
          </div>
        )}
      </div>
    </div>
  );
}

export default MyListing;
