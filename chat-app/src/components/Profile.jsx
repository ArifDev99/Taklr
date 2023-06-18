import React, { useState } from "react";
import { ChatState } from "../Contex/chatProvider";
import UserListItem from "./UserListItem";

export default function Profile() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const {
    user
  } = ChatState();

  const handleSearch= async ()=>{

    try {
      const config={
        headers:{
          Authorization:`Bearer ${user.accessToken}`
        }
      }
      
      const fetchdata=await fetch(`http://localhost:4000/api/v1/user?search=${search}`,config).then((res)=>res.json())
      setSearchResult(fetchdata)
      console.log(fetchdata);
    } catch (error) {

      alert("Cannot fetch");
      
    }

  }

  return (
    
    <div className="flex justify-center items-center ml-0.5 w-full overflow-hidden">
      
      <div className=" flex flex-col justify-between w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className=" m-0 -mr-0.5 block w-[1px] bg-black min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600  dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            onChange={(e)=>setSearch(e.target.value)}
          />

          <button
            className="  flex items-center rounded-r bg-primary px-2 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-slate-600 hover:shadow-lg  focus:shadow-lg focus:outline-none "
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col text-white">
          {searchResult?.map((search_User) => (
                  <UserListItem
                    key={search_User._id}
                    search_User={search_User}
                    // handleFunction={() => accessChat(user._id)}
                  />
                ))
          }

        </div>
        <div className="hidden px-4 pt-4 ">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="#"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
