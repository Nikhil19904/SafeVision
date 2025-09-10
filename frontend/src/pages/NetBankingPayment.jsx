import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NetBankingPayment() {
  const [bank, setBank] = useState("");
  const navigate = useNavigate();

  const handlePay = () => {
    if (!bank) {
      alert("Please select a bank!");
      return;
    }
    navigate("/payment-processing", { state: { method: "NetBanking", bank } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6 space-y-5">
        <h2 className="text-2xl font-bold text-gray-900">Net Banking</h2>
        <p className="text-sm text-gray-600">Select your bank to proceed.</p>

        <select
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition mb-4"
        >
          <option value="">-- Select Bank --</option>
          <option value="SBI">State Bank of India</option>
          <option value="HDFC">HDFC Bank</option>
          <option value="ICICI">ICICI Bank</option>
          <option value="Axis">Axis Bank</option>
          <option value="Kotak">Kotak Mahindra Bank</option>
        </select>

        <button
          onClick={handlePay}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-semibold transition shadow-sm"
        >
          Proceed to Pay
        </button>

        <div className="text-xs text-gray-500 text-center">
          ✅ Redirecting securely to your bank
        </div>
      </div>
    </div>
  );
}
