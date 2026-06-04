
const MenuItemCard = ({
    item,
    onAddToCart,
}) => {
  return (
    <div
    className="
      flex
      rounded-lg
      justify-between
      items-center
      border-b
      border-b-gray-400
      p-4
      "
    >
        <div>
            <h3 className="font-semibold">
                {item.name}
            </h3>

            <p>KES {item.price}</p>
        </div>

        <button
        onClick={() => onAddToCart(item)}
        className="
            bg-orange-500
            text-white
            px-4
            py-2
            rounded
        "
        >
            Add
        </button>
    </div>
  )
}

export default MenuItemCard;