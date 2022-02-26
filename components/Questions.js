import React from "react";
import Image from "next/image";

function Questions() {
  return (
    <section className=" relative h-[500px] md:h-[800px] md:max-w-[1100px] md:mx-auto mb-10">
      <Image
        className="lg:rounded-xl"
        src="/questions.jpg"
        layout="fill"
        objectFit="cover"
      />
      <h1 className="absolute left-10 top-10 font-semibold text-4xl md:text-5xl md:left-20 text-white max-w-[150px]">
        Questions about hosting?
      </h1>
      <button className="absolute left-10 bottom-10 md:left-20 rounded-xl font-semibold bg-white p-3 px-6">
        Ask a Superhost
      </button>
    </section>
  );
}

export default Questions;
