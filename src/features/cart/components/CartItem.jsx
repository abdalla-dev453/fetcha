
const CartItem = ({
    item,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
}) => {
    return (
        <div
            className="
        border
        rounded-lg
        p-4
        flex
        justify-between
        items-center
        "
        >
            <div>
                <h3 className="font-bold">
                    {item.name}
                </h3>

                <p>
                    KES {item.price}
                </p>
                <p>
                    Quantity:{item.quantity}
                </p>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() =>
                        decreaseQuantity(item.id)
                    }
                    className="px-3 py-1 bg-gray-200 rounded"
                >
                    -
                </button>
                <button
                    onClick={() =>
                        increaseQuantity(item.id)
                    }
                    className="
            px-3
            py-1
            bg-orange-500
            text-white
            rounded
          "
                >
                    +
                </button>

                <button
                    onClick={() =>
                        removeFromCart(item.id)
                    }
                    className="
            px-3
            py-1
            bg-red-500
            text-white
            rounded
          "
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem;