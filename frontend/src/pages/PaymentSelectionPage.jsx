import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentSelectionPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("");

  const handleProceed = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    if (method === "UPI") {
      // UPI ke liye details page khulega
      navigate("/upi-details");
    } else {
      // Card / NetBanking ke liye direct processing
      navigate("/payment-processing", { state: { method } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Select Payment Method</h2>

        <div className="space-y-3">
          <label className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Credit/Debit Card"
              onChange={(e) => setMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>
          <label className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setMethod(e.target.value)}
            />
            UPI
          </label>
          <label className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Net Banking"
              onChange={(e) => setMethod(e.target.value)}
            />
            Net Banking
          </label>
        </div>

        <button
          onClick={handleProceed}
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
