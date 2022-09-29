import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then(res => res.json())
      .then(data => setServices(data));
  });

  return (
    <div>
      {/* {services
        .filter(service => service.food === "breakfast")
        .map(task => (
          <li>{task.name}</li>
        ))} */}
    </div>
  );
};

export default Services;
