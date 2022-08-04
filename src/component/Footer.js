import React from "react";
import { BiBuildingHouse} from "react-icons/bi";

function Foot() {
  return (
    <footer className="bg-white p-4   md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="/"
          className="mb-4 flex items-center sm:mb-0"
        >
          {/* <img
            src="/logo.png"
            className="mr-3 h-8"
            alt=" Logo"
          /> */}
          < BiBuildingHouse className="h-8 w-8 mr-3  text-purple-800" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold  text-purple-800 ">
            Rent a Property
          </span>
        </a>
        <ul className="text-md mb-6 flex flex-wrap items-center  text-gray-900 sm:mb-0">
          <li>
            <a
              href="/"
              className="mr-4 hover:text-purple-700 md:mr-6 "
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="mr-4 hover:text-purple-700 md:mr-6"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="mr-4 hover:text-purple-700 md:mr-6 "
              rel="noreferrer"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-purple-700 " rel="noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700  sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-900 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="/" className="hover:text-purple-700" rel="noreferrer">
          Rent a Property™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Foot;