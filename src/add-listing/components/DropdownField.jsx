import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropdownField = ({ item, handleInputChanges }) => {
  // Ensure `item` and its properties are defined to prevent runtime errors
  if (!item || !item.name || !item.label || !Array.isArray(item.options)) {
    console.error("Invalid `item` prop passed to DropdownField:", item);
    return null;
  }

  return (
    <div className="dropdown-field">
      {/* Dropdown field with options */}
      <Select
        onValueChange={(value) => handleInputChanges(item.name, value)}
        required={item.required || false} // Ensure `required` is a boolean
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label || "Select an option"} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {item.options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownField;
