import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { BsStars, BsTriangleFill } from "react-icons/bs";
// import { VscTriangleDown } from "react-icons/vs";

function Houses({ house }) {
  return (
    <div className="">
      <div className="relative max-w-sm rounded-lg bg-white shadow-md hover:shadow-xl">
        <img className="rounded-t-lg  " src={house.image} alt={house.title} />

        <div className=" absolute z-10 -mt-5 -ml-3 flex  items-center gap-x-1 rounded-tl-lg rounded-tr-md rounded-br-lg bg-purple-700 py-1 px-7 text-white ">
          {" "}
          <BsStars /> POPULAR
        </div>
        <BsTriangleFill className=" absolute  -ml-2.5 rotate-12  text-purple-900" />
        <div className="flex justify-between px-5 pt-8">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-purple-700 ">
            ${house.price}
            <span className=" text-sm font-normal text-gray-500">/month</span>
          </h5>
          <span className=" flex h-10 w-10 items-center justify-center  rounded-full border border-purple-700 text-xl text-purple-800 ">
            <AiOutlineHeart />
          </span>
        </div>
        <div className="space-y-4  px-5 ">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  line-clamp-1 ">
              {house.title}
            </h5>
          </a>
        </div>
        <div className="divide-y-2 px-5">
          <p className="mb-3 font-normal text-gray-700 line-clamp-1   ">{house.address}</p>
          <div className="flex flex-wrap justify-between py-3">
            <p className="flex items-center py-2   ">
              <span className=" text-purple-800 ">
                <BiBed />
              </span>
              <span className="px-1 text-sm text-gray-700">
                {house.bedrooms} Beds
              </span>
            </p>
            <p className="flex items-center   ">
              <span className=" text-purple-800 ">
                <BiBath />
              </span>
              <span className="px-1 text-sm text-gray-700">
                {house.bathrooms} Bathrooms
              </span>
            </p>
            <p className=" flex items-center   ">
              <span className=" text-purple-800 ">
                <BiArea />
              </span>
              <span className="px-1 text-sm text-gray-700">
                {house.surface}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Houses;
