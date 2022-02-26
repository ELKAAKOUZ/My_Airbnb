import React from "react";
import Place from "./Place";
const Available_Places = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/7f/28/1e/7f281e69162210b6fb4a0a272849dbad.jpg",
    location: "399 Kilometers away",
    name: "Hurghada",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/36/71/21/367121b67d45123897185154bb85d9a9.jpg",
    location: "360 Kilometers away",
    name: "Dahab",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/f7/fe/53/f7fe53c0fd0c7a2c3750a70ce048b087.jpg",
    location: "180 Kilometers away",
    name: "Alexandria",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/60/70/4a/60704a4caaefc9a18876b58b0c751ab1.jpg",
    location: "113 Kilometers away",
    name: "Ain Sokhna",
  },
];
function Places() {
  return (
    <div className="flex items-center overflow-x-scroll scrollbar-hide p-5 space-x-3">
      {Available_Places.map((pl) => (
        <Place key={pl.id} name={pl.name} img={pl.img} location={pl.location} />
      ))}
    </div>
  );
}

export default Places;
