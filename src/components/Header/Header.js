import React from "react";
import CustomLink from "../../common/CustomLink";
import "./Header.css";
import logo from "../../assets/logo2.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="flex ml-10 mr-10 mt-5 header-container">
      <img className="w-1/12 logo-container" src={logo} alt="" />
      <div>
        <nav className="flex gap-7">
          <CustomLink to="/">Home</CustomLink>
          {user ? (
            <button onClick={handleSignOut}>sign out</button>
          ) : (
            <CustomLink className="auth-container " to="/login">
              Login
            </CustomLink>
          )}

          {/* <CustomLink to="/signup">Signup</CustomLink> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
