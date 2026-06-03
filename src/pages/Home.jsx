import restaurants from "../data/restaurants";
import RestaurantCard from "../components/restaurant/RestaurantCard";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold">
            Food Delivered Fast
          </h1>

          <p className="mt-4 text-xl">
            Order from your favorite restaurants.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Popular Restaurants
        </h2>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;