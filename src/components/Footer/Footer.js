import React from "react";
import "./Footer.css";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className=" bg-slate-900">
      <div
        className="  grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-10 
    mt-10"
      >
        <div className="ml-10 mt-10">
          <img className="w-2/12" src={logo} alt="" />
        </div>

        <div className="mt-10">
          <Link className="text-white ">About Online Food</Link>
          <br />
          <Link className="text-white">Read our blog</Link>
          <br />
          <Link className="text-white">Sign up to deliver</Link>
          <br />
          <Link className="text-white">Add your restaurant</Link>
          <br />
        </div>
        <div className="mt-10">
          <Link className="text-white">Get help</Link>
          <Link className="text-white">Read FAQs</Link>
          <br />
          <Link className="text-white">View all cities</Link>
          <br />
          <Link className="text-white">Restaurants near me</Link>
          <br />
        </div>
      </div>
      <p className=" mt-5">copyright@ {year} Tipu Sultan</p>
    </div>
  );
};

export default Footer;
