import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png"
import Authchecker from "../Authchecker";

export default function Navbar() {

  const islogin=Authchecker();

  const handleLogout=()=>{
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5173/";
  }
  return (
    <div className="sticky top-0 flex h-14 justify-between ietms-center p-2 bg-neutral-700 mb-2">
      <NavLink to="/" end>
      <img className="w-10 h-10  rounded-lg " src={logo} alt="" />
      </NavLink>
      <p className="items-center text-2xl py-1 md:text-xl">Chat App</p>
      <div className=" flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer bg-black rounded-lg  hover:bg-sky-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer  bg-black rounded-lg  hover:bg-sky-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        {islogin ? 
        (<NavLink 
          className=" text-white bg-black border border-sky-500 rounded-lg p-2 hover:bg-sky-500 hover:text-white md:p-1"
          onClick={handleLogout}
        >
          Log Out
        </NavLink>)

        :(<div className="flex items-center gap-2">
        <NavLink to="/signup"
          className=" text-white bg-black border border-sky-500 rounded-lg p-2 hover:bg-sky-500 hover:text-white md:p-1 "
        >
          Sign up
        </NavLink>
        <NavLink to="/signin"
          className=" text-white bg-black border border-sky-500 rounded-lg p-2 hover:bg-sky-500 hover:text-white md:p-1"
        >
          Log IN
        </NavLink>
        </div>
        )}

      </div>
    </div>
  );
}
