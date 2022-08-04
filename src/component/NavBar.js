import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { a } from "react-router-dom";
import { BiBuildingHouse} from "react-icons/bi";



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 ">
      <nav className="bg-white ">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center  justify-between ">
            <div className="flex items-center justify-end ">
              <div className="flex space-x-3">
                < BiBuildingHouse className="h-8 w-8 text-purple-800" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-purple-900 ">
                  Rent a Property
                </span>
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline justify-between space-x-4 text-gray-900 ">
                  
                    <a
                      href="/"
                      className=" rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700 "
                    >
                      Rent
                    </a>
                    <a
                      href="/"
                      className=" rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700 "
                    >
                      Buy
                    </a>
                    <a
                      href="/"
                      className=" rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700 "
                    >
                      Sell
                    </a>
                    
                 
                </div>
              </div>
            </div>
            <div className="hidden md:block ">
            <button
              type="button"
              class="mr-2 mb-2 rounded-lg outline outline-purple-400 outline-1 px-5 py-2.5 text-sm font-medium text-purple-700 hover:bg-purple-200  "
            >
              Login
            </button>
            <button
              type="button"
              class="mr-2 mb-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700  "
            >
              Sign Up
            </button>
            </div>

            {/* Nav menu for small screen */}

            <div className="-mr-2 flex md:hidden">
              <button
                href="/"
                onClick={() => setIsOpen(!isOpen)}
                type="a"
                className="inline-flex items-center justify-center rounded-md bg-purple-200 p-2 text-gray-900 hover:text-purple-700  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterhref="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leavehref="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="space-y-1 px-2 pt-2 pb-3 text-gray-900 sm:px-3"
              >
                <a
                  href="/"
                  className=" block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-200 hover:text-purple-700"
                >
                  Rent
                </a>

                <a
                  href="/"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-purple-200 hover:text-purple-700"
                >
                  Buy
                </a>

                <a
                  href="/"
                  className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-purple-200 hover:text-purple-700"
                >
                  Sell
                </a>
              </div>
              <div className=" px-5">
              <button
              type="button"
              class="mr-2 mb-2 rounded-lg outline outline-purple-400 outline-1 px-5 py-2.5 text-sm font-medium text-purple-700 hover:bg-purple-200  "
            >
              Login
            </button>
            <button
              type="button"
              class="mr-2 mb-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700  "
            >
              Sign Up
            </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
