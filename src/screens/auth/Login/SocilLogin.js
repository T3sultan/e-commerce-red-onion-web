import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../app/Home/Loading";
import google from "../../../assets/google_.png";
import github from "../../../assets/gith.png";

const SocilLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;
  if (loading || loading1) {
    return <Loading />;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-red-400">
        Error:{error.message}
        {error1.message}{" "}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="grid justify-items-center items-center justify-center ">
      <div className="">
        <div className="flex ">
          <div className="bg-gray-500 mt-5 w-28 h-0.5 "></div>
          <p className="mt-2 ml-1 mr-1">or</p>
          <div className=" w-28 bg-gray-500 h-0.5 mt-5"></div>
        </div>
        {errorElement}
        <div className=" mt-1 flex justify-center items-center">
          <button onClick={() => signInWithGoogle()} className="mr-2">
            <img className="w-full" src={google} alt="" />
          </button>
          <button onClick={() => signInWithGithub()}>
            <img className="w-7" src={github} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocilLogin;
