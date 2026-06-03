import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

import Login from  "../features/auth/pages/Login"; 
import Register from "../features/auth/pages/Register";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
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

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;