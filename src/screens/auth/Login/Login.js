import React from "react";
import "./Login.css";
import logo from "../../../assets/logo2.png";
import imageBackground from "../../../assets/bannerbackground.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="grid justify-items-center items-center "
      style={{
        backgroundImage: `url(${imageBackground})`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no - repeat",
        marginTop: "10px",
      }}
    >
      {/* <div> */}
      <div className="grid justify-items-center">
        <img className="w-2/12" src={logo} alt="" />
        <form action="">
          {/* <div>
            <input
              className="rounded h-9 mt-2 pl-2 "
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required
            />
          </div> */}
          <br />
          <div className="-mt-3">
            <input
              className="rounded h-9 pl-2 w-full border"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />
          </div>
          <br />
          <div className="-mt-3">
            <input
              className="rounded h-9 pl-2 w-full border"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />{" "}
          </div>
          <br />
          {/* <div className="-mt-3">
            <input
              className="rounded h-9 pl-2"
              type="password"
              name="confirm-password"
              id=""
              placeholder="Confirm-Password"
              required
            />{" "}
          </div> */}
          <br />
          <div className="-mt-9">
            <input
              className="bg-red-500 rounded h-9 w-full text-white"
              type="submit"
              value="Sign in"
            />
          </div>
          <p className=" cursor-pointer font-bold">
            New to red-onion?
            <Link
              to="/signup"
              className="text-red-500 font-bold text-decoration-none"
            >
              {" "}
              Please Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Login;
