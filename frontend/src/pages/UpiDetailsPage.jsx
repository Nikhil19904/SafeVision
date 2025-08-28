import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpiDetailsPage() {
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();

  const handlePay = () => {
    if (!upiId.includes("@")) {
      alert("Please enter a valid UPI ID!");
      return;
    }
    // Go to processing page
    navigate("/payment-processing", { state: { method: "UPI", upiId } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Enter UPI Details</h2>

        <input
          type="text"
          placeholder="yourname@upi"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handlePay}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
