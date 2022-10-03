import React, { useState } from "react";
import "./Signup.css";
import logo from "../../../assets/logo2.png";
import imageBackground from "../../../assets/bannerbackground.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../app/Home/Loading";
import SocilLogin from "../Login/SocilLogin";

const Signup = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigateSignup = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading />;
  }
  if (user) {
    console.log("user", user);
  }
  const handleSignup = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  return (
    <div
      className="grid justify-items-center items-center h-full "
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
      <div className="grid justify-items-center ">
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
          {/* <br /> */}
          <div className="mt-2 ">
            <input
              onClick={() => setAgree(!agree)}
              className="-ml-16"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label
              className={`${agree ? "" : "text-red-400"} ml-2`}
              htmlFor="terms"
            >
              Accept Terms and Conditions
            </label>
          </div>

          <div className="mt-3">
            <input
              disabled={!agree}
              className="bg-red-500 rounded h-9 w-full text-white"
              type="submit"
              value="Sign up"
            />
          </div>
          <p className=" cursor-pointer font-bold text-gray-700 mt-2">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-400 text-decoration-none font-bold"
              onClick={navigateSignup}
            >
              {" "}
              Please Login
            </Link>
          </p>
        </form>
        <SocilLogin />
      </div>
    </div>
  );
};

export default Signup;
