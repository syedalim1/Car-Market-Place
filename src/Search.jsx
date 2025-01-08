import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { FiSearch } from "react-icons/fi";
import CarMakes from '../src/Shared/Data'
import Data from "../src/Shared/Data";
const Search = () => {
  return (
    <div
      className="flex p-2 md:p-5 bg-white rounded-md 
      md:rounded-full flex-col md:flex-row gap-10 px-5 items-center w-[60%]"
    >
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full  shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Used</SelectItem>
          <SelectItem value="system">Certified Pre-Owned</SelectItem>
        </SelectContent>
      </Select>
      <Separator
        orientation="vertical"
        className="hidden md:block bg-red-900"
      />

      <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator
        orientation="vertical"
        className="hidden md:block bg-red-900"
      />

      <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <FiSearch className="text-[50px] bg-black  text-white rounded-full p-3  hover:scale-125 transition-all cursor-pointer" />
      </div>
    
    </div>
    
  );
};

export default Search;
