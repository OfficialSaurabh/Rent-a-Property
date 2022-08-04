import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

function Houses({ house }) {
  return (
    <div className="">
      <div class="max-w-sm rounded-lg bg-white shadow-md hover:shadow-xl">
        <a href="/">
          <img class="rounded-t-lg  " src={house.image} alt={house.title} />
        </a>
        <div className="flex justify-between px-5 pt-3">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-purple-700 ">
            ${house.price}
            <span className=" text-sm font-normal text-gray-500">/month</span>
          </h5>
          <span className=" flex h-10 w-10 items-center justify-center  rounded-full border border-purple-700 text-xl text-purple-800 ">
            <AiOutlineHeart />
          </span>
        </div>
        <div class="space-y-4  px-5 ">
          <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {house.title}
            </h5>
          </a>
        </div>
        <div className="divide-y-2 px-5">
          <p class="mb-3 font-normal text-gray-700   ">{house.address}</p>
          <div className="flex flex-wrap justify-between pt-3">
            <p class="flex items-center py-4  ">
              <span className=" text-purple-800 ">
                <BiBed />
              </span>
              <span className="px-1 text-sm text-gray-700">
                {house.bedrooms} Beds
              </span>
            </p>
            <p class="flex items-center py-4  ">
              <span className=" text-purple-800 ">
                <BiBath />
              </span>
              <span className="px-1 text-sm text-gray-700">
                {house.bathrooms} Bathrooms
              </span>
            </p>
            <p class=" flex items-center py-4  ">
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
