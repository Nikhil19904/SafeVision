import { useNavigate } from "react-router-dom";

export default function PaymentSelection() {
  const navigate = useNavigate();

  const handleSelect = (method) => {
    switch (method) {
      case "UPI":
        navigate("/upi-payment");
        break;
      case "Card":
        navigate("/card-payment");
        break;
      case "NetBanking":
        navigate("/netbanking-payment");
        break;
      case "COD":
        navigate("/cod-payment");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6 space-y-5">
        <h2 className="text-2xl font-bold text-gray-900">Select Payment Method</h2>
        <p className="text-sm text-gray-600">Choose your preferred payment option:</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSelect("UPI")}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-left hover:bg-gray-50 transition"
          >
            UPI (Google Pay, PhonePe, Paytm)
          </button>
          <button
            onClick={() => handleSelect("Card")}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-left hover:bg-gray-50 transition"
          >
            Credit / Debit Card
          </button>
          <button
            onClick={() => handleSelect("NetBanking")}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-left hover:bg-gray-50 transition"
          >
            Net Banking
          </button>
          <button
            onClick={() => handleSelect("COD")}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-left hover:bg-gray-50 transition"
          >
            Cash on Delivery (COD)
          </button>
        </div>
      </div>
    </div>
  );
}
