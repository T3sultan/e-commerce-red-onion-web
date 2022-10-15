import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/app/Home/Home";
import ServiceDetails from "./screens/app/ServiceDetails/ServiceDetails";
import Login from "./screens/auth/Login/Login";
import Signup from "./screens/auth/Signup/Signup";
import PageNotFound from "./screens/app/Home/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RequireAuth from "./screens/auth/Login/RequireAuth";
import Checkout from "./screens/app/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import AllProducts from "./screens/AllProuduct/AllProducts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <ServiceDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/allProducts" element={<AllProducts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
