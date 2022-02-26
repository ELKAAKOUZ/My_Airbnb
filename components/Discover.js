import React from "react";
import Image from "next/image";
function Discover() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 ">
      <h1 className="text-2xl pt-6 md:text-4xl font-semibold">
        Discover Airbnb Experiences
      </h1>
      <div className="lg:flex items-center py-7">
        <div className="relative lg:m-5 mx-auto m-2 h-[650px] min-w-[300px] md:w-[700px]">
          <Image
            className="rounded-2xl"
            src="/imag1.webp"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-20 left-10 max-w-[150px] md:max-w-[300px]">
            <h1 className="text-white text-2xl md:text-4xl font-semibold">
              Things to do on your trip
            </h1>
            <button className="bg-white font-semibold px-6 my-4 p-3 rounded-full active:scale-95 transition duration-200 ease-in-out">
              Experience
            </button>
          </div>
        </div>
        <div className="relative lg:m-5 mx-auto m-2 h-[650px] min-w-[300px] md:w-[700px]">
          <Image
            className="rounded-2xl"
            src="/image2.webp"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-20 left-10 max-w-[150px] md:max-w-[300px]">
            <h1 className="text-white text-2xl md:text-4xl font-semibold">
              Things to do from your Home
            </h1>
            <button className="bg-white font-semibold px-6 my-4 p-3 rounded-full active:scale-95 transition duration-200 ease-in-out">
              Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
