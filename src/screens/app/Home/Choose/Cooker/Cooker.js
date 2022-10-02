import React from "react";

const Cooker = ({ name, des, image, icon }) => {
  return (
    <div className="bg-white  border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <img
        className=" mx-auto transform transition duration-300 hover:scale-105"
        src={image}
        alt=""
      />
      <div className="flex ">
        <div className="mt-3 mr-3">
          <img className="w-14" src={icon} alt="" />
        </div>
        <div>
          <h3 className=" text-2xl text-start mt-2 ">{name}</h3>
          <p className="text-sm text-gray-600 text-start mt-2">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Cooker;
