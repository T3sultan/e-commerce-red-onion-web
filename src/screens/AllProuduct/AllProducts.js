import React, { useEffect, useState } from "react";
import FoodItem from "../../components/FoodItem";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  //pagination
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(8);

  //page number data hit
  useEffect(() => {
    const url = `http://localhost:5000/service?page=${page}&size=${size}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, [page, size]);

  //   useEffect(() => {
  //     const url = "http://localhost:5000/service";
  //     fetch(url)
  //       .then(res => res.json())
  //       .then(data => setAllProducts(data));
  //   }, []);

  //pagination data load
  useEffect(() => {
    const url = "http://localhost:5000/serviceCount";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 6);
        setPageCount(pages);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
      {allProducts.map(allProduct => (
        <FoodItem key={allProduct._id} {...allProduct} />
      ))}
      {/* //pagination */}
      <div className=" bottom-0 ">
        {[...Array(pageCount).keys()].map(number => (
          <button
            style={{
              width: "20px",
              marginRight: "20px",
              backgroundColor: "white",
              border: ".5px solid gray",
            }}
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <select
          className="bg-gray-400 text-white"
          onChange={event => setSize(event.target.value)}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="10" selected>
            10
          </option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
};

export default AllProducts;
