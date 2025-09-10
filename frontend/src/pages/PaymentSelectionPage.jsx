import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutStepper from "../components/CheckoutStepper"; // ✅ Stepper import

export default function PaymentSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleSelect = (method) => {
    setSelected(method);
  };

  const handleContinue = () => {
    switch (selected) {
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
        alert("Please select a payment method!");
    }
  };

  const options = [
    {
      id: "UPI",
      label: "UPI (Google Pay, PhonePe, Paytm)",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/PhonePe_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png",
      ],
    },
    {
      id: "Card",
      label: "Credit / Debit Card",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/RuPay_Logo.png",
      ],
    },
    {
      id: "NetBanking",
      label: "Net Banking",
      logos: ["https://cdn-icons-png.flaticon.com/512/2331/2331948.png"],
    },
    {
      id: "COD",
      label: "Cash on Delivery (COD)",
      logos: ["https://cdn-icons-png.flaticon.com/512/1041/1041873.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* ✅ Checkout Stepper */}
      <CheckoutStepper currentStep={2} />

      <div className="bg-white border border-gray-200 shadow-md rounded-lg w-full max-w-lg p-6 space-y-6">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-3">
          Select a payment method
        </h2>

        {/* Payment Methods */}
        <div className="space-y-4">
          {options.map((option) => (
            <label
              key={option.id}
              className={`flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer transition ${
                selected === option.id
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => handleSelect(option.id)}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value={option.id}
                  checked={selected === option.id}
                  onChange={() => handleSelect(option.id)}
                  className="h-4 w-4 text-yellow-500"
                />
                <span className="text-gray-800 font-medium">
                  {option.label}
                </span>
              </div>

              {/* Logos */}
              <div className="flex gap-2">
                {option.logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="logo"
                    className="h-6 object-contain"
                  />
                ))}
              </div>
            </label>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md shadow-md transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
