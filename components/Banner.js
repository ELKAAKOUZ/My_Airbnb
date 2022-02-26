import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[600px] sm:h-[620px] lg:h-[800px] xl:h-[810px]">
      <Image src="/banner.png" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-white text-2xl md:text-4xl font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-700 font-semibold bg-white px-10 py-4 border-2 rounded-full my-4 active:scale-90 transition shadow-sm hover:shadow-lg duration-100">
          Im flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
