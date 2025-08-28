import { useNavigate, useLocation } from "react-router-dom";

export default function PaymentFailurePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const method = state?.method;

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-red-600">Payment Failed!</h2>
        <p className="mt-2 text-gray-600">Your {method} payment could not be processed.</p>
        <button
          onClick={() => navigate("/payment-selection")}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
