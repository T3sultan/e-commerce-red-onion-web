import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/app/Home/Home";
import ServiceDetails from "./screens/app/ServiceDetails/ServiceDetails";
import Login from "./screens/auth/Login/Login";
import Signup from "./screens/auth/Signup/Signup";
import PageNotFound from "./screens/app/Home/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BreakFast from "./screens/app/Home/BreakFast/BreakFast";
import Lunch from "./screens/app/Home/Lunch/Lunch";
import Dinner from "./screens/app/Home/Dinner/Dinner";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <Route path="/breakfast" element={<BreakFast />}></Route>
        <Route path="/lunch" element={<Lunch />}></Route>
        <Route path="/dinner" element={<Dinner />}></Route> */}

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
