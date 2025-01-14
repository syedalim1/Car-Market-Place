import Header from "@/Header";
import React, { useState, useRef } from "react";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";
import { Label } from "@radix-ui/react-label";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import features from "./../Shared/features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "./../../configs";
import { CarListing } from "./../../configs/schema";
import UploadImages from "./components/UploadImages";
import IconField from "./components/IconField";
import { AiOutlineLoading } from "react-icons/ai"; // React icon for loading animation
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

function AddListing() {
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState([]);
  const imageUploaderRef = useRef(null);
  const [triggerUpload, setTriggerUpload] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state
  const { toast } = useToast();
const navigate=useNavigate();


  const handleInputChanges = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Form Data:", formData);
  };

  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader when form is submitted
    console.log("Submitting Form:", formData);
    toast({
      title: "Please Wait .......",
    });

    try {
      // Insert car listing data into the database and retrieve the inserted record
      const result = await db
        .insert(CarListing)
        .values({
          listing_title: formData.listing_title || "Untitled Listing",
          ...formData,
          features: JSON.stringify(featuresData), // Convert features to JSON string if needed by the DB schema
        })
        .returning({ id: CarListing.id });

      if (result.length > 0) {
        const carListingId = result[0].id;
        console.log("Data Saved Successfully, CarListing ID:", carListingId);

        // Set the triggerUpload state to the new CarListing ID
        setTriggerUpload(carListingId);

        // Trigger image uploads with the new ID
        const uploadedImageUrls = await imageUploaderRef.current.uploadFiles();

        console.log("Uploaded Image URLs:", uploadedImageUrls);
      } else {
        console.error("Failed to retrieve CarListing ID");
      }
    } catch (error) {
      console.error("Error Saving Data:", error);
    } finally {
      setLoading(false); // Stop loader after the operation is complete
      toast({
        title: "SuccessFull Uploaded",
      });

    }
  };

  return (
    <div>
      <Header />

      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl text-center text-blue-600">
          🚗 Add New Car Listing
        </h2>

        <form
          onSubmit={onSubmit}
          className="p-10 border rounded-xl mt-10 shadow-lg bg-white"
        >
          <div>
            <h2 className="font-medium text-xl mb-6 text-gray-700">
              Car Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {carDetails.carDetails.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex gap-1">
                    <IconField iconName={item.icon} />
                    <Label
                      htmlFor={item?.name}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {item?.label}
                      {item.required && (
                        <span className="text-red-500"> *</span>
                      )}
                    </Label>
                  </div>
                  {item?.fieldType === "text" ||
                  item?.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInputChanges={handleInputChanges}
                    />
                  ) : item?.fieldType === "dropdown" &&
                    Array.isArray(item.options) ? (
                    <DropdownField
                      item={item}
                      handleInputChanges={handleInputChanges}
                    />
                  ) : item?.fieldType === "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChanges={handleInputChanges}
                    />
                  ) : null}
                </div>
              ))}
            </div>
            <Separator className="text-black pb-5" />
            Features List
            <div>
              <h2 className="font-medium text-xl my-6">Features</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeaturesChange(item.name, value)
                    }
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
            <Separator className="text-black pb-5" />
            <Separator className="my-6" />
            <UploadImages
              ref={imageUploaderRef}
              triggerUpload={triggerUpload}
              
            />
            <Button
              type="submit"
              className="mt-10 bg-green-500 text-white py-2 px-4 rounded"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin" size={24} />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
