import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function UpiDetailsPage() {
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();

  const handlePay = () => {
    if (!upiId.includes("@")) {
      alert("⚠️ Please enter a valid UPI ID!");
      return;
    }
    navigate("/payment-processing", { state: { method: "UPI", upiId } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-1">UPI Payment</h2>
        <p className="text-sm text-gray-600 mb-6">
          Pay securely with your UPI ID using Google Pay, PhonePe, Paytm or any UPI app.
        </p>

        {/* Input Field */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
          <input
            type="text"
            placeholder="yourname@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
          />
        </div>

        {/* Info Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-5 text-sm space-y-1">
          <p className="flex items-center gap-2 text-yellow-800">
            <Smartphone size={16} /> Works with GPay, PhonePe, Paytm & more
          </p>
          <p className="flex items-center gap-2 text-yellow-800">
            <Zap size={16} /> Instant confirmation
          </p>
          <p className="flex items-center gap-2 text-yellow-800">
            <ShieldCheck size={16} /> No extra charges
          </p>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePay}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2.5 rounded-md font-semibold text-sm transition shadow-sm"
        >
          Pay Now
        </button>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 text-gray-500 text-xs">
          <span>🔒 100% Secure Payments</span>
          <span className="hidden sm:block">•</span>
          <span>Powered by Amazon Pay UPI</span>
        </div>
      </div>
    </div>
  );
}

