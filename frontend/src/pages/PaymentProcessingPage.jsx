import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentProcessingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { method, upiId } = location.state || {};

  useEffect(() => {
    if (!method) {
      navigate("/payment-selection");
      return;
    }

    // Simulate payment API call
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success
      if (success) {
        navigate("/payment-success", { state: { method, upiId } });
      } else {
        navigate("/payment-failure", { state: { method, upiId } });
      }
    }, 2000);
  }, [method, navigate, upiId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="loader border-t-4 border-indigo-600 w-12 h-12 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg font-medium">Processing your {method} payment...</p>
      </div>
    </div>
  );
}
