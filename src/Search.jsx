import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { FiSearch } from "react-icons/fi";
import Data from "../src/Shared/Data"; // Ensure the `Data` object is correctly imported
import { Link } from "react-router-dom";

const Search = () => {
  const [car, setCar] = useState("");
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div
      className="flex p-2 md:p-5 bg-white rounded-md 
      md:rounded-full flex-col md:flex-row gap-10 px-5 items-center w-[100%]"
    >
      {/* Car Type Selection */}
      
      <Select onValueChange={(value) => setCar(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre-Owned">
            Certified Pre-Owned
          </SelectItem>
        </SelectContent>
      </Select>

      <Separator
        orientation="vertical"
        className="hidden md:block bg-red-900"
      />

      {/* Car Make Selection */}
      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator
        orientation="vertical"
        className="hidden md:block bg-red-900"
      />

      {/* Price Selection */}
      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.Pricing.map((price, index) => (
            <SelectItem key={index} value={price.amount}>
              {price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button */}
      
        <Link to={`/searching?cars=${car}&make=${make}&price=${price}`}>
          <FiSearch className="text-[50px] bg-black text-white rounded-full p-3 hover:scale-125 transition-all cursor-pointer" />
        </Link>
      
    </div>
  );
};

export default Search;
