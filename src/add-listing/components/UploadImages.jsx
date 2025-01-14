import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { db } from "../../../configs"; // Firestore config
import { CarImages } from "../../../configs/schema";

const UploadImages = forwardRef(({ triggerUpload }, ref) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const cld = new Cloudinary({ cloud: { cloudName: "duutgarew" } });

  const [id, setId] = useState();

  // Handle file selection
  const onFileSelected = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  useEffect(() => {
    if (triggerUpload) {
      console.log("Trigger Upload ID:", triggerUpload);
      setId(triggerUpload);
      onSubmit();
    }
  }, [triggerUpload]);

  // Upload files to Cloudinary
  const uploadFiles = async () => {
    const uploadedUrls = [];
    try {
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "car-market");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/duutgarew/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Cloudinary upload failed with status ${response.status}`
          );
        }

        const data = await response.json();
        uploadedUrls.push(data.secure_url);

        // Update progress state
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: 100,
        }));
      }
      return uploadedUrls;
    } catch (error) {
      console.error("Error during upload process:", error);
      return [];
    }
  };

  // Save image URLs to the database
  const onSubmit = async () => {
    try {
      if (!triggerUpload) {
        console.error("CarListing ID is not defined.");
        return;
      }

      const uploadedUrls = await uploadFiles();

      if (uploadedUrls.length === 0) {
        console.error("No files were uploaded.");
        return;
      }

      // Loop through uploaded URLs and save them to the database with the correct CarListing ID
      for (const url of uploadedUrls) {
        const result = await db.insert(CarImages).values({
          imageUrl: url, // Save the imageUrl (from Cloudinary)
          carlistingId: triggerUpload, // Use triggerUpload as the CarListing ID
        });

        if (result) {
          console.log("Data saved successfully:", result);
        } else {
          console.error("Failed to save data.");
        }
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  useImperativeHandle(ref, () => ({
    uploadFiles,
  }));

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3 text-gray-700">
        Upload Car Images
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative group border rounded-xl">
            <img
              src={URL.createObjectURL(file)}
              alt={`Preview ${index}`}
              className="h-32 w-full object-cover"
            />
            <button
              onClick={() => removeFile(index)}
              className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full"
            >
              ✕
            </button>
            {uploadProgress[file.name] && (
              <div className="absolute bottom-0 left-0 right-0 bg-purple-500 text-white text-xs text-center">
                {uploadProgress[file.name]}%
              </div>
            )}
          </div>
        ))}
        <label htmlFor="upload-images" className="border-dotted border">
          <div className="p-10">Add Images</div>
        </label>
        <input
          type="file"
          multiple
          id="upload-images"
          className="hidden"
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
});

export default UploadImages;
