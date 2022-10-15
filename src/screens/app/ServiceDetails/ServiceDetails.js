import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [foods, setFoods] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  console.log(serviceId);
  return (
    <div>
      <div>
        <p>{foods.name}</p>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceDetails;
