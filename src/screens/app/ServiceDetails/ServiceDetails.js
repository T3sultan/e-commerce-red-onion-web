import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [foods] = useState([]);
  useEffect(() => {
    // fetch("service.json")
    //   .then(res => res.json())
    //   .then(data => setFoods(data));
  }, []);

  return (
    <div>
      <p>id :{serviceId}</p>
      <h4>Name: {foods.name}</h4>
    </div>
  );
};

export default ServiceDetails;
