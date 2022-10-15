import React, { useEffect, useState } from "react";
import FoodItem from "../../components/FoodItem";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/service";
    fetch(url)
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
      {allProducts.map(allProduct => (
        <FoodItem key={allProduct._id} {...allProduct} />
      ))}
    </div>
  );
};

export default AllProducts;
