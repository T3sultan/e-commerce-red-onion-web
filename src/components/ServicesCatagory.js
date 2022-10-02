import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

import "./ServiceCategory.css";
import Skeleton from "./Skeleton";

const ServicesCatagory = () => {
  const [menuTab, setMenuTab] = useState("breakfast");
  const [loading] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const handleMenuTabs = type => {
    setMenuTab(type);
    console.log("break");
  };

  return (
    <div className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        <p
          style={{
            fontFamily: "breakfast" ? "bold" : "none",
            fontSize: "breakfast" ? "18px " : "18px",
            cursor: "pointer",
          }}
          className={menuTab === "breakfast" ? "text-green-700" : "none"}
          onClick={() => handleMenuTabs("breakfast")}
        >
          BreakFast
        </p>
        <p
          style={{
            fontFamily: "lunch" ? "bold" : "none",
            fontSize: "lunch" ? "18px " : "18px",
            cursor: "pointer",
          }}
          className={menuTab === "lunch" ? "text-green-700" : "none"}
          onClick={() => handleMenuTabs("lunch")}
        >
          Lunch
        </p>
        <p
          style={{
            fontFamily: "dinner" ? "bold" : "none",
            fontSize: "dinner" ? "18px " : "18px",
            cursor: "pointer",
          }}
          className={menuTab === "dinner" ? "text-green-700" : "none"}
          onClick={() => handleMenuTabs("dinner")}
        >
          Dinner
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {services
          .filter(item => menuTab === item.food)
          .map(item =>
            loading ? (
              <Skeleton key={item._id} />
            ) : (
              <FoodItem key={item._id} {...item} />
            )
          )}
      </div>
    </div>
  );
};

export default ServicesCatagory;
