import React from "react";
import Banner from "../../../components/Banner/Banner";
import ServicesCatagory from "../../../components/ServicesCatagory";
import Services from "../Services/Services";
import Choose from "./Choose/Choose";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesCatagory></ServicesCatagory>
      {/* <Services></Services> */}
      <Choose></Choose>
    </div>
  );
};

export default Home;
