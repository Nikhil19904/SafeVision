import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CheckoutStepper from "../components/CheckoutStepper"; // ✅ Stepper import

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* ✅ Checkout Stepper */}
      <CheckoutStepper currentStep={4} />

      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8 text-center space-y-6">
        {/* Success Icon */}
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600">
          Thank you for shopping with us. Your order has been placed and will be
          delivered soon.
        </p>

        {/* Order Summary */}
        <div className="border-t pt-4 text-left space-y-2">
          <p>
            <span className="font-semibold">Order ID:</span> #123456789
          </p>
          <p>
            <span className="font-semibold">Estimated Delivery:</span>{" "}
            12th Sept, 2025
          </p>
          <p>
            <span className="font-semibold">Payment Method:</span> UPI (Google
            Pay)
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md shadow-md transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/orders"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-md shadow-md transition"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
