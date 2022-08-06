import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiBuildingHouse } from "react-icons/bi";
import NavLinkDropdown from "./ManagePropertyDropdown";
import ResourceDropdown from "./ResourceDropdown";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0 z-50 ">
      <nav className="w-full bg-white shadow">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              <div className="flex space-x-3">
                <BiBuildingHouse className="h-8 w-8 text-purple-800" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-purple-900 ">
                  Rent a Property
                </span>
              </div>
              <div className="md:hidden ">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700">
                <a
                  href="/"
                  className=" "
                >
                  Rent
                </a>
                </li>
                <li className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700">
                <a
                  href="/"
                  className=""
                >
                  Buy
                </a>
                </li>
                <li className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700">
                <a
                  href="/"
                  className=""
                >
                  Sell
                </a>
                </li>
                <li className="">
                <NavLinkDropdown />
                </li>
                <li className="">
                <ResourceDropdown />
                </li>
                <li className="">
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium text-purple-700 outline outline-1 outline-purple-400 hover:bg-purple-200  "
                >
                  Login
                </button>
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700  "
                >
                  Sign Up
                </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
