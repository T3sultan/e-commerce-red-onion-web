import React, { useRef } from "react";
import "./Login.css";
import logo from "../../../assets/logo2.png";
import imageBackground from "../../../assets/bannerbackground.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../app/Home/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-red-400">Error: {error?.message}</p>;
  }
  const handleSignIn = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateSignUp = () => {
    navigate("/signup");
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
      <div className="grid justify-items-center">
        <img className="w-2/12" src={logo} alt="" />
        <form onSubmit={handleSignIn}>
          <br />
          <div className="-mt-3">
            <input
              className="rounded h-9 pl-2 w-full border"
              type="email"
              name="email"
              id=""
              ref={emailRef}
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
              ref={passwordRef}
              id=""
              placeholder="Password"
              required
            />{" "}
          </div>
          <br />

          <br />
          <div className="-mt-9">
            <input
              className="bg-red-500 rounded h-9 w-full text-white"
              type="submit"
              value="Sign in"
            />
          </div>
          {errorElement}
          <p className=" cursor-pointer font-bold">
            New to red-onion?
            <Link
              onClick={navigateSignUp}
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
  );
};

export default Login;
