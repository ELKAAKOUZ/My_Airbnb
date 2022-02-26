import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="  sticky bg-white top-0 z-50">
      <div className="p-1 shadow-md sm:hidden">
        <div className="flex items-center bg-gray-200 m-3 border-2 p-3 rounded-full">
          <SearchIcon className="h-7 mx-auto bg-red-500 rounded-full  text-white" />
          <input
            className="outline-none  placeholder:text-black  bg-transparent"
            type="text"
            placeholder="Where are you going?"
          />
        </div>
      </div>
      <div className="hidden shadow-md sm:grid grid-cols-3 p-5">
        <div className="relative  h-10 flex items-center">
          <Image
            className="cursor-pointer"
            src="/logo.png"
            objectFit="contain"
            layout="fill"
            objectPosition="left"
          />
        </div>
        <div className="flex shadow-sm border-2 items-center rounded-full p-2">
          <input
            className="outline-none  flex-grow bg-transparent px-2"
            type="text"
            placeholder="Start your search"
          />
          <SearchIcon className="cursor-pointer hidden lg:inline-flex h-10 w-10 font-bold  text-white rounded-full bg-red-400 p-3" />
        </div>
        <div className="flex items-center text-gray-400 space-x-4 justify-end">
          <p className="hidden lg:inline-flex  hover:bg-gray-200 cursor-pointer px-2 p-2 rounded-full">
            become a host
          </p>
          <GlobeAltIcon className="h-10 hover:bg-gray-200 cursor-pointer p-1 rounded-full" />
          <div className="hover:shadow-md cursor-pointer flex items-center border-2 p-2 rounded-full">
            <MenuIcon className="h-8" />
            <UserCircleIcon className="h-8" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
