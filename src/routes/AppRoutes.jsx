import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/restaurants"
        element={<Restaurants />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
}

export default AppRoutes;