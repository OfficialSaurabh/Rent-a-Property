import React, { useContext } from "react";

// import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import Date from "./MoveInDate";
// import context
import { HouseContext } from "../context/HouseContext";

// import icon
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className=" bg-gray-100">
      <div className="   mx-auto w-3/4">
        <p className="py-7 text-4xl font-bold text-black">
          {" "}
          Search properties to rent
        </p>
        <div className="relative divide-x  flex flex-col bg-white  gap-4 rounded-lg  px-8 py-6 lg:-top-4  lg:flex-row  lg:gap-x-3">
          <CountryDropdown />
          <Date/>
          <PriceRangeDropdown />
          <PropertyDropdown />
          <div className="flex justify-center ">
          <button
            onClick={() => {
              handleClick();
            }}
            className=" h-16 w-full md:w-28  flex items-center justify-center rounded-lg bg-indigo-700 text-lg text-white transition hover:bg-indigo-800 "
          >
            <p className=" px-2">Search</p>
            <RiSearch2Line />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
