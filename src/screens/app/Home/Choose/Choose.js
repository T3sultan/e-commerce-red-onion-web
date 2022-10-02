import React from "react";
import "./Choose.css";
import Cooker from "./Cooker/Cooker";
import image1 from "../../../../assets/image1.png";
import image2 from "../../../../assets/image2.png";
import image3 from "../../../../assets/image3.png";
import icon1 from "../../../../assets/Group 204.png";
import icon2 from "../../../../assets/Group 1133.png";
import icon3 from "../../../../assets/Group 245.png";

const Choose = () => {
  return (
    <div className="m-10">
      <div className="text-start ">
        <h1 className=" font-bold  text-gray-800 text-2xl">
          Why you choose us
        </h1>
        <p className="mt-2  text-sm text-gray-600">
          Barton waited twenty repair in within we do. An delighted offending{" "}
          <br />
          curiosity my is dashwoods at. Boy prosperous increasing surrounded
        </p>
      </div>
      <div
        className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-10 
      mt-12"
      >
        <Cooker
          name="Fast Delivery"
          des="keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future"
          image={image1}
          icon={icon1}
        ></Cooker>

        <Cooker
          icon={icon2}
          image={image2}
          name="A Good Auto Responder"
          des="keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future"
        ></Cooker>
        <Cooker
          image={image3}
          icon={icon3}
          name="Home Delivery"
          des="keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future"
        ></Cooker>
      </div>
    </div>
  );
};

export default Choose;
