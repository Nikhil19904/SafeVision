import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function PaymentProcessing() {
  const location = useLocation();
  const navigate = useNavigate();
  const { method } = location.state || {};

  useEffect(() => {
    // Simulate payment processing delay (3 seconds)
    const timer = setTimeout(() => {
      // After processing, redirect to confirmation page
      navigate("/payment-confirmation", { state: { method, status: "success" } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [method, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6 flex flex-col items-center">
        <Loader2 className="animate-spin mb-4 text-yellow-400" size={48} />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Processing Payment</h2>
        <p className="text-gray-600 text-sm text-center">
          Your {method} payment is being processed. Please wait a moment.
        </p>
      </div>
    </div>
  );
}
