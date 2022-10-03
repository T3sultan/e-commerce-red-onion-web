import React from "react";
import "./Signup.css";
import logo from "../../../assets/logo2.png";
import imageBackground from "../../../assets/bannerbackground.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigateSignup = () => {
    navigate("/login");
  };
  const handleSignup = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    navigate("/home");
  };

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
        <form onSubmit={handleSignup}>
          <div>
            <input
              className="rounded h-9 mt-2 pl-2 w-full"
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required
            />
          </div>
          <br />
          <div className="-mt-3">
            <input
              className="rounded h-9 pl-2 w-full"
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
              className="rounded h-9 pl-2 w-full"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />{" "}
          </div>
          <br />
          <div className="-mt-3">
            <input
              className="rounded h-9 pl-2 w-full"
              type="password"
              name="confirm-password"
              id=""
              placeholder="Confirm-Password"
              required
            />{" "}
          </div>
          <br />
          <div className="-mt-3">
            <input
              className="bg-red-500 rounded h-9 w-full text-white"
              type="submit"
              value="Sign up"
            />
          </div>
          <p className=" cursor-pointer font-bold">
            Already have an account?
            <Link
              to="/login"
              className="text-red-500 text-decoration-none font-bold"
              onClick={navigateSignup}
            >
              {" "}
              Please Login
            </Link>
          </p>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Signup;
