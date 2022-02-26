import React from "react";
import Image from "next/image";

function Place({ img, location, name }) {
  return (
    <div className=" relative hover:scale-95 transition duration-200 ease-in-out cursor-pointer   h-64 w-64 flex-none m-7 mx-auto ">
      <Image className="rounded-2xl" src={img} layout="fill" />
      <div className="absolute top-1/2 text-white text-xl font-semibold p-3">
        <h1 className="text-4xl">{name}</h1>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Place;
