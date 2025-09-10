import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { method, status } = location.state || {};

  if (!status) {
    navigate("/"); // If accessed directly, redirect to home
  }

  const handleDownloadInvoice = () => {
    alert("Invoice downloaded! (Demo)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6 space-y-5 text-center">
        {status === "success" ? (
          <>
            <h2 className="text-2xl font-bold text-green-600">Payment Successful ✅</h2>
            <p className="text-gray-600 text-sm">
              Your order has been confirmed. Payment made via {method}.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-left text-sm">
              <p><strong>Order Number:</strong> #SV{Math.floor(Math.random() * 100000)}</p>
              <p><strong>Amount Paid:</strong> ₹3,500</p>
              <p><strong>Estimated Delivery:</strong> 2-3 Business Days</p>
            </div>

            <button
              onClick={handleDownloadInvoice}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-semibold transition"
            >
              Download Invoice
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md font-semibold transition"
            >
              Back to Home
            </button>
          </>
        ) : (
          <h2 className="text-2xl font-bold text-red-500">Payment Failed ❌</h2>
        )}
      </div>
    </div>
  );
}
