import { createContext, useState } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const createOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        status: "Pending",
        ...order,
      },
    ]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;