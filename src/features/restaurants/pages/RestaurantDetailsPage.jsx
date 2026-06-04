import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";
import MenuItemCard from "../components/MenuItemCard";
import { useCart } from "../../cart/hooks/useCart";

const RestaurantDetailPage = () => {
    const { id } = useParams();

    const { addToCart } = useCart();

    const restaurant = restaurants.find(
        (r) => r.id === parseInt(id)
    );

    if (!restaurant) {
        return (
            <h1 className="p-6">
                Restaurant not Found
            </h1>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <img 
            src={restaurant.image}
            alt={restaurant.name}
            className="h-72 w-full object-cover rounded-lg"
            />

            <h1 className="text-4xl font-bold mt-6">
                {restaurant.name}
            </h1>

            <p className="text-gray-500">
                {restaurant.category}
            </p>

            <div className="mt-6 space-y-4">
                {restaurant.menu.map((item) => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    )
};

export default RestaurantDetailPage;