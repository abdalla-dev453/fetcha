import Card from "../ui/Card";
import Button from "../ui/Button";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="
          h-48
          w-full
          object-cover
          rounded-lg
        "
      />

      <h2 className="text-xl font-bold mt-4">
        {restaurant.name}
      </h2>

      <p className="text-gray-500">
        {restaurant.category}
      </p>

      <div className="mt-4">
        <Button>View Menu</Button>
      </div>
    </Card>
  );
}

export default RestaurantCard;