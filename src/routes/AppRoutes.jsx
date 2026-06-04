import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

// Auth Pages
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

// Restaurant Pages
import RestaurantsPage from "../features/restaurants/pages/RestaurantsPage";
import RestaurantDetailsPage from "../features/restaurants/pages/RestaurantDetailsPage";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route
        path="/restaurants"
        element={<RestaurantsPage />}
      />

      <Route
        path="/restaurants/:id"
        element={<RestaurantDetailsPage />}
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

      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-[70vh]">
            <div className="text-center">
              <h1 className="text-5xl font-bold">
                404
              </h1>

              <p className="mt-4 text-gray-500">
                Page Not Found
              </p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;