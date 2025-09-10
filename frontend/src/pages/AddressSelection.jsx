import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutStepper from "../components/CheckoutStepper"; // ✅ Stepper ko import karo

export default function AddressSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const addresses = [
    {
      id: 1,
      name: "John Doe",
      address: "221B Baker Street, London",
      phone: "+44 123 4567",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "742 Evergreen Terrace, Springfield",
      phone: "+1 555 9876",
    },
  ];

  const handleContinue = () => {
    if (!selected) return alert("Please select an address!");
    navigate("/payment-selection");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* ✅ Stepper */}
      <CheckoutStepper currentStep={1} />

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-3">
          Select a delivery address
        </h2>

        <div className="space-y-4">
          {addresses.map((addr) => (
            <label
              key={addr.id}
              className={`block border rounded-md px-4 py-3 cursor-pointer transition ${
                selected === addr.id
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setSelected(addr.id)}
            >
              <input
                type="radio"
                name="address"
                value={addr.id}
                checked={selected === addr.id}
                onChange={() => setSelected(addr.id)}
                className="mr-2 text-yellow-500"
              />
              <div>
                <p className="font-medium">{addr.name}</p>
                <p className="text-sm text-gray-600">{addr.address}</p>
                <p className="text-sm text-gray-600">📞 {addr.phone}</p>
              </div>
            </label>
          ))}
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
