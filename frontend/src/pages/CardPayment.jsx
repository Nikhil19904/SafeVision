import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePay = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill all card details!");
      return;
    }
    navigate("/payment-processing", {
      state: { method: "Card", cardNumber, expiry },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6 space-y-5">
        <h2 className="text-2xl font-bold text-gray-900">Card Payment</h2>
        <p className="text-sm text-gray-600">Enter your card details to pay securely.</p>

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        <button
          onClick={handlePay}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-semibold transition shadow-sm"
        >
          Pay Now
        </button>

        <div className="text-xs text-gray-500 text-center">
          🔒 Secured with SSL encryption
        </div>
      </div>
    </div>
  );
}
