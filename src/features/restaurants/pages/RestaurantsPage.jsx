import { useState } from "react";

import restaurants from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantsPage = () => {
  const [search, setSearch] = useState("");

  const filteredRestaurants =
    restaurants.filter((restaurant) =>
      restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Restaurants
      </h1>

      <input
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          p-3
          rounded-lg
          mb-6
        "
      />

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {filteredRestaurants.map(
          (restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RestaurantsPage;