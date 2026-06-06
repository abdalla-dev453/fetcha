import { Link } from "react-router-dom";
import { useCart } from "../../features/cart/hooks/useCart";


const Navbar = () => {
    const { cartItems } = useCart();
  return (
    <nav className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
            <h1 className="text-2xl font-bold">
                Fetcha
            </h1>

            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/restaurants">Restaurants</Link>
                <Link to="/cart">Cart ({cartItems.length})</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;