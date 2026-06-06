import { useOrders } from "../hooks/useOrders";

const OrdersPage = () => {
    const { orders } = useOrders();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">
                My Orders
            </h1>

            <div>
                {orders.map((order) => (
                    <div 
                      key={order.id}
                      className="bg-white p-4 rounded-lg shadow-md mb-4"
                    >
                        <h2 className="font-bold">
                            Order #{order.id}
                        </h2>
                        <p>
                            Status: {order.status}
                        </p>
                        <p>
                            Total:
                            KES {order.total.toFixed(2)}
                        </p>
                        <p>
                            Payment:
                            {
                            order.customer.paymentMethod
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrdersPage;