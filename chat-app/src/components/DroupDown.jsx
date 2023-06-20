import React from "react";

function DroupDown({header}) {
  return (
    <div class="flex flex-col w-full max-w-md px-4 py-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-2 lg:px-10">
      <div class="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        {header}
      </div>
      <div>
        <form action="#" autoComplete="off">
          <div class="flex flex-col mb-2">
            <div class="flex relative ">
              <input
                type="text"
                id="sign-in-email"
                class=" rounded-lg flex-1 appearance-none bg-black border border-gray-300 w-full py-2 px-4  text-gray-700 placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-1 focus:border-transparent"
                placeholder="Your Group Name"
              />
            </div>
          </div>
            <div class="flex items-center mt-2 mb-1">
              <div class="flex ml-auto">
                <a
                  href="#"
                  class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                >
                 Eaxmple (Tom, Jerrey,...)
                </a>
              </div>
            </div>
          <div class="flex flex-col mb-6">
            <div class="flex relative ">
              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-black border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="sign-in-email"
                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-black text-gray-200 placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-1"
                placeholder="Search Friend"
              />
            </div>
          </div>
          <div class="flex w-full">
            <button
              type="submit"
              class="py-2 px-4  bg-gray-900 hover:bg-gray-600 focus:ring-black  text-gray-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              submit
            </button>
          </div>
        </form>
      </div>
      {/* <div class="flex items-center justify-center mt-6">
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
        >
          <span class="ml-2">You don&#x27;t have an account?</span>
        </a>
      </div>*/}
    </div> 
  );
}

export default DroupDown;
