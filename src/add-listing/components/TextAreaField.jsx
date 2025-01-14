import React from "react";
import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ item, handleInputChanges }) => {
  return (
    <div>
      <Textarea
        onChange={(value) => handleInputChanges(item.name, value.target.value)}
        required={item.required}
      />
    </div>
  );
};

export default TextAreaField;
