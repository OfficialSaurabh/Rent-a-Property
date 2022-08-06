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
        <p className="py-7 sm:text-4xl text-2xl font-bold text-black">
          {" "}
          Search properties to rent
        </p>
        <div className="relative flex  flex-col gap-4 divide-x rounded-lg  bg-white py-2  shadow-md lg:-top-4 lg:flex-row  lg:gap-x-0  lg:px-0">
          <CountryDropdown />
          <Date />
          <PriceRangeDropdown />
          <PropertyDropdown />
          <div className="flex justify-center ">
            <button
              onClick={() => {
                handleClick();
              }}
              className=" mx-2 flex h-16 w-full  items-center justify-center rounded-lg bg-purple-700 text-lg text-white transition hover:bg-purple-900 md:w-28 "
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
