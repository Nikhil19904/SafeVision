import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { method, upiId } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful 🎉</h2>
        <p className="mb-2">Method: {method}</p>
        {upiId && <p className="mb-2">UPI ID: {upiId}</p>}

        <button
          onClick={() => navigate("/booking-confirmation")}
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
