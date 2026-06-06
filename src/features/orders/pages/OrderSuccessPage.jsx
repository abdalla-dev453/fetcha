import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-green-600">
                    Order Placed!
                </h1>

                <p className="mt-4">
                    Your food is being prepared.
                </p>

                <Link
                   to={"/orders"}
                   className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded"
                >
                View Orders
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccessPage;