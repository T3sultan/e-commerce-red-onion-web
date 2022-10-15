import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [foods, setFoods] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  }, [serviceId]);

  //className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 justify-items-center items-center"

  return (
    <div className=" justify-center mt-6 grid grid-cols-1 md:grid-cols-2">
      <div className="-mr-8 mt-14 ">
        <p className="text-2xl font-bold mr-16 ">{foods.name}</p>
        <p className="mt-3 mr-4  text-gray-400 text-sm">{foods.description}</p>
        <div className="mt-4 flex ml-60">
          <p className="text-2xl mr-3 font-bold">${foods.price}</p>
          <div className="border flex w-20 h-8 justify-center rounded-2xl ">
            <button className="">
              <Icon className="mr-1" icon="ep:minus" />{" "}
            </button>
            <p>1</p>
            <button>
              <Icon className="ml-1" icon="ep:plus" />{" "}
            </button>
          </div>
        </div>
        <Link to={`/checkout/${serviceId}`}>
          <button className="ml-60 mt-9 border w-28 h-8 rounded-3xl bg-fuchsia-700 flex justify-center items-center">
            <Icon className="text-white" icon="ep:shopping-cart" />
            <h4 className="text-white ml-2">Add</h4>
          </button>
        </Link>
      </div>
      <div className="-mr-96  ">
        <img className=" w-2/5 " src={foods.image} alt="" />
      </div>
    </div>
  );
};

export default ServiceDetails;
