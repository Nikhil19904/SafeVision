import { useNavigate } from "react-router-dom";
import CheckoutStepper from "../components/CheckoutStepper"; // ✅ Stepper import

export default function ReviewOrder() {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* ✅ Checkout Stepper */}
      <CheckoutStepper currentStep={3} />

      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-3">
          Review Your Order
        </h2>

        {/* Delivery Address */}
        <div>
          <h3 className="font-medium text-lg mb-1">Delivery Address</h3>
          <p className="text-gray-700">John Doe</p>
          <p className="text-gray-700">221B Baker Street, London</p>
          <p className="text-gray-700">📞 +44 123 4567</p>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="font-medium text-lg mb-1">Payment Method</h3>
          <p className="text-gray-700">UPI (Google Pay)</p>
        </div>

        {/* Order Items */}
        <div>
          <h3 className="font-medium text-lg mb-1">Items</h3>
          <div className="border rounded-md p-3 space-y-2">
            <p>📷 CCTV Camera Pro (Qty: 1) — ₹4999</p>
            <p>🔧 Installation Service — ₹999</p>
          </div>
        </div>

        {/* Price Summary */}
        <div className="border-t pt-3">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>₹5998</span>
          </p>
          <p className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹5998</span>
          </p>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition"
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
}
