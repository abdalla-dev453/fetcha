import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-xl shadow">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-52 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h2 className="font-bold text-xl">
          {restaurant.name}
        </h2>

        <p className="text-gray-500">
          {restaurant.category}
        </p>

        <Link
          to={`/restaurants/${restaurant.id}`}
          className="
            inline-block
            mt-4
            bg-orange-500
            text-white
            px-4
            py-2
            rounded
          "
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;