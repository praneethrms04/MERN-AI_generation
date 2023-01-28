import React from "react";
import { download } from "../assets";

const Card = () => {
  return (
    <div className="card rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="image"
        className="w-full h-auto object-cover rounded-xl"
      />

      <div className="group-hover:flex flex-col max-h-[94.5%] hidden-absolute botom-0 left-0 right-0 bg-[#10131f]  m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">promp</p>
        <div className="mt-5 flex justify-between items-center  gap-2">
          {/* <div className=" w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold"> */}
          <div className="rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
            name
          </div>
          <p className="text-white text-sm">name</p>
        </div>
        {/* utline-none bg-transparent border-none"> */}
        <button type="button">
          <img
            src={download}
            alt="download"
            className="w-6 h-6 object-contain invert"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
