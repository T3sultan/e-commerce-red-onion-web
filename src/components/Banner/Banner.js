import React from "react";
import "./Banner.css";
import backgroundImage from "../../assets/bannerbackground.png";

const Banner = () => {
  return (
    <div
      className="grid justify-items-center items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no - repeat",
        marginTop: "10px",
      }}
    >
      <div>
        <h1 className="font-bold text-3xl text-gray-500  ">
          Best food waiting for your belly
        </h1>
        <input
          className="mt-5  w-3/5 h-8 b rounded-2xl "
          type="text"
          placeholder="  Search food items"
        />{" "}
        <button className="bg-rose-500 rounded-2xl w-1/4 h-8 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
