import CartItem from "../features/cart/components/CartItem";

import { useCart } from "../features/cart/hooks/useCart";

import { Link } from "react-router-dom";

const Chart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => 
      total + item.price * item.quantity,
    0
  )

  const deliveryFee = 150;

  const tax = subtotal * 0.16;

  const total = subtotal + deliveryFee + tax;

  return (
     <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={
              increaseQuantity
            }
            decreaseQuantity={
              decreaseQuantity
            }
            removeFromCart={
              removeFromCart
            }
          />
        ))}
      </div>

      <div
        className="
          mt-10
          border-t
          pt-6
        "
      >
        <p>
          Subtotal:
          <strong>
            {" "}
            KES {subtotal.toFixed(2)}
          </strong>
        </p>

        <p>
          Delivery:
          <strong>
            {" "}
            KES {deliveryFee}
          </strong>
        </p>

        <p>
          Tax:
          <strong>
            {" "}
            KES {tax.toFixed(2)}
          </strong>
        </p>

        <h2 className="text-2xl font-bold mt-4">
          Total:
          KES {total.toFixed(2)}
        </h2>

        <Link
          to="/checkout"
          className="
            inline-block
            mt-6
            bg-orange-500
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Chart;