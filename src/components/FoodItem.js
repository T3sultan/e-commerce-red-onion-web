import React from "react";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ image, name, description, price, _id }) => {
  const navigate = useNavigate();

  const navigateDetails = _id => {
    navigate(`/service/${_id}`);
  };

  return (
    <div
      onClick={() => navigateDetails(_id)}
      className="bg-white  border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
    >
      <img
        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
        src={image}
        alt=""
      />
      <div className="flex flex-col items-center my-1 space-y-2">
        <h1 className="text-gray-600 poppins text-lg font-bold">{name}</h1>
        <p className="text-gray-500 poppins text-sm text-center">
          {description}
        </p>
        <h2 className="text-gray-900 poppins text-2xl ">${price}</h2>
      </div>
    </div>
  );
};

export default FoodItem;
