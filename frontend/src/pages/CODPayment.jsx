import { useNavigate } from "react-router-dom";

export default function CODPayment() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/payment-processing", { state: { method: "COD" } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6 space-y-5">
        <h2 className="text-2xl font-bold text-gray-900">Cash on Delivery</h2>
        <p className="text-sm text-gray-600">Pay with cash when your order is delivered.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4 text-sm">
          <p><strong>Delivery Address:</strong></p>
          <p>John Doe</p>
          <p>123, Safe Vision Street</p>
          <p>Delhi, India - 110001</p>
        </div>

        <button
          onClick={handleConfirm}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-semibold transition shadow-sm"
        >
          Confirm Order
        </button>

        <div className="text-xs text-gray-500 text-center">
          ✅ Pay in cash when delivered
        </div>
      </div>
    </div>
  );
}
