import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AuthProvider from "./features/auth/context/AuthContext.jsx";
import CartProvider from "./features/cart/context/CartContext.jsx";
import OrderProvider from "./features/orders/context/OrderContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      <OrderProvider>
      <App />
      </OrderProvider>
      </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);