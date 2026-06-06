import { useState } from "react";
import { useOrders } from "../hooks/useOrders";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../cart/hooks/useCart";


const CheckoutPage = () => {

    const navigate = useNavigate();

    const {cartItems } = useCart();
    const { createOrder } = useOrders();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        paymentMethod: "Cash",
    });

    const subtotal  = cartItems.reduce(
        (total, item) => 
        total + item.price * item.quantity,
        0
    );

    const deliveryFee = 150;
    const tax = subtotal * 0.16;

    const total = subtotal + deliveryFee + tax;

    const handleSubmit = (e) => {
        e.preventDefault();

        createOrder({
            customer: formData,
            items: cartItems,
            subtotal,
            deliveryFee,
            tax,
            total,
        });

        navigate("/orders");
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">
                Checkout
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            fullName: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            phone: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            address: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            paymentMethod: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                >
                    <option value="Cash">Cash</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Stripe">Stripe</option>
                    <option value="M-Pesa">M-Pesa</option>
                    <option value="Card">Card</option>
                </select>


                <div className="border rounded p-4">
                    <h2 className="font-bold mb-3">
                        Order Summary
                    </h2>

                    <p>
                        Subtotal: KES{" "}
                        {subtotal.toFixed(2)}
                    </p>

                    <p>
                        Delivery Fee: KES{deliveryFee}
                    </p>

                    <p>
                        Tax: KES {tax.toFixed(2)}
                    </p>

                    <h3v className="font-bold mt-3">
                        Total: KES {total.toFixed(2)}
                    </h3v>
                </div>


                <button 
                className="bg-orange-500
                text-white
                px-6 py-3 
                rounded
                "
                type="submit"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
    }

    export default CheckoutPage;