import React from "react";
function Foot() {
  return (
    <footer className="bg-gray-800 p-4   md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="/"
          className="mb-4 flex items-center sm:mb-0"
        >
          <img
            src="/logo.png"
            className="mr-3 h-8"
            alt=" Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white ">
            Rent a Property
          </span>
        </a>
        <ul className="text-md mb-6 flex flex-wrap items-center  text-gray-500 sm:mb-0">
          <li>
            <a
              href="/"
              className="mr-4 hover:text-white md:mr-6 "
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="mr-4 hover:text-white md:mr-6"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="mr-4 hover:text-white md:mr-6 "
              rel="noreferrer"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white " rel="noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="/" className="hover:text-white" rel="noreferrer">
          Rent a Property™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Foot;