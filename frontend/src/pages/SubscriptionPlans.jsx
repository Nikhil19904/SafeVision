import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutStepper from "../components/CheckoutStepper"; // ✅ Stepper import

export default function SubscriptionPlans() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const plans = [
    {
      id: "basic",
      name: "Basic AMC Plan",
      details: "Remote support via call/email",
      price: 499,
    },
    {
      id: "premium",
      name: "Premium AMC Plan",
      details: "On-site technician + priority support",
      price: 1999,
    },
    {
      id: "none",
      name: "No AMC Plan",
      details: "Skip subscription, pay per service",
      price: 0,
    },
  ];

  const handleContinue = () => {
    if (!selected) {
      alert("Please select a plan to continue!");
      return;
    }

    // ✅ Subscription ko store karke next step pe bhej sakte ho (context ya localStorage use karo)
    localStorage.setItem("subscriptionPlan", selected);

    navigate("/review-order");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* ✅ Checkout Stepper */}
      <CheckoutStepper currentStep={3} />

      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-3">
          Choose an AMC (Annual Maintenance Contract) Plan
        </h2>

        {/* Plans List */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <label
              key={plan.id}
              className={`block border rounded-md px-4 py-3 cursor-pointer transition ${
                selected === plan.id
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setSelected(plan.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{plan.name}</p>
                  <p className="text-sm text-gray-600">{plan.details}</p>
                </div>
                <p className="font-semibold text-gray-800">
                  {plan.price > 0 ? `₹${plan.price}/year` : "Free"}
                </p>
              </div>
            </label>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition"
        >
          Continue to Review
        </button>
      </div>
    </div>
  );
}
